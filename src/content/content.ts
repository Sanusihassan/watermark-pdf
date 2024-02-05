export const tool = {
  Add_Watermark: {
    title: "Add Watermark",
    seoTitle:
      "Add Watermark to PDF Online - Customizable PDF Watermark Tool | PDFEquips",
    description:
      "Effortlessly apply an image or text overlay onto your PDF. Customize typography, transparency, and placement.",
    color: "#e55039",
    type: ".pdf",
    to: "/add-watermark",
  },
};
/**
 * please generate 5 objects with the same name please it's important that all of the objects you generate are of the same name "edit_page" alright?
 * for all of ar, es, fr, hi, zh respectively.
 * then all of them should be of the same type/interface i.e _edit_page.
 * meaning that each created object should followed by :_edit_page as a type because i'm using TYPESCRIPT!.
 * and i already have the _edit_page interface and it looks like this: 
 *  edit_page: {
    edit_page_titles: {
        add_watermark: string;
    };
    loader_text: string;
    add_more_button: string;
    action_buttons: {
        add_watermark: string;
    };
    pages: string;
    page: string;
}
the only thing you need to modify for each object you create is the string values just translate them for all of ar, es, fr, hi, zh respectively.
 */
/**
 * this object's content is in english i.e the string values of the edit_page object below is in english right?
 * i want 5 similar objects of the same schema same object name same keys but translate the string values each time for ar, es, fr, hi, zh respectively
 * each object should be named the same name please this is very important, it does'nt affect my code because they would be in different files
 * also they're ts objcets and all of them should be of the type _edit_page
 * i.e the definition of each object should be somthing like: export const edit_page: _edit_page = {...}
 */
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
