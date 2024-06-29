import { _howToSchema } from "./how-to";

export const howToSchema: _howToSchema = {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "كيفية إضافة علامة مائية إلى PDF؟",
    description: "خطوات لإضافة علامة مائية إلى ملف PDF الخاص بك.",
    step: [
        {
            "@type": "HowToStep",
            name: "الخطوة 1",
            text: "افتح أداة إضافة علامة مائية على PDFEquips."
        },
        {
            "@type": "HowToStep",
            name: "الخطوة 2",
            text: "حدد ملف PDF الخاص بك."
        },
        {
            "@type": "HowToStep",
            name: "الخطوة 3",
            text: "اختر وخصص العلامة المائية الخاصة بك (نص أو صورة)."
        },
        {
            "@type": "HowToStep",
            name: "الخطوة 4",
            text: "انقر على زر 'إضافة علامة مائية' لتطبيق العلامة المائية."
        },
        {
            "@type": "HowToStep",
            name: "الخطوة 5",
            text: "انقر على زر 'تنزيل ملف PDF بعلامة مائية' لحفظ الملف."
        }
    ]
};
