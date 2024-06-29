export const tool = {
  Add_Watermark: {
    title: "Add Watermark",
    seoTitle: "Add Watermark to PDF Online - Customizable PDF Watermark Tool",
    description:
      "Effortlessly apply an image or text overlay onto your PDF. Customize typography, transparency, and placement.",
    keywords: "add watermark to PDF, PDF watermark tool, online watermark PDF, customize PDF watermark, apply text watermark, apply image watermark",
    color: "#e55039",
    type: ".pdf",
    to: "/add-watermark",
    features: [
      {
        title: "Easy Customization",
        description: "Effortlessly customize the typography, transparency, and placement of your watermark."
      },
      {
        title: "Text and Image Watermarks",
        description: "Apply both text and image watermarks to your PDF documents."
      },
      {
        title: "Secure and Fast",
        description: "Our tool is secure and fast, ensuring your PDFs are processed quickly and kept private."
      }
    ]
  },
};


export const edit_page = {
  edit_page_titles: {
    add_watermark: "Watermark options",
  },
  loader_text: "please wait...",
  add_more_button: "Add more files",
  action_buttons: {
    add_watermark: "Add Watermark",
  },
  pages: "pages",
  page: "page",
  options: {
    text_format: {
      text: "Text",
      text_format: "Text format",
      font: "font",
      font_size: "font size",
      color: "color",
      font_placeholder: "font",
    },
    add_image: "Add Image",
    change_image: "Change Image",
    position: "Position",
    mosaic: "Mosaic",
    opacity: "Opacity",
    rotation: "Rotation",
    pages: "Pages",
    from_page: "From Page",
    to: "To",
    layer: "Layer",
    over: "Over the PDF content",
    below: "Below the PDF content",
  },
};

export const tools = {
  select: "Select",
  or_drop: "or drop files here",
  files: "files",
  drop_files: "Drag files here",
};

export const downloadFile = {
  titles: {
    "add-watermark": [
      "The PDFs have been stamped successfully!",
      "The PDF has been stamped successfully!",
    ],
  },

  btnText: {
    "add-watermark": [
      "Download Stamped PDF files",
      "Download Stamped PDF file",
    ],
  },

  backto: {
    "add-watermark": "Back to Add Watermark",
  },
};

export const footer = {
  brand: "PDFEquips",
  terms: "terms",
  conditions: "conditions",
  privacy_policy: "privacy policy",
}

export const errors = {
  EMPTY_FILE: {
    message: "The file is empty. Please choose a valid file.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "The file is too large. Please choose a smaller file, or use our compress-pdf tool to reduce the file size.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "The file is not a supported type.",
    types: {
      PDF: "Please choose a valid PDF file.",
      JPG: "Please choose a valid JPEG image file.",
      DOC: "Please choose a valid Word document file.",
      DOCX: "Please choose a valid Word document file.",
      XLS: "Please choose a valid Excel spreadsheet file.",
      XLSX: "Please choose a valid Excel spreadsheet file.",
      PPT: "Please choose a valid PowerPoint presentation file.",
      PPTX: "Please choose a valid PowerPoint presentation file.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "The file is corrupt and cannot be processed. Please choose a valid file.",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message:
      "The file contains missing fontsand cannot be processed. Please ensure all fonts are embedded in the PDF file.",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message:
      "The file contains invalid image data. Please ensure all images are properly formatted.",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "The file contains a security risk and cannot be processed. Please choose a valid file.",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "You have exceeded the maximum number of files allowed. Please delete some files and try again.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "No files selected. Please select at least one file.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "An unknown error occurred. Please try again later or contact support.",
    code: "ERR_UNKNOWN",
  },
  // i want another error like this but when only one file is uploaded
  ERR_NETWORK: {
    message:
      "A network error occurred. Please check your internet connection and try again.",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "Please upload at least two files to merge.",
    code: "ERR_UPLOAD_COUNT",
  },
};
