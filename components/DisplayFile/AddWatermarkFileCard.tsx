// AddWatermarkFileCard.tsx - COMPLETE FILE
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Trash2, FileText } from "lucide-react";
import * as pdfjs from "pdfjs-dist";
import type { PDFDocumentProxy, PageViewport, RenderTask } from "pdfjs-dist";
import { useFileStore } from "../../src/file-store";
import { setField, type ToolState } from "../../src/store";
import type { errors as _ } from "../../src/content";

// ============ TYPES ============
export interface AddWatermarkFileCardProps {
  file: File;
  errors: _;
  content: {
    page: string;
    pages: string;
    remove_file: string;
    loading: string;
    preview: string;
  };
  themeColor?: string;
}

interface PageImage {
  pageNum: number;
  imageUrl: string;
  width: number;
  height: number;
}

interface WatermarkSettings {
  type: "text" | "image";
  text: string;
  font: string;
  fontSize: number;
  color: string;
  position: number;
  mosaic: boolean;
  opacity: number;
  rotation: number;
  fromPage: number;
  toPage: number;
  layer: "over" | "below";
}

// ============ CONSTANTS ============
const THEME_COLOR_DEFAULT = "#e55039";
const THUMBNAIL_SCALE = 1.2;

// ============ SKELETON LOADER ============
const PageSkeleton = () => {
  return <div className="aspect-[8.5/11] bg-gray-200 rounded animate-pulse" />;
};

// ============ HELPER FUNCTIONS ============
async function renderPDFPage(
  file: File,
  pageNum: number,
  dispatch: ReturnType<typeof useDispatch>,
  errors: _,
  password?: string,
): Promise<PageImage | null> {
  const fileUrl = URL.createObjectURL(file);

  try {
    const loadingTask = pdfjs.getDocument({
      url: fileUrl,
      password: password || undefined,
    });

    const pdf: PDFDocumentProxy = await loadingTask.promise;
    const page = await pdf.getPage(pageNum);
    const viewport: PageViewport = page.getViewport({ scale: THUMBNAIL_SCALE });

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d", { alpha: false });

    if (!context) {
      throw new Error("Canvas context not available.");
    }

    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderTask: RenderTask = page.render({
      canvasContext: context,
      viewport: viewport,
    });

    await renderTask.promise;
    const imageUrl = canvas.toDataURL("image/jpeg", 0.9);

    URL.revokeObjectURL(fileUrl);
    return {
      pageNum,
      imageUrl,
      width: viewport.width,
      height: viewport.height,
    };
  } catch (error: any) {
    URL.revokeObjectURL(fileUrl);

    if (error?.name === "PasswordException") {
      dispatch(setField({ errorCode: "PASSWORD_REQUIRED" }));
      return null;
    }

    dispatch(
      setField({
        errorMessage: errors.FILE_CORRUPT?.message || "File is corrupt",
      }),
    );
    return null;
  }
}

async function getPDFPageCount(
  file: File,
  dispatch: ReturnType<typeof useDispatch>,
  errors: _,
  password?: string,
): Promise<number> {
  const fileUrl = URL.createObjectURL(file);

  try {
    const loadingTask = pdfjs.getDocument({
      url: fileUrl,
      password: password || undefined,
    });

    const pdf: PDFDocumentProxy = await loadingTask.promise;
    const pageCount = pdf.numPages;

    URL.revokeObjectURL(fileUrl);
    return pageCount;
  } catch (error: any) {
    URL.revokeObjectURL(fileUrl);

    if (error?.name === "PasswordException") {
      dispatch(setField({ errorCode: "PASSWORD_REQUIRED" }));
      return 0;
    }

    dispatch(
      setField({
        errorMessage: errors.FILE_CORRUPT?.message || "File is corrupt",
      }),
    );
    return 0;
  }
}

function getWatermarkPosition(
  position: number,
  pageWidth: number,
  pageHeight: number,
) {
  const positions = [
    { x: 0.1, y: 0.1 }, // Top-left
    { x: 0.5, y: 0.1 }, // Top-center
    { x: 0.9, y: 0.1 }, // Top-right
    { x: 0.1, y: 0.5 }, // Middle-left
    { x: 0.5, y: 0.5 }, // Center
    { x: 0.9, y: 0.5 }, // Middle-right
    { x: 0.1, y: 0.9 }, // Bottom-left
    { x: 0.5, y: 0.9 }, // Bottom-center
    { x: 0.9, y: 0.9 }, // Bottom-right
  ];

  const pos = positions[position] || positions[4];
  return {
    x: pos.x * pageWidth,
    y: pos.y * pageHeight,
  };
}

