import type { tool as _tool, tools as _tools, edit_page as _edit_page, downloadFile as _downloadFile, errors as _errors } from "../content";
import type { adBlockerContentType } from "./content";


export const tool: _tool = {
    Add_Watermark: {
        title: "إضافة علامة مائية",
        seoTitle: "إضافة علامة مائية إلى PDF عبر الإنترنت - أداة تخصيص علامة مائية",
        description: "قم بتطبيق صورة أو نص بشكل سلس على ملف PDF الخاص بك. خصص الطباعة والشفافية والمكان.",
        keywords: "إضافة علامة مائية إلى PDF, أداة علامة مائية PDF, إضافة علامة مائية عبر الإنترنت, تخصيص علامة مائية PDF, تطبيق علامة مائية نصية, تطبيق علامة مائية صورية",
        color: "#e55039",
        type: ".pdf",
        to: "/add-watermark",
        features: [
            {
                title: "تخصيص سهل",
                description: "تطبيق علامات مائية نصية وصورية على مستندات PDF الخاصة بك."
            },
            {
                title: "آمن وسريع",
                description: "أداتنا آمنة وسريعة، مما يضمن معالجة ملفات PDF بسرعة وبشكل خاص."
            }
        ]
    }
};

export const edit_page: _edit_page = {
    edit_page_titles: {
        add_watermark: "خيارات العلامة المائية"
    },
    loader_text: "يرجى الانتظار...",
    add_more_button: "إضافة ملفات أخرى",
    action_buttons: {
        add_watermark: "إضافة علامة مائية"
    },
    pages: "صفحات",
    page: "صفحة",
    options: {
        watermark_type: "نوع العلامة المائية",
        place_text: "إضافة نص",
        place_image: "إضافة صورة",
        text_input: "النص",
        image_upload: "تحميل الصورة",
        select_image: "انقر لتحديد صورة",
        text_format: "تنسيق النص",
        font: "الخط",
        font_size: "حجم الخط",
        color: "اللون",
        position: "الموضع",
        mosaic: "فسيفساء (تكرار عبر الصفحة)",
        opacity: "الشفافية",
        rotation: "الدوران",
        pages: "الصفحات",
        from_page: "من",
        to_page: "إلى",
        layer: "الطبقة",
        over_content: "فوق محتوى PDF",
        below_content: "أسفل محتوى PDF",
        // ✅ New validation messages
        invalid_image_type: "الرجاء تحديد ملف صورة صالح",
        image_too_large: "الصورة كبيرة جدًا. الحجم الأقصى 5 ميجابايت",
        max_5mb: "بحد أقصى 5 ميجابايت، موصى به 1 ميجابايت أو أقل",
    },

    fileCard: {
        page: "صفحة",
        pages: "صفحات",
        remove_file: "إزالة الملف",
        loading: "جاري التحميل",
        preview: "معاينة",
    },
    filenameOptions: {
        label: "اسم الملف الناتج (اختياري)",
        placeholder: "أدخل اسم الملف",
        helperText: "سيكون هذا هو اسم ملف PDF المضغوط عند تنزيله.",
        cta: "عرض الخطط",
        upgradeNotice: {
            msg: "المستويات من 2.0 إلى 10.0 متاحة مع الخطة المميزة.",
            cta: "الترقية الآن",
        },
    },
};

export const downloadFile: _downloadFile = {
    titles: {
        "add-watermark": [
            "تم وضع الطوابع على ملفات PDF بنجاح!",
            "تم وضع الطابع على ملف PDF بنجاح!"
        ]
    },
    btnText: {
        "add-watermark": [
            "تحميل ملفات PDF المختومة",
            "تحميل ملف PDF المختوم"
        ]
    },
    backto: {
        "add-watermark": "العودة إلى إضافة العلامة المائية"
    }
};

export const tools: _tools = {
    select: "اختر",
    or_drop: "أو أسقط الملفات هنا",
    files: "ملفات",
    drop_files: "اسحب الملفات هنا",
};

