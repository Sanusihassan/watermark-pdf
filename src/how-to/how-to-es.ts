import { _howToSchema } from "./how-to";

export const howToSchema: _howToSchema = {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "¿Cómo agregar una marca de agua a un PDF?",
    description: "Pasos para agregar una marca de agua a su archivo PDF.",
    step: [
        {
            "@type": "HowToStep",
            name: "Paso 1",
            text: "Abra la herramienta Agregar Marca de Agua en PDFEquips."
        },
        {
            "@type": "HowToStep",
            name: "Paso 2",
            text: "Seleccione su archivo PDF."
        },
        {
            "@type": "HowToStep",
            name: "Paso 3",
            text: "Elija y personalice su marca de agua (texto o imagen)."
        },
        {
            "@type": "HowToStep",
            name: "Paso 4",
            text: "Haga clic en el botón 'Agregar Marca de Agua' para aplicar la marca de agua."
        },
        {
            "@type": "HowToStep",
            name: "Paso 5",
            text: "Haga clic en el botón 'Descargar PDF con Marca de Agua' para guardar su archivo."
        }
    ]
};