// ============ PAGE WITH WATERMARK COMPONENT ============
interface PageWithWatermarkProps {
  pageImage: PageImage;
  watermarkSettings: WatermarkSettings;
  watermarkImageUrl: string;
  themeColor: string;
}

const PageWithWatermark = ({
  pageImage,
  watermarkSettings,
  watermarkImageUrl,
  themeColor,
}: PageWithWatermarkProps) => {
  const shouldShowWatermark =
    pageImage.pageNum >= watermarkSettings.fromPage &&
    pageImage.pageNum <= watermarkSettings.toPage;

  const position = getWatermarkPosition(
    watermarkSettings.position,
    pageImage.width,
    pageImage.height,
  );

  const watermarkStyle: React.CSSProperties = {
    position: "absolute",
    left: `${(position.x / pageImage.width) * 100}%`,
    top: `${(position.y / pageImage.height) * 100}%`,
    transform: `translate(-50%, -50%) rotate(${watermarkSettings.rotation}deg)`,
    opacity: watermarkSettings.opacity,
    zIndex: watermarkSettings.layer === "over" ? 10 : 1,
  };

  return (
    <div className="relative aspect-[8.5/11] bg-white rounded-lg border-2 border-gray-200 overflow-hidden shadow-sm">
      {/* PDF Page */}
      <img
        src={pageImage.imageUrl}
        alt={`Page ${pageImage.pageNum}`}
        className="w-full h-full object-contain"
        style={{ zIndex: watermarkSettings.layer === "over" ? 1 : 10 }}
        draggable={false}
      />

      {/* Watermark */}
      {shouldShowWatermark && (
        <>
          {watermarkSettings.type === "text" ? (
            <div
              style={{
                ...watermarkStyle,
                fontFamily: watermarkSettings.font,
                fontSize: `${watermarkSettings.fontSize}px`,
                color: watermarkSettings.color,
                whiteSpace: "nowrap",
                userSelect: "none",
                pointerEvents: "none",
              }}
            >
              {watermarkSettings.text}
            </div>
          ) : watermarkImageUrl ? (
            <img
              src={watermarkImageUrl}
              alt="Watermark"
              style={{
                ...watermarkStyle,
                maxWidth: "40%",
                maxHeight: "40%",
                objectFit: "contain",
              }}
              draggable={false}
            />
          ) : null}

          {/* Mosaic Pattern */}
          {watermarkSettings.mosaic && (
            <div
              className="absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none"
              style={{ zIndex: watermarkSettings.layer === "over" ? 10 : 1 }}
            >
              {Array.from({ length: 9 }).map((_, index) => (
                <div key={index} className="relative">
                  {watermarkSettings.type === "text" ? (
                    <div
                      className="absolute top-1/2 left-1/2"
                      style={{
                        transform: `translate(-50%, -50%) rotate(${watermarkSettings.rotation}deg)`,
                        fontFamily: watermarkSettings.font,
                        fontSize: `${watermarkSettings.fontSize * 0.6}px`,
                        color: watermarkSettings.color,
                        opacity: watermarkSettings.opacity,
                        whiteSpace: "nowrap",
                        userSelect: "none",
                      }}
                    >
                      {watermarkSettings.text}
                    </div>
                  ) : watermarkImageUrl ? (
                    <img
                      src={watermarkImageUrl}
                      alt="Watermark"
                      className="absolute top-1/2 left-1/2 max-w-[60%] max-h-[60%]"
                      style={{
                        transform: `translate(-50%, -50%) rotate(${watermarkSettings.rotation}deg)`,
                        opacity: watermarkSettings.opacity,
                        objectFit: "contain",
                      }}
                      draggable={false}
                    />
                  ) : null}
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {/* Page Number Badge */}
      <div
        className="absolute bottom-2 left-2 px-2 py-1 text-white text-xs font-medium rounded"
        style={{ backgroundColor: themeColor, zIndex: 20 }}
      >
        {pageImage.pageNum}
      </div>
    </div>
  );
};

// ============ MAIN COMPONENT ============
export const AddWatermarkFileCard = ({
  file,
  errors,
  content,
  themeColor = THEME_COLOR_DEFAULT,
}: AddWatermarkFileCardProps) => {
  const dispatch = useDispatch();
  const { files, setFiles, watermarkImage } = useFileStore();
  const [isLoading, setIsLoading] = useState(true);
  const [pageCount, setPageCount] = useState(0);
  const [pageImages, setPageImages] = useState<PageImage[]>([]);
  const [watermarkImageUrl, setWatermarkImageUrl] = useState<string>("");
  const isSubscribedRef = useRef(true);

  const watermarkSettings = useSelector(
    (state: { tool: ToolState }) => state.tool.watermarkSettings,
  );

  // Create preview URL when watermarkImage changes
  useEffect(() => {
    if (watermarkImage) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setWatermarkImageUrl(result);
        console.log("Watermark image loaded");
      };
      reader.onerror = () => {
        console.error("Failed to read watermark image");
      };
      reader.readAsDataURL(watermarkImage);
    } else {
      setWatermarkImageUrl("");
    }
  }, [watermarkImage]);

  // Load PDF
  useEffect(() => {
    isSubscribedRef.current = true;

    const loadPDF = async () => {
      setIsLoading(true);

      const count = await getPDFPageCount(file, dispatch, errors);

      if (isSubscribedRef.current && count > 0) {
        setPageCount(count);
        dispatch(setField({ pageCount: count, selectedFile: file.name }));

        // Update toPage if needed
        if (watermarkSettings.toPage < watermarkSettings.fromPage) {
          dispatch(
            setField({
              watermarkSettings: {
                ...watermarkSettings,
                toPage: count,
              },
            }),
          );
        }

        const pagesToRender = Math.min(3, count);
        const images: PageImage[] = [];

        for (let i = 1; i <= pagesToRender; i++) {
          const pageImage = await renderPDFPage(file, i, dispatch, errors);
          if (isSubscribedRef.current && pageImage) {
            images.push(pageImage);
            setPageImages([...images]);
          }
        }

        setIsLoading(false);
      }
    };

    loadPDF();

    return () => {
      isSubscribedRef.current = false;
    };
  }, [
    file,
    dispatch,
    errors,
    watermarkSettings.fromPage,
    watermarkSettings.toPage,
  ]);

  const handleRemoveFile = () => {
    const newFiles = files.filter((f) => f.name !== file.name);
    setFiles(newFiles);
    dispatch(
      setField({
        pageCount: 0,
        selectedFile: "",
      }),
    );
  };

  if (isLoading && pageImages.length === 0) {
    return (
      <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3 flex-1">
            <FileText size={24} style={{ color: themeColor }} />
            <h3 className="text-lg font-semibold text-gray-800 truncate">
              {file.name}
            </h3>
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-400 animate-pulse">
              {content.loading}
            </span>
          </div>
          <button
            type="button"
            onClick={handleRemoveFile}
            className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
          >
            <Trash2 size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <PageSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3 flex-1">
            <FileText size={24} style={{ color: themeColor }} />
            <h3 className="text-lg font-semibold text-gray-800 truncate">
              {file.name.length > 40
                ? file.name.slice(0, 20) + "..." + file.name.slice(-17)
                : file.name}
            </h3>
            <span
              className="px-2 py-1 text-xs font-medium rounded-full whitespace-nowrap"
              style={{
                backgroundColor: `${themeColor}15`,
                color: themeColor,
              }}
            >
              {pageCount} {pageCount === 1 ? content.page : content.pages}
            </span>
          </div>

          <button
            type="button"
            onClick={handleRemoveFile}
            className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
            title={content.remove_file}
          >
            <Trash2 size={20} />
          </button>
        </div>

        {/* Preview Label */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700">
            {content.preview}
          </h4>
        </div>

        {/* Pages Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pageImages.map((pageImage) => (
            <PageWithWatermark
              key={pageImage.pageNum}
              pageImage={pageImage}
              watermarkSettings={watermarkSettings}
              watermarkImageUrl={watermarkImageUrl}
              themeColor={themeColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddWatermarkFileCard;
