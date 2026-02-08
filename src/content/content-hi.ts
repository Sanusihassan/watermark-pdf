import type { adBlockerContentType } from "./content";
import type { edit_page as _edit_page, tool as _tool, tools as _tools, downloadFile as _downloadFile, errors as _ } from "../content";

export const tool: _tool = {
    Add_Watermark: {
        title: "वॉटरमार्क जोड़ें",
        seoTitle: "PDF पर वॉटरमार्क जोड़ें - कस्टमाइज़ेबल PDF वॉटरमार्क टूल",
        description: "अपने PDF पर आसानी से छवि या टेक्स्ट ओवरले लगाएं। टाइपोग्राफी, पारदर्शिता और प्लेसमेंट को कस्टमाइज़ करें।",
        keywords: "PDF पर वॉटरमार्क जोड़ें, PDF वॉटरमार्क टूल, ऑनलाइन वॉटरमार्क PDF, PDF वॉटरमार्क कस्टमाइज़ करें, टेक्स्ट वॉटरमार्क लगाएं, इमेज वॉटरमार्क लगाएं",
        color: "#e55039",
        type: ".pdf",
        to: "/add-watermark",
        features: [
            {
                title: "आसान कस्टमाइज़ेशन",
                description: "अपने वॉटरमार्क की टाइपोग्राफी, पारदर्शिता और प्लेसमेंट को आसानी से कस्टमाइज़ करें।"
            },
            {
                title: "टेक्स्ट और इमेज वॉटरमार्क",
                description: "अपने PDF दस्तावेज़ों पर टेक्स्ट और इमेज वॉटरमार्क लगाएं।"
            },
            {
                title: "सुरक्षित और तेज़",
                description: "हमारा टूल सुरक्षित और तेज़ है, यह सुनिश्चित करते हुए कि आपके PDFs को तेजी से प्रोसेस किया जाता है और गोपनीय रखा जाता है।"
            }
        ]
    }
};

export const edit_page: _edit_page = {
    edit_page_titles: {
        add_watermark: "वॉटरमार्क विकल्प"
    },
    loader_text: "कृपया प्रतीक्षा करें...",
    add_more_button: "और फ़ाइलें जोड़ें",
    action_buttons: {
        add_watermark: "वॉटरमार्क जोड़ें"
    },
    pages: "पृष्ठ",
    page: "पृष्ठ",

    options: {
        watermark_type: "वॉटरमार्क प्रकार",
        place_text: "टेक्स्ट रखें",
        place_image: "चित्र रखें",
        text_input: "टेक्स्ट",
        image_upload: "चित्र अपलोड करें",
        select_image: "चित्र चुनने के लिए क्लिक करें",
        text_format: "टेक्स्ट प्रारूप",
        font: "फ़ॉन्ट",
        font_size: "फ़ॉन्ट आकार",
        color: "रंग",
        position: "स्थिति",
        mosaic: "मोज़ेक (पृष्ठ पर दोहराएं)",
        opacity: "अपारदर्शिता",
        rotation: "घुमाव",
        pages: "पृष्ठ",
        from_page: "से",
        to_page: "तक",
        layer: "परत",
        over_content: "PDF सामग्री के ऊपर",
        below_content: "PDF सामग्री के नीचे",
        // ✅ New validation messages
        invalid_image_type: "कृपया एक मान्य छवि फ़ाइल चुनें",
        image_too_large: "छवि बहुत बड़ी है। अधिकतम आकार 5MB है",
        max_5mb: "अधिकतम 5MB, अनुशंसित 1MB या कम",
    },

    fileCard: {
        page: "पृष्ठ",
        pages: "पृष्ठ",
        remove_file: "फ़ाइल हटाएं",
        loading: "लोड हो रहा है",
        preview: "पूर्वावलोकन",
    },
    filenameOptions: {
        label: "आउटपुट फ़ाइल का नाम (वैकल्पिक)",
        placeholder: "फ़ाइल का नाम दर्ज करें",
        helperText: "डाउनलोड करते समय यह संकुचित PDF का नाम होगा।",
        cta: "योजनाएँ देखें",
        upgradeNotice: {
            msg: "2.0 से 10.0 तक के स्तर प्रीमियम में उपलब्ध हैं।",
            cta: "अभी अपग्रेड करें",
        },
    },
};

export const downloadFile: _downloadFile = {
    titles: {
        "add-watermark": [
            "पीडीएफ़ सफलतापूर्वक डाक लगा दिए गए हैं!",
            "पीडीएफ़ सफलतापूर्वक डाक लगा दिया गया है!"
        ]
    },
    btnText: {
        "add-watermark": [
            "सील किए गए पीडीएफ़ फ़ाइलें डाउनलोड करें",
            "सील किए गए पीडीएफ़ फ़ाइल डाउनलोड करें"
        ]
    },
    backto: {
        "add-watermark": "वाटरमार्क में वापस जाएं"
    }
};


