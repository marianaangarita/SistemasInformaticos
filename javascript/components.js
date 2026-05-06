/**
 * ARCHIVO DE COMPONENTES (Según systemPatterns.md del Memory Bank)
 * ----------------------------------------------------------------
 * REGLA ESTRICTA: Este archivo SÓLO debe contener funciones puras 
 * que devuelvan código HTML (strings). 
 * No debe tener estado ni interactuar directamente con el DOM.
 */

// 1. Componente de Pregunta
function renderQuestionCard(questionText, options) {
    const optionsHtml = options.map((opt, index) => `
        <button class="option-btn" data-index="${index}">
            ${opt}
        </button>
    `).join('');

    return `
        <div class="question-container">
            <div class="question-text">${questionText}</div>
            <div class="options-list">
                ${optionsHtml}
            </div>
        </div>
    `;
}

// 2. Componente de Marcador/Resultados
function renderScore(currentScore, totalQuestions) {
    return `
        <div class="score-container">
            <h3>📈 Puntuación Actual</h3>
            <p>Aciertos: ${currentScore} de ${totalQuestions}</p>
        </div>
    `;
}

// 3. Componente de Tarjeta de Información
function renderInfoCard(title, description, imageUrl = null) {
    const imgHtml = imageUrl ? `<img src="${imageUrl}" alt="${title}" style="max-width:100%; border-radius:4px; margin-top:1rem;">` : '';
    return `
        <div class="info-card">
            <h3>${title}</h3>
            <p>${description}</p>
            ${imgHtml}
        </div>
    `;
}

// 4. Componente de Imagen (nuevo)
function renderImageComponent(imageUrl, altText = "Imagen de la pregunta") {
    if (!imageUrl) return '';
    return `
        <div class="image-container" style="text-align: center; margin: 1rem 0;">
            <img src="${imageUrl}" alt="${altText}" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">
        </div>
    `;
}
