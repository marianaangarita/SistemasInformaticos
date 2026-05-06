# Patrones del Sistema

## Arquitectura Obligatoria (Reglas MVC)
El proyecto se rige por una separación estricta siguiendo el patrón Modelo-Vista-Controlador (MVC).

1. **`model.js` (Modelo)**: Maneja EXCLUSIVAMENTE los datos (el estado de la aplicación, puntuación, índice de la pregunta actual y array de preguntas con imágenes). No interactúa con el DOM.
2. **`components.js` (Vista)**: Únicamente puede contener **funciones puras** que devuelvan código HTML. Estos componentes son mudos, no tienen estado propio ni lógica de negocio. (Ej: `renderQuestionCard`, `renderScore`, `renderImageComponent`).
3. **`app.js` (Controlador)**: Contiene la lógica de orquestación. Actúa como intermediario: obtiene datos de `model.js`, los inyecta en las funciones de `components.js` para generar el HTML final, y lo inserta en el DOM. Además, gestiona los event listeners (clics).

## Requisitos Técnicos
- **Componentes Modulares**: Se deben usar al menos 3 componentes distintos (el cuestionario/test, la pantalla de resultados, y el renderizador de imágenes).
- **Orquestación**: La aplicación debe integrar todos los componentes de manera encapsulada y estructurada.

## Reglas de Trabajo (IA)
- **Registro de Prompts**: Cada vez que se envíe un prompt, DEBE guardarse automáticamente en `mensajes_prompts.txt`.
- **Actualización Continua**: Cada avance en el proyecto DEBE reflejarse automáticamente actualizando `activeContext.md`, `progress.md` y cualquier otro archivo relevante del Memory Bank.
