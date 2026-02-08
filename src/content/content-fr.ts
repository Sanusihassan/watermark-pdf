import type { adBlockerContentType } from "./content";
import type { edit_page as _edit_page, tool as _tool, tools as _tools, downloadFile as _downloadFile, errors as _ } from "../content";

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
    }
};

export const edit_page: _edit_page = {
    edit_page_titles: {
        add_watermark: "Options de filigrane"
    },
    loader_text: "Veuillez patienter...",
    add_more_button: "Ajouter plus de fichiers",
    action_buttons: {
        add_watermark: "Ajouter un filigrane"
    },
    pages: "pages",
    page: "page",

    options: {
        watermark_type: "Type de filigrane",
        place_text: "Placer du texte",
        place_image: "Placer une image",
        text_input: "Texte",
        image_upload: "Télécharger une image",
        select_image: "Cliquez pour sélectionner une image",
        text_format: "Format du texte",
        font: "Police",
        font_size: "Taille de police",
        color: "Couleur",
        position: "Position",
        mosaic: "Mosaïque (Répéter sur la page)",
        opacity: "Opacité",
        rotation: "Rotation",
        pages: "Pages",
        from_page: "De",
        to_page: "À",
        layer: "Couche",
        over_content: "Au-dessus du contenu PDF",
        below_content: "En dessous du contenu PDF",
        // ✅ New validation messages
        invalid_image_type: "Veuillez sélectionner un fichier image valide",
        image_too_large: "L'image est trop volumineuse. Taille maximale 5MB",
        max_5mb: "Max 5MB, recommandé 1MB ou moins",
    },
    fileCard: {
        page: "Page",
        pages: "Pages",
        remove_file: "Supprimer le fichier",
        loading: "Chargement",
        preview: "Aperçu",
    },
    filenameOptions: {
        label: "Nom du fichier de sortie (facultatif)",
        placeholder: "Entrez le nom du fichier",
        helperText: "Ce sera le nom du PDF compressé lors du téléchargement.",
        cta: "Voir les forfaits",
        upgradeNotice: {
            msg: "Les niveaux de 2.0 à 10.0 sont disponibles avec la version premium.",
            cta: "Mettre à niveau maintenant",
        },
    },
};

export const downloadFile: _downloadFile = {
    titles: {
        "add-watermark": [
            "Les PDF ont été estampillés avec succès !",
            "Le PDF a été estampillé avec succès !"
        ]
    },
    btnText: {
        "add-watermark": [
            "Télécharger les fichiers PDF estampillés",
            "Télécharger le fichier PDF estampillé"
        ]
    },
    backto: {
        "add-watermark": "Retour à Ajouter un Filigrane"
    }
};

// French (fr) - tools
export const tools: _tools = {
    select: "Sélectionner",
    or_drop: "ou déposez les fichiers ici",
    files: "fichiers",
    drop_files: "Glissez les fichiers ici",
};

