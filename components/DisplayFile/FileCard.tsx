import { ActionProps } from "./ActionDiv";
import type { errors as _ } from "../../content";
import { useEffect, useState } from "react";
import { Loader } from "./Loader";
import {
  calculatePages,
  getFileDetailsTooltipContent,
  getNthPageAsImage,
  getPlaceHoderImageUrl,
} from "../../src/utils";
import { useDispatch, useSelector } from "react-redux";
import ImageWithLoader from "./ImageWithLoader";
import { ToolState, setPageCount } from "@/src/store";
type OmitFileName<T extends ActionProps> = Omit<T, "fileName" | "index">;

type CardProps = OmitFileName<ActionProps> & {
  file: File;
  errors: _;
  loader_text: string;
  fileDetailProps: [string, string, string];
  index?: number | string;
};

const Layout = ({ bulletPosition }: { bulletPosition: string }) => {
  const options = useSelector(
    (state: { tool: ToolState }) => state.tool.options
  );
  useEffect(() => {
    console.log(options.mosaic);
  }, [options]);

  return (
    <>
      {!options.mosaic ? (
        <div className={`page-number-bullet ${bulletPosition}`}></div>
      ) : (
        <MosaicLayout />
      )}
    </>
  );
};

const MosaicLayout = () => {
  return (
    <div className="mosaic">
      <div className="top bullet-row">
        <div className="page-number-bullet"></div>
        <div className="page-number-bullet"></div>
        <div className="page-number-bullet"></div>
      </div>
      <div className="middle bullet-row">
        <div className="page-number-bullet"></div>
        <div className="page-number-bullet"></div>
        <div className="page-number-bullet"></div>
      </div>
      <div className="bottom bullet-row">
        <div className="page-number-bullet"></div>
        <div className="page-number-bullet"></div>
        <div className="page-number-bullet"></div>
      </div>
    </div>
  );
};

const FileCard = ({
  file,
  errors,
  extension,
  loader_text,
  fileDetailProps,
}: CardProps) => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [tooltipSize, setToolTipSize] = useState("");
  const pageCount = useSelector(
    (state: { tool: ToolState }) => state.tool.pageCount
  );
  const bulletPosition = useSelector(
    (state: { tool: ToolState }) => state.tool.options.position
  );
  const dispatch = useDispatch();
  let isSubscribed = true;
  useEffect(() => {
    (async () => {
      let size = await getFileDetailsTooltipContent(
        file,
        ...fileDetailProps,
        dispatch,
        errors
      );
      let _pageCount = await calculatePages(file);
      setToolTipSize(size);
      dispatch(setPageCount(_pageCount));
    })();
    const processFile = async () => {
      try {
        if (extension && extension === ".pdf") {
          if (isSubscribed) {
            for (let i = 1; i <= pageCount; i += 1) {
              let url = await getNthPageAsImage(file, dispatch, errors, i);
              setImageUrls((prevUrls) => [...prevUrls, url]);
            }
          }
        } else if (extension && extension !== ".jpg") {
          if (isSubscribed) {
            setImageUrls(
              !file.size
                ? ["/images/corrupted.png"]
                : [getPlaceHoderImageUrl(extension)]
            );
          }
        }
      } catch (error) {
        console.error("Error processing files:", error);
      }
    };
    processFile();
    return () => {
      isSubscribed = false;
    };
  }, [extension, file, pageCount]);
  return (
    <>
      {imageUrls.length == 0 ? (
        <div className="initial-loader">
          <Loader loader_text={loader_text} animate={false} />
        </div>
      ) : null}
      <div className="pages">
        {imageUrls.map((imageUrl, index) => (
          <div key={index.toString()} className="page">
            <ImageWithLoader imageUrl={imageUrl} loader_text={loader_text} />
            <Layout bulletPosition={bulletPosition} />
          </div>
        ))}
      </div>
    </>
  );
};

export default FileCard;
