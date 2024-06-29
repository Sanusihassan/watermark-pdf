export type howToType = {
    "@context": string;
    "@type": string;
    name: string;
    description: string;
    step: {
        "@type": string;
        name: string;
        text: string;
        substeps: string[];
    }[];
};

export const howToSchema = {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "How to Add Watermark to PDF?",
    description: "Steps to add a watermark to your PDF file.",
    step: [
        {
            "@type": "HowToStep",
            name: "Step 1",
            text: "Open the Add Watermark tool on PDFEquips."
        },
        {
            "@type": "HowToStep",
            name: "Step 2",
            text: "Select your PDF file."
        },
        {
            "@type": "HowToStep",
            name: "Step 3",
            text: "Choose and customize your watermark (text or image)."
        },
        {
            "@type": "HowToStep",
            name: "Step 4",
            text: "Click the 'Add Watermark' button to apply the watermark."
        },
        {
            "@type": "HowToStep",
            name: "Step 5",
            text: "Click the 'Download Watermarked PDF' button to save your file."
        }
    ]
};

export type _howToSchema = typeof howToSchema;
