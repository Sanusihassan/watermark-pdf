import type { FaqContent } from "./faq";

export const faq: FaqContent = {
  title: "Frequently Asked Questions",
  items: {
    "/add-watermark": [
      {
        question: "How do I add a watermark to a PDF?",
        answer: "Drag your PDF into the area above, choose «Place Text» or «Place Image», set the font, size, color, position, opacity and rotation, then click «Add Watermark».",
      },
      {
        question: "Can I use my logo as a watermark?",
        answer: "Yes. Choose «Place Image» and upload your logo (up to 5 MB, 1 MB or less recommended).",
      },
      {
        question: "Can I repeat the watermark across the page?",
        answer: "Yes. Turn on «Mosaic» to repeat it across the page, and choose whether it sits over or below the PDF content.",
      },
      {
        question: "Are my files safe?",
        answer: "Yes. Your files are transferred over an encrypted (TLS) connection and automatically deleted from our servers after processing.",
      },
    ],
  },
};