export const errors: _ = {
    EMPTY_FILE: {
        message: "Le fichier est vide. Veuillez choisir un fichier valide.",
        code: "ERR_EMPTY_FILE",
    },
    FILE_TOO_LARGE: {
        message:
            "Le fichier est trop volumineux. Choisissez un fichier plus petit ou utilisez notre outil compress-pdf pour réduire la taille.",
        code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
    },
    NOT_SUPPORTED_TYPE: {
        message: "Le type de fichier n'est pas pris en charge.",
        types: {
            PDF: "Veuillez choisir un fichier PDF valide.",
            DOC: "Veuillez choisir un document Word valide.",
            DOCX: "Veuillez choisir un document Word valide.",
            XLS: "Veuillez choisir une feuille de calcul Excel valide.",
            XLSX: "Veuillez choisir une feuille de calcul Excel valide.",
            PPT: "Veuillez choisir une présentation PowerPoint valide.",
            PPTX: "Veuillez choisir une présentation PowerPoint valide.",
        },
        code: "ERR_INVALID_FILE_TYPE",
    },
    FILE_CORRUPT: {
        message:
            "Le fichier est corrompu et ne peut pas être traité. Veuillez choisir un fichier valide.",
        code: "ERR_FILE_CORRUPT",
    },
    MAX_FILES_EXCEEDED: {
        message:
            "Vous avez dépassé le nombre maximum de fichiers autorisés. Supprimez certains fichiers et réessayez.",
        code: "ERR_MAX_FILES_EXCEEDED",
    },
    NO_FILES_SELECTED: {
        message: "Aucun fichier sélectionné. Veuillez en sélectionner au moins un.",
        code: "ERR_NO_FILES_SELECTED",
    },
    UNKNOWN_ERROR: {
        message:
            "Une erreur inconnue s'est produite. Réessayez plus tard ou contactez le support.",
        code: "ERR_UNKNOWN",
    },
    ERR_NETWORK: {
        message:
            "Une erreur réseau s'est produite. Vérifiez votre connexion internet et réessayez.",
        code: "ERR_NETWORK",
    },
    ERR_UPLOAD_COUNT: {
        message: "Veuillez télécharger au moins deux fichiers pour les fusionner.",
        code: "ERR_UPLOAD_COUNT",
    },
    PASSWORD_REQUIRED: {
        message: "Le PDF nécessite un mot de passe.",
        code: "PASSWORD_REQUIRED",
    },
    INCORRECT_PASSWORD: {
        message: "Le mot de passe saisi est incorrect.",
        code: "INCORRECT_PASSWORD",
    },
    MAX_DAILY_USAGE: {
        message:
            "Vous avez atteint votre limite d'utilisation quotidienne. Mettez à jour votre plan pour continuer sans interruption.",
        code: "MAX_DAILY_USAGE",
    },
    MAX_PAGES_EXCEEDED: {
        message: "Le PDF dépasse la limite maximale de 50 pages.",
        code: "ERR_MAX_PAGES_EXCEEDED",
    },
    alerts: {
        // Frontend validation
        maxFiles: "Maximum 15 fichiers. Abonnez-vous pour plus !",
        singleFileSize: "La taille du fichier doit être inférieure à 100 Mo. Passez à la version supérieure pour uploader des fichiers plus grands !",
        perFilePages: "500 pages par fichier. Débloquez plus maintenant !",
        fileSize: "50 Mo par fichier. Passez à la version supérieure pour plus !",
        serverError: "Erreur serveur. Veuillez réessayer plus tard.",
        tooManyFiles: "Trop de fichiers téléchargés",
        // Backend file validation
        fileNotUploaded: "Aucun fichier n'a été uploadé. Veuillez sélectionner un fichier.",
        fileEmpty: "Le fichier uploadé est vide. Veuillez sélectionner un fichier valide.",
        fileTooLarge: "Le fichier dépasse la limite de 200 Mo. Passez à la version supérieure pour des fichiers plus grands !",
        invalidFileType: "Type de fichier invalide. Veuillez uploader un format pris en charge.",
        fileCorrupt: "Le fichier semble corrompu. Veuillez essayer un autre fichier.",
        insufficientUnits: "Unités de conversion insuffisantes. Passez à la version supérieure ou rechargez !",
        // Auth errors
        authRequired: "Veuillez vous connecter pour utiliser les fonctionnalités premium.",
        sessionExpired: "Votre session a expiré. Veuillez vous connecter à nouveau.",
        invalidToken: "Échec de l'authentification. Veuillez vous connecter à nouveau.",
        userNotFound: "Compte non trouvé. Veuillez vous connecter à nouveau.",
        authError: "Erreur d'authentification. Veuillez réessayer.",
        notPasswordProtected: "Un ou plusieurs fichiers ne sont pas protégés par mot de passe",

        // PDF-specific errors
        invalidPdf: "Fichier PDF invalide ou corrompu.",
        pdfNotEncrypted: "Ce PDF n'est pas protégé par mot de passe et n'a pas besoin d'être déverrouillé.",

        // Lock-PDF errors
        noLockPassword: "Veuillez fournir un mot de passe pour verrouiller le PDF.",
        lockingFailed: "Échec du verrouillage du PDF. Veuillez réessayer.",

        // Unlock-PDF errors
        noPasswordsProvided: "Veuillez fournir des mots de passe pour les PDFs verrouillés.",
        unlockingFailed: "Échec du déverrouillage du PDF. Veuillez vérifier votre mot de passe et réessayer.",
        incorrectPassword: "Mot de passe incorrect. Veuillez réessayer.",
        passwordRequired: "Ce PDF est protégé par mot de passe. Veuillez entrer le mot de passe.",

        // Settings errors
        invalidSettings: "Paramètres invalides fournis. Veuillez actualiser et réessayer.",
        conversionFailed: "Échec de la conversion. Veuillez réessayer.",
        noWatermarkText: "Veuillez entrer le texte du filigrane",
        noWatermarkImage: "Veuillez télécharger une image de filigrane",
        invalidPageRange: "Plage de pages non valide",
        watermarkFailed: "Échec de l'ajout du filigrane. Veuillez réessayer.",
        noWatermarkSettings: "Veuillez configurer les paramètres du filigrane",
        invalidWatermarkSettings: "Format des paramètres du filigrane non valide",
        invalidWatermarkImage: "Format d'image de filigrane non valide",
        pageOutOfRange: "Le numéro de page dépasse le nombre de pages du PDF",
        invalidPosition: "Position du filigrane non valide",
        invalidOpacity: "Valeur d'opacité non valide (0-100)",
        invalidRotation: "Valeur de rotation non valide (0-360)",
        invalidFontSize: "Taille de police non valide",
    },
};

export const adBlockerContent: adBlockerContentType = {
    title: "Bloqueur de publicités détecté",
    description: "Nous avons remarqué que vous utilisez un bloqueur de publicités. Désactivez-le ou passez à premium pour une expérience sans pubs !",
    reloadPage: "Recharger la page",
    upgradeToPremium: "Passer à Premium"
};