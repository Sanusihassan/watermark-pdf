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
    title: "Ajouter un Filigrane",
    seoTitle: "Ajouter un Filigrane à un PDF en Ligne - Outil de Filigrane Personnalisable pour PDF",
    description: "Appliquez facilement une image ou un texte en surimpression sur votre PDF. Personnalisez la typographie, la transparence et le placement.",
    keywords: "ajouter un filigrane à PDF, outil de filigrane PDF, ajouter filigrane en ligne, personnaliser filigrane PDF, appliquer filigrane texte, appliquer filigrane image",
    color: "#e55039",
    type: ".pdf",
    to: "/add-watermark",
    features: [
      {
        title: "Personnalisation Facile",
        description: "Personnalisez facilement la typographie, la transparence et le placement de votre filigrane."
      },
      {
        title: "Filigranes Texte et Image",
        description: "Appliquez des filigranes texte et image à vos documents PDF."
      },
      {
        title: "Sécurisé et Rapide",
        description: "Notre outil est sécurisé et rapide, garantissant que vos PDF soient traités rapidement et restent privés."
      }
    ]
  },
};


export const tools: _tools = {
  select: "Sélectionner",
  or_drop: "ou déposer des fichiers ici",
  files: "fichiers",
  drop_files: "Déposez les fichiers ici",
};

export const downloadFile: _downloadFile = {
  titles: {
    "add-watermark": [
      "Les PDF ont été estampillés avec succès !",
      "Le PDF a été estampillé avec succès !",
    ],
  },

  btnText: {
    "add-watermark": [
      "Télécharger les fichiers PDF estampillés",
      "Télécharger le fichier PDF estampillé",
    ],
  },

  backto: {
    "add-watermark": "Retour à Ajouter un Filigrane",
  },
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    add_watermark: "Options de filigrane",
  },
  loader_text: "Veuillez patienter...",
  add_more_button: "Ajouter plus de fichiers",
  action_buttons: {
    add_watermark: "Ajouter un filigrane",
  },
  pages: "pages",
  page: "page",
  options: {
    text_format: {
      text: "Texte",
      text_format: "Format du texte",
      font: "Police",
      font_size: "Taille de la police",
      color: "Couleur",
      font_placeholder: "Police",
    },
    add_image: "Ajouter une image",
    change_image: "Changer l'image",
    position: "Position",
    mosaic: "Mosaique",
    opacity: "Opacité",
    rotation: "Rotation",
    pages: "Pages",
    from_page: "De la page",
    to: "À",
    layer: "Couche",
    over: "Sur le contenu du PDF",
    below: "Sous le contenu du PDF",
  },
};

export const footer: _footer = {
  brand: "PDFEquips",
  terms: "conditions",
  conditions: "conditions d'utilisation",
  privacy_policy: "politique de confidentialité",
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "Le fichier est vide. Veuillez choisir un fichier valide.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "Le fichier est trop volumineux. Veuillez choisir un fichier plus petit ou utiliser notre outil de compression PDF pour réduire la taille du fichier.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "Le fichier n'est pas d'un type pris en charge.",
    types: {
      PDF: "Veuillez choisir un fichier PDF valide.",
      JPG: "Veuillez choisir un fichier d'image JPEG valide.",
      DOC: "Veuillez choisir un fichier de document Word valide.",
      DOCX: "Veuillez choisir un fichier de document Word valide.",
      XLS: "Veuillez choisir un fichier de feuille de calcul Excel valide.",
      XLSX: "Veuillez choisir un fichier de feuille de calcul Excel valide.",
      PPT: "Veuillez choisir un fichier de présentation PowerPoint valide.",
      PPTX: "Veuillez choisir un fichier de présentation PowerPoint valide.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "Le fichier est corrompu et ne peut pas être traité. Veuillez choisir un fichier valide.",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message:
      "Le fichier contient des polices manquantes. Veuillez vous assurer que toutes les polices sont intégrées dans le fichier PDF.",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message:
      "Le fichier contient des données d'image non valides. Veuillez vous assurer que toutes les images sont correctement formatées.",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "Le fichier contient un risque de sécurité et ne peut pas être traité. Veuillez choisir un fichier valide.",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "Vous avez dépassé le nombre maximal de fichiers autorisés. Veuillez supprimer certains fichiers et réessayer.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message:
      "Aucun fichier sélectionné. Veuillez sélectionner au moins un fichier.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "Une erreur inconnue s'est produite. Veuillez réessayer plus tard ou contacter le support.",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "Une erreur de réseau s'est produite. Veuillez vérifier votre connexion Internet et réessayer.",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "Veuillez télécharger au moins deux fichiers à fusionner.",
    code: "ERR_UPLOAD_COUNT",
  },
};
