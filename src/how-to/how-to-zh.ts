import { _howToSchema } from "./how-to";

export const howToSchema: _howToSchema = {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "如何给PDF添加水印？",
    description: "为您的PDF文件添加水印的步骤。",
    step: [
        {
            "@type": "HowToStep",
            name: "步骤 1",
            text: "在PDFEquips上打开添加水印工具。"
        },
        {
            "@type": "HowToStep",
            name: "步骤 2",
            text: "选择您的PDF文件。"
        },
        {
            "@type": "HowToStep",
            name: "步骤 3",
            text: "选择并自定义您的水印（文字或图像）。"
        },
        {
            "@type": "HowToStep",
            name: "步骤 4",
            text: "点击“添加水印”按钮应用水印。"
        },
        {
            "@type": "HowToStep",
            name: "步骤 5",
            text: "点击“下载带水印的PDF”按钮保存文件。"
        }
    ]
};
