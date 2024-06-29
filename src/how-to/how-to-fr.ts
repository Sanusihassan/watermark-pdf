import { _howToSchema } from "./how-to";

export const howToSchema: _howToSchema = {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "Comment ajouter un filigrane à un PDF ?",
    description: "Étapes pour ajouter un filigrane à votre fichier PDF.",
    step: [
        {
            "@type": "HowToStep",
            name: "Étape 1",
            text: "Ouvrez l'outil Ajouter un Filigrane sur PDFEquips."
        },
        {
            "@type": "HowToStep",
            name: "Étape 2",
            text: "Sélectionnez votre fichier PDF."
        },
        {
            "@type": "HowToStep",
            name: "Étape 3",
            text: "Choisissez et personnalisez votre filigrane (texte ou image)."
        },
        {
            "@type": "HowToStep",
            name: "Étape 4",
            text: "Cliquez sur le bouton 'Ajouter un Filigrane' pour appliquer le filigrane."
        },
        {
            "@type": "HowToStep",
            name: "Étape 5",
            text: "Cliquez sur le bouton 'Télécharger le PDF avec Filigrane' pour enregistrer votre fichier."
        }
    ]
};
