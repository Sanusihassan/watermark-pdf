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
        text_format: {
            text: "Texte",
            text_format: "Format du texte",
            font: "Police",
            font_size: "Taille de la police",
            color: "Couleur",
            font_placeholder: "Police"
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
        below: "Sous le contenu du PDF"
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
        noRotationsProvided: "Veuillez spécifier la rotation pour au moins un fichier",
        rotationFailed: "Échec de la rotation du PDF. Veuillez réessayer.",
        invalidRotationAngle: "Angle de rotation invalide. Utilisez 90, 180 ou 270 degrés."
    },
};

export const adBlockerContent: adBlockerContentType = {
    title: "Bloqueur de publicités détecté",
    description: "Nous avons remarqué que vous utilisez un bloqueur de publicités. Désactivez-le ou passez à premium pour une expérience sans pubs !",
    reloadPage: "Recharger la page",
    upgradeToPremium: "Passer à Premium"
};