// Hindi (hi) - tools
export const tools: _tools = {
    select: "चुनें",
    or_drop: "या फ़ाइलें यहाँ ड्रॉप करें",
    files: "फ़ाइलें",
    drop_files: "फ़ाइलें यहाँ ड्रैग करें",
};


export const errors: _ = {
    EMPTY_FILE: {
        message: "फ़ाइल खाली है। कृपया वैध फ़ाइल चुनें।",
        code: "ERR_EMPTY_FILE",
    },
    FILE_TOO_LARGE: {
        message:
            "फ़ाइल बहुत बड़ी है। छोटी फ़ाइल चुनें या हमारा compress-pdf टूल इस्तेमाल करके साइज़ कम करें।",
        code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
    },
    NOT_SUPPORTED_TYPE: {
        message: "फ़ाइल का प्रकार समर्थित नहीं है।",
        types: {
            PDF: "कृपया वैध PDF फ़ाइल चुनें।",
            DOC: "कृपया वैध वर्ड डॉक्यूमेंट चुनें।",
            DOCX: "कृपया वैध वर्ड डॉक्यूमेंट चुनें।",
            XLS: "कृपया वैध एक्सेल स्प्रेडशीट चुनें।",
            XLSX: "कृपया वैध एक्सेल स्प्रेडशीट चुनें।",
            PPT: "कृपया वैध पावरपॉइंट प्रेजेंटेशन चुनें।",
            PPTX: "कृपया वैध पावरपॉइंट प्रेजेंटेशन चुनें।",
        },
        code: "ERR_INVALID_FILE_TYPE",
    },
    FILE_CORRUPT: {
        message:
            "फ़ाइल खराब है और प्रोसेस नहीं की जा सकती। कृपया वैध फ़ाइल चुनें।",
        code: "ERR_FILE_CORRUPT",
    },
    MAX_FILES_EXCEEDED: {
        message:
            "आपने अधिकतम अनुमत फ़ाइलों की संख्या पार कर ली है। कुछ फ़ाइलें हटाकर दोबारा कोशिश करें।",
        code: "ERR_MAX_FILES_EXCEEDED",
    },
    NO_FILES_SELECTED: {
        message: "कोई फ़ाइल चुनी नहीं गई। कम से कम एक फ़ाइल चुनें।",
        code: "ERR_NO_FILES_SELECTED",
    },
    UNKNOWN_ERROR: {
        message:
            "एक अज्ञात त्रुटि हुई। बाद में दोबारा कोशिश करें या सपोर्ट से संपर्क करें।",
        code: "ERR_UNKNOWN",
    },
    ERR_NETWORK: {
        message:
            "नेटवर्क त्रुटि हुई। अपना इंटरनेट कनेक्शन जांचें और दोबारा कोशिश करें।",
        code: "ERR_NETWORK",
    },
    ERR_UPLOAD_COUNT: {
        message: "मर्ज करने के लिए कम से कम दो फ़ाइलें अपलोड करें।",
        code: "ERR_UPLOAD_COUNT",
    },
    PASSWORD_REQUIRED: {
        message: "PDF में पासवर्ड की आवश्यकता है।",
        code: "PASSWORD_REQUIRED",
    },
    INCORRECT_PASSWORD: {
        message: "आपने गलत पासवर्ड डाला है।",
        code: "INCORRECT_PASSWORD",
    },
    MAX_DAILY_USAGE: {
        message:
            "आपने अपनी दैनिक उपयोग सीमा पूरी कर ली है। बिना रुकावट के जारी रखने के लिए प्लान अपग्रेड करें।",
        code: "MAX_DAILY_USAGE",
    },
    MAX_PAGES_EXCEEDED: {
        message: "PDF अधिकतम 50 पृष्ठों की सीमा से अधिक है।",
        code: "ERR_MAX_PAGES_EXCEEDED",
    },
    // Hindi (hi)
    alerts: {
        // Frontend validation
        maxFiles: "अधिकतम 15 फाइलें। अधिक के लिए सब्सक्राइब करें!",
        singleFileSize: "फाइल का आकार 100 MB से कम होना चाहिए। बड़ी फाइलें अपलोड करने के लिए अपग्रेड करें!",
        perFilePages: "प्रति फाइल 500 पेज। अभी और अनलॉक करें!",
        fileSize: "प्रति फाइल 50MB। अधिक के लिए अपग्रेड करें!",
        serverError: "सर्वर त्रुटि। कृपया बाद में पुनः प्रयास करें।",
        tooManyFiles: "बहुत सारी फाइलें अपलोड की गईं",
        // Backend file validation
        fileNotUploaded: "कोई फाइल अपलोड नहीं की गई। कृपया एक फाइल चुनें।",
        fileEmpty: "अपलोड की गई फाइल खाली है। कृपया एक वैध फाइल चुनें।",
        fileTooLarge: "फाइल 200MB सीमा से अधिक है। बड़ी फाइलों के लिए अपग्रेड करें!",
        invalidFileType: "अमान्य फाइल प्रकार। कृपया समर्थित फॉर्मेट अपलोड करें।",
        fileCorrupt: "फाइल दूषित लगती है। कृपया कोई अन्य फाइल आजमाएं।",
        insufficientUnits: "परिवर्तन इकाइयां अपर्याप्त हैं। अपग्रेड करें या रिचार्ज करें!",
        // Auth errors
        authRequired: "प्रीमियम सुविधाओं का उपयोग करने के लिए कृपया लॉग इन करें।",
        sessionExpired: "आपका सत्र समाप्त हो गया है। कृपया फिर से लॉग इन करें।",
        invalidToken: "प्रमाणीकरण विफल। कृपया फिर से लॉग इन करें।",
        userNotFound: "खाता नहीं मिला। कृपया फिर से लॉग इन करें।",
        authError: "प्रमाणीकरण त्रुटि। कृपया पुनः प्रयास करें।",
        notPasswordProtected: "एक या अधिक फाइलें पासवर्ड से सुरक्षित नहीं हैं",

        // PDF-specific errors
        invalidPdf: "अमान्य या दूषित PDF फाइल।",
        pdfNotEncrypted: "यह PDF पासवर्ड से सुरक्षित नहीं है और अनलॉक करने की आवश्यकता नहीं है।",

        // Lock-PDF errors
        noLockPassword: "PDF को लॉक करने के लिए कृपया पासवर्ड प्रदान करें।",
        lockingFailed: "PDF लॉक करने में विफल। कृपया पुनः प्रयास करें।",

        // Unlock-PDF errors
        noPasswordsProvided: "लॉक किए गए PDFs के लिए कृपया पासवर्ड प्रदान करें।",
        unlockingFailed: "PDF अनलॉक करने में विफल। कृपया अपना पासवर्ड जांचें और पुनः प्रयास करें।",
        incorrectPassword: "गलत पासवर्ड। कृपया पुनः प्रयास करें।",
        passwordRequired: "यह PDF पासवर्ड से सुरक्षित है। कृपया पासवर्ड दर्ज करें।",

        // Settings errors
        invalidSettings: "अमान्य सेटिंग्स प्रदान की गईं। कृपया रिफ्रेश करें और पुनः प्रयास करें।",
        conversionFailed: "परिवर्तन विफल। कृपया पुनः प्रयास करें।",
        noWatermarkText: "कृपया वॉटरमार्क टेक्स्ट दर्ज करें",
        noWatermarkImage: "कृपया वॉटरमार्क चित्र अपलोड करें",
        invalidPageRange: "अमान्य पृष्ठ सीमा",
        watermarkFailed: "वॉटरमार्क जोड़ने में विफल। कृपया पुनः प्रयास करें।",
        noWatermarkSettings: "कृपया वॉटरमार्क सेटिंग्स कॉन्फ़िगर करें",
        invalidWatermarkSettings: "अमान्य वॉटरमार्क सेटिंग्स प्रारूप",
        invalidWatermarkImage: "अमान्य वॉटरमार्क चित्र प्रारूप",
        pageOutOfRange: "पृष्ठ संख्या PDF पृष्ठ गणना से अधिक है",
        invalidPosition: "अमान्य वॉटरमार्क स्थिति",
        invalidOpacity: "अमान्य अपारदर्शिता मान (0-100)",
        invalidRotation: "अमान्य घुमाव मान (0-360)",
        invalidFontSize: "अमान्य फ़ॉन्ट आकार",
    },
};

export const adBlockerContent: adBlockerContentType = {
    title: "विज्ञापन अवरोधक पता चला",
    description: "हमने देखा कि आप विज्ञापन अवरोधक इस्तेमाल कर रहे हैं। इसे बंद करें या प्रीमियम में अपग्रेड करें ताकि विज्ञापन-मुक्त अनुभव मिले!",
    reloadPage: "पेज रीलोड करें",
    upgradeToPremium: "प्रीमियम में अपग्रेड करें"
};