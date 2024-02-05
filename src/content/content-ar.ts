import type {
  tool as _tool,
  tools as _tools,
  edit_page as _edit_page,
  footer as _footer,
  errors as _errors,
  downloadFile as _downloadFile,
  landing_page as _landing_page,
} from "../../content";

export const tool: _tool = {
  Add_Watermark: {
    title: "إضافة علامة مائية",
    seoTitle:
      "إضافة علامة مائية إلى ملف PDF عبر الإنترنت - أداة تعيين علامة مائية للـ PDF | PDFEquips",
    description:
      "ضع بسهولة صورة أو نص مرئي على ملف PDF الخاص بك. قم بتخصيص الطباعة والشفافية والموضع.",
    color: "#e55039",
    type: ".pdf",
    to: "/add-watermark",
  },
};

export const tools: _tools = {
  select: "اختر",
  or_drop: "أو قم بإسقاط الملفات هنا",
  files: "ملفات",
  drop_files: "قم بوضع الملفات هنا",
};

export const downloadFile: _downloadFile = {
  titles: {
    "add-watermark": [
      "تم وضع الطوابع على ملفات PDF بنجاح!",
      "تم وضع الطابع على ملف PDF بنجاح!",
    ],
  },

  btnText: {
    "add-watermark": ["تحميل ملفات PDF المختومة", "تحميل ملف PDF المختوم"],
  },

  backto: {
    "add-watermark": "العودة إلى إضافة العلامة المائية",
  },
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    add_watermark: "خيارات العلامة المائية",
  },
  loader_text: "يرجى الانتظار...",
  add_more_button: "إضافة ملفات أخرى",
  action_buttons: {
    add_watermark: "إضافة علامة مائية",
  },
  pages: "صفحات",
  page: "صفحة",
  options: {
    text_format: {
      text: "النص",
      text_format: "تنسيق النص",
      font: "الخط",
      font_size: "حجم الخط",
      color: "اللون",
      font_placeholder: "الخط",
    },
    add_image: "إضافة صورة",
    change_image: "تغيير الصورة",
    position: "الموضع",
    mosaic: "الفسيفساء",
    opacity: "الشفافية",
    rotation: "الدوران",
    pages: "الصفحات",
    from_page: "من الصفحة",
    to: "إلى",
    layer: "الطبقة",
    over: "فوق محتوى ملف PDF",
    below: "أسفل محتوى ملف PDF",
  },
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "الملف فارغ. يرجى اختيار ملف صالح.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "حجم الملف كبير جدًا. يرجى اختيار ملف أصغر، أو استخدام أداة ضغط PDF الخاصة بنا لتقليل حجم الملف.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "الملف غير مدعوم.",
    types: {
      PDF: "يرجى اختيار ملف PDF صالح.",
      JPG: "يرجى اختيار ملف صورة JPEG صالح.",
      DOC: "يرجى اختيار ملف مستند Word صالح.",
      DOCX: "يرجى اختيار ملف مستند Word صالح.",
      XLS: "يرجى اختيار ملف جدول بيانات Excel صالح.",
      XLSX: "يرجى اختيارملف جدول بيانات Excel صالح.",
      PPT: "يرجى اختيار ملف عرض تقديمي PowerPoint صالح.",
      PPTX: "يرجى اختيار ملف عرض تقديمي PowerPoint صالح.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message: "الملف تالف ولا يمكن معالجته. يرجى اختيار ملف صالح.",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message:
      "الملف يحتوي على خطوط أحرف مفقودة. يرجى التأكد من تضمين جميع الخطوط في ملف PDF.",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message:
      "الملف يحتوي على بيانات صورة غير صالحة. يرجى التأكد من تنسيق جميع الصور بشكل صحيح.",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "الملف يحتوي على مخاطر أمان ولا يمكن معالجته. يرجى اختيار ملف صالح.",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "لقد تجاوزت الحد الأقصى لعدد الملفات المسموح به. يرجى حذف بعض الملفات والمحاولة مرة أخرى.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "لم يتم اختيار أي ملفات. يرجى اختيار ملف واحد على الأقل.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "حدث خطأ غير معروف. يرجى المحاولة مرة أخرى لاحقًا أو الاتصال بالدعم.",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "حدث خطأ في الشبكة. يرجى التحقق من اتصالك بالإنترنت وحاول مرة أخرى.",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "يرجى رفع ملفين على الأقل للدمج.",
    code: "ERR_UPLOAD_COUNT",
  },
};
