import { _howToSchema } from "./how-to";

export const howToSchema: _howToSchema = {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "PDF पर वॉटरमार्क कैसे जोड़ें?",
    description: "अपने PDF फ़ाइल में वॉटरमार्क जोड़ने के लिए चरण।",
    step: [
        {
            "@type": "HowToStep",
            name: "चरण 1",
            text: "PDFEquips पर वॉटरमार्क जोड़ने का टूल खोलें।"
        },
        {
            "@type": "HowToStep",
            name: "चरण 2",
            text: "अपनी PDF फ़ाइल चुनें।"
        },
        {
            "@type": "HowToStep",
            name: "चरण 3",
            text: "अपने वॉटरमार्क को चुनें और कस्टमाइज़ करें (टेक्स्ट या इमेज)।"
        },
        {
            "@type": "HowToStep",
            name: "चरण 4",
            text: "'वॉटरमार्क जोड़ें' बटन पर क्लिक करें।"
        },
        {
            "@type": "HowToStep",
            name: "चरण 5",
            text: "'वॉटरमार्केड PDF डाउनलोड करें' बटन पर क्लिक करें।"
        }
    ]
};