export const errors: _errors = {
    EMPTY_FILE: {
        message: "الملف فارغ. يرجى اختيار ملف صالح.",
        code: "ERR_EMPTY_FILE",
    },
    FILE_TOO_LARGE: {
        message:
            "حجم الملف كبير جدًا. يرجى اختيار ملف أصغر، أو استخدم أداة ضغط PDF لتقليل حجم الملف.",
        code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
    },
    NOT_SUPPORTED_TYPE: {
        message: "نوع الملف غير مدعوم.",
        types: {
            PDF: "يرجى اختيار ملف PDF صالح.",
            DOC: "يرجى اختيار ملف مستند وورد صالح.",
            DOCX: "يرجى اختيار ملف مستند وورد صالح.",
            XLS: "يرجى اختيار ملف جدول إكسل صالح.",
            XLSX: "يرجى اختيار ملف جدول إكسل صالح.",
            PPT: "يرجى اختيار ملف عرض تقديمي باور بوينت صالح.",
            PPTX: "يرجى اختيار ملف عرض تقديمي باور بوينت صالح.",
        },
        code: "ERR_INVALID_FILE_TYPE",
    },
    FILE_CORRUPT: {
        message:
            "الملف تالف ولا يمكن معالجته. يرجى اختيار ملف صالح.",
        code: "ERR_FILE_CORRUPT",
    },
    MAX_FILES_EXCEEDED: {
        message:
            "لقد تجاوزت الحد الأقصى لعدد الملفات المسموح به. يرجى حذف بعض الملفات وحاول مرة أخرى.",
        code: "ERR_MAX_FILES_EXCEEDED",
    },
    NO_FILES_SELECTED: {
        message: "لم يتم اختيار أي ملفات. يرجى اختيار ملف واحد على الأقل.",
        code: "ERR_NO_FILES_SELECTED",
    },
    UNKNOWN_ERROR: {
        message:
            "حدث خطأ غير معروف. يرجى المحاولة مرة أخرى لاحقًا أو التواصل مع الدعم.",
        code: "ERR_UNKNOWN",
    },
    ERR_NETWORK: {
        message:
            "حدث خطأ في الشبكة. يرجى التحقق من اتصال الإنترنت وحاول مرة أخرى.",
        code: "ERR_NETWORK",
    },
    ERR_UPLOAD_COUNT: {
        message: "يرجى رفع ملفين على الأقل للدمج.",
        code: "ERR_UPLOAD_COUNT",
    },
    PASSWORD_REQUIRED: {
        message: "ملف PDF يتطلب كلمة مرور.",
        code: "PASSWORD_REQUIRED",
    },
    INCORRECT_PASSWORD: {
        message: "كلمة المرور التي أدخلتها غير صحيحة.",
        code: "INCORRECT_PASSWORD",
    },
    MAX_DAILY_USAGE: {
        message:
            "لقد وصلت إلى الحد اليومي للاستخدام. يرجى ترقية خطتك لمواصلة استخدام الميزة بدون انقطاع.",
        code: "MAX_DAILY_USAGE",
    },
    MAX_PAGES_EXCEEDED: {
        message: "يتجاوز ملف PDF الحد الأقصى لعدد الصفحات وهو 50 صفحة.",
        code: "ERR_MAX_PAGES_EXCEEDED",
    },

    alerts: {
        // Frontend validation
        maxFiles: "حد أقصى 15 ملفًا. اشترك للحصول على المزيد!",
        singleFileSize: "يجب أن يكون حجم الملف أقل من 100 ميغابايت. قم بالترقية لتحميل ملفات أكبر!",
        perFilePages: "500 صفحة لكل ملف. افتح المزيد الآن!",
        fileSize: "50 ميغابايت لكل ملف. قم بالترقية للحصول على المزيد!",
        serverError: "خطأ في الخادم. يرجى المحاولة لاحقًا.",
        // Backend file validation
        fileNotUploaded: "لم يتم تحميل أي ملف. يرجى اختيار ملف.",
        fileEmpty: "الملف المرفوع فارغ. يرجى اختيار ملف صالح.",
        fileTooLarge: "الملف يتجاوز حد 200 ميغابايت. قم بالترقية لملفات أكبر!",
        invalidFileType: "نوع الملف غير صالح. يرجى تحميل تنسيق مدعوم.",
        fileCorrupt: "يبدو أن الملف تالف. يرجى تجربة ملف آخر.",
        insufficientUnits: "وحدات التحويل غير كافية. قم بالترقية أو إعادة الشحن!",
        // Auth errors
        authRequired: "يرجى تسجيل الدخول لاستخدام الميزات المميزة.",
        sessionExpired: "انتهت جلستك. يرجى تسجيل الدخول مرة أخرى.",
        invalidToken: "فشل المصادقة. يرجى تسجيل الدخول مرة أخرى.",
        userNotFound: "الحساب غير موجود. يرجى تسجيل الدخول مرة أخرى.",
        authError: "خطأ في المصادقة. يرجى المحاولة مرة أخرى.",
        notPasswordProtected: "واحد أو أكثر من الملفات غير محمي بكلمة مرور",

        // PDF-specific errors
        invalidPdf: "ملف PDF غير صالح أو تالف.",
        pdfNotEncrypted: "هذا الملف PDF غير محمي بكلمة مرور ولا يحتاج إلى فك القفل.",

        // Lock-PDF errors
        noLockPassword: "يرجى تقديم كلمة مرور لقفل PDF.",
        lockingFailed: "فشل قفل PDF. يرجى المحاولة مرة أخرى.",

        // Unlock-PDF errors
        noPasswordsProvided: "يرجى تقديم كلمات مرور لملفات PDF المقفلة.",
        unlockingFailed: "فشل فك قفل PDF. يرجى التحقق من كلمة المرور والمحاولة مرة أخرى.",
        incorrectPassword: "كلمة مرور غير صحيحة. يرجى المحاولة مرة أخرى.",
        passwordRequired: "هذا الملف PDF محمي بكلمة مرور. يرجى إدخال كلمة المرور.",

        // Settings errors
        invalidSettings: "إعدادات غير صالحة مقدمة. يرجى التحديث والمحاولة مرة أخرى.",
        conversionFailed: "فشل التحويل. يرجى المحاولة مرة أخرى.",
        tooManyFiles: "تم تحميل ملفات كثيرة جدًا",
        noWatermarkText: "الرجاء إدخال نص العلامة المائية",
        noWatermarkImage: "الرجاء تحميل صورة العلامة المائية",
        invalidPageRange: "نطاق صفحات غير صالح",
        watermarkFailed: "فشل إضافة العلامة المائية. يرجى المحاولة مرة أخرى.",

        noWatermarkSettings: "يرجى تكوين إعدادات العلامة المائية",
        invalidWatermarkSettings: "تنسيق إعدادات العلامة المائية غير صالح",
        invalidWatermarkImage: "تنسيق صورة العلامة المائية غير صالح",
        pageOutOfRange: "رقم الصفحة يتجاوز عدد صفحات PDF",
        invalidPosition: "موضع العلامة المائية غير صالح",
        invalidOpacity: "قيمة الشفافية غير صالحة (0-100)",
        invalidRotation: "قيمة الدوران غير صالحة (0-360)",
        invalidFontSize: "حجم الخط غير صالح",
    },
};

export const adBlockerContent: adBlockerContentType = {
    title: "تم اكتشاف مانع الإعلانات",
    description: "لاحظنا أنك تستخدم مانع الإعلانات. يرجى التفكير في تعطيله أو الترقية إلى النسخة المميزة للحصول على تجربة خالية من الإعلانات!",
    reloadPage: "إعادة تحميل الصفحة",
    upgradeToPremium: "الترقية إلى النسخة المميزة"
}