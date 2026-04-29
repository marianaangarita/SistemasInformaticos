# Patrones del Sistema

## Arquitectura Obligatoria (Reglas)
El proyecto se rige por una separación estricta entre la interfaz y la lógica.

1. **`components.js`**: Únicamente puede contener **funciones puras** que devuelvan código HTML. Estos componentes son mudos, no tienen estado propio ni interactúan directamente con la lógica principal.
2. **`app.js`**: Contiene y maneja toda la lógica de la aplicación, estados, eventos, y la orquestación general de la interfaz.

## Requisitos Técnicos
- **Componentes Modulares**: Se deben crear y usar al menos 3 componentes distintos (por ejemplo: el cuestionario/test, la pantalla de resultados, un visualizador de imágenes o tarjetas de hardware).
- **Orquestación**: La aplicación debe integrar todos los componentes de manera encapsulada y estructurada.

## Reglas de Trabajo (IA)
- **Registro de Prompts**: Cada vez que se envíe un prompt, DEBE guardarse automáticamente en `mensajes_prompts.txt`.
- **Actualización Continua**: Cada avance en el proyecto DEBE reflejarse automáticamente actualizando `activeContext.md`, `progress.md` y cualquier otro archivo relevante del Memory Bank.
