import type {
  tool as _tool,
  web2pdftool as _web2pdftool,
  tools as _tools,
  edit_page as _edit_page,
  footer as _footer,
  errors as _errors,
  downloadFile as _downloadFile,
  landing_page as _landing_page,
} from "../../content";

export const tool: _tool = {
  Add_Watermark: {
    title: "添加水印",
    description:
      "轻松在您的PDF上应用图像或文本叠加。自定义字体、透明度和位置。",
    color: "#e55039",
    type: ".pdf",
    to: "/add-watermark",
  },
};

export const downloadFile: _downloadFile = {
  titles: {
    "add-watermark": ["PDF 已成功加盖印章！", "PDF 已成功加盖印章！"],
  },

  btnText: {
    "add-watermark": ["下载已盖章的 PDF 文件", "下载已盖章的 PDF 文件"],
  },

  backto: {
    "add-watermark": "返回至添加水印",
  },
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    add_watermark: "水印选项",
  },
  loader_text: "请稍候...",
  add_more_button: "添加更多文件",
  action_buttons: {
    add_watermark: "添加水印",
  },
  pages: "页",
  page: "页",
  options: {
    text_format: {
      text: "文本",
      text_format: "文本格式",
      font: "字体",
      font_size: "字体大小",
      color: "颜色",
      font_placeholder: "字体",
    },
    add_image: "添加图片",
    change_image: "更改图片",
    position: "位置",
    mosaic: "马赛克",
    opacity: "不透明度",
    rotation: "旋转",
    pages: "页数",
    from_page: "从页面",
    to: "至",
    layer: "图层",
    over: "覆盖PDF内容",
    below: "在PDF内容下方",
  },
};

export const tools: _tools = {
  select: "选择",
  or_drop: "或将文件拖放到此处",
  files: "文件",
  drop_files: "在此处拖放文件",
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "文件为空，请选择一个有效的文件。",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "文件太大。请选择一个更小的文件，或使用我们的压缩PDF工具来减小文件大小。",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "文件不是受支持的类型。",
    types: {
      PDF: "请选择一个有效的PDF文件。",
      JPG: "请选择一个有效的JPEG图片文件。",
      DOC: "请选择一个有效的Word文档文件。",
      DOCX: "请选择一个有效的Word文档文件。",
      XLS: "请选择一个有效的Excel电子表格文件。",
      XLSX: "请选择一个有效的Excel电子表格文件。",
      PPT: "请选择一个有效的PowerPoint演示文稿文件。",
      PPTX: "请选择一个有效的PowerPoint演示文稿文件。",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message: "文件已损坏，无法处理。请选择一个有效的文件。",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message: "文件缺少字体。请确保所有字体都嵌入在PDF文件中。",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message: "文件包含无效的图像数据。请确保所有图像格式正确。",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message: "文件存在安全风险，无法处理。请选择一个有效的文件。",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message: "您已超出允许的最大文件数。请删除一些文件并重试。",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "未选择任何文件。请选择至少一个文件。",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message: "发生未知错误。请稍后重试或联系支持人员。",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message: "网络错误，请检查您的互联网连接并重试。",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "请至少上传两个文件以合并。",
    code: "ERR_UPLOAD_COUNT",
  },
};
