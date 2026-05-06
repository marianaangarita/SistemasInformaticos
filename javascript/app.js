/**
 * ARCHIVO DE CONTROLADOR (MVC) (Según systemPatterns.md del Memory Bank)
 * -------------------------------------------------------------------------
 * REGLA ESTRICTA: Este archivo maneja la lógica de negocio como Controlador, 
 * inyectando los componentes en el DOM y gestionando eventos. 
 * El estado se extrae de model.js.
 */

// 1. Referencias al DOM
const appContainer = document.getElementById('app-container');

// 2. Orquestación y Renderizado
function renderCurrentState() {
    let htmlContent = '';

    if (!Model.isTestFinished()) {
        // Todavía hay preguntas
        const currentQuestion = Model.getCurrentQuestion();

        // Uso de los componentes puros
        htmlContent += renderInfoCard(
            "🧠 Módulo de Evaluación",
            `Pregunta ${Model.state.currentQuestionIndex + 1} de ${Model.getTotalQuestions()}`
        );
        
        // Componente de imagen (nuevo requisito)
        if (currentQuestion.imageUrl) {
            htmlContent += renderImageComponent(currentQuestion.imageUrl, "Imagen ilustrativa de sistemas");
        }

        htmlContent += renderQuestionCard(currentQuestion.text, currentQuestion.options);
        htmlContent += renderScore(Model.getScore(), Model.getTotalQuestions());

        // Inyectar en el DOM
        appContainer.innerHTML = htmlContent;

        // Añadir Event Listeners (la lógica interactiva va aquí)
        const buttons = appContainer.querySelectorAll('.option-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const selectedIndex = parseInt(e.target.getAttribute('data-index'));
                handleAnswer(selectedIndex);
            });
        });
    } else {
        // Test Finalizado
        htmlContent += renderInfoCard(
            "🎉 ¡Test Completado!",
            "Has finalizado todas las preguntas de la Autoescuela de Sistemas."
        );
        htmlContent += renderScore(Model.getScore(), Model.getTotalQuestions());

        htmlContent += `
            <div style="text-align: center; margin-top: 2rem;">
                <button class="option-btn" style="background-color: var(--primary-color); color: white;" onclick="resetTest()">Volver a intentar</button>
            </div>
        `;

        appContainer.innerHTML = htmlContent;
    }
}

// 3. Lógica de Eventos / Controlador
function handleAnswer(selectedIndex) {
    Model.checkAnswer(selectedIndex);
    // Re-renderizar la interfaz
    renderCurrentState();
}

function resetTest() {
    Model.resetTest();
    renderCurrentState();
}

// 4. Arranque de la aplicación
document.addEventListener('DOMContentLoaded', () => {
    console.log("Inicializando lógica de Autoescuela de Sistemas (Controlador)...");
    renderCurrentState();
});
