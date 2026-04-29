/**
 * ARCHIVO PRINCIPAL DE APLICACIÓN (Según systemPatterns.md del Memory Bank)
 * -------------------------------------------------------------------------
 * REGLA ESTRICTA: Este archivo maneja toda la lógica de negocio, 
 * el estado, y la inyección de los componentes en el DOM.
 */

// 1. Estado de la aplicación
const state = {
    currentQuestionIndex: 0,
    score: 0,
    questions: [
        {
            text: "¿Cuál es el comando en Linux para listar archivos mostrando detalles y archivos ocultos?",
            options: ["ls", "ls -la", "dir", "show files"],
            correctIndex: 1
        },
        {
            text: "¿Qué comando de Windows se utiliza para ver la configuración IP de la máquina de forma rápida?",
            options: ["ifconfig", "ip addr", "ipconfig", "netstat"],
            correctIndex: 2
        },
        {
            text: "¿Cuál de estos puertos es el estándar para el protocolo HTTPS?",
            options: ["80", "22", "21", "443"],
            correctIndex: 3
        },
        {
            text: "¿Qué comando de Linux permite cambiar los permisos de un archivo o directorio?",
            options: ["chown", "chmod", "sudo", "ps"],
            correctIndex: 1
        },
        {
            text: "¿Cuál de los siguientes NO es un sistema gestor de bases de datos relacional (SQL)?",
            options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
            correctIndex: 2
        },
        {
            text: "En hardware, ¿qué componente se considera el 'cerebro' del ordenador encargado de ejecutar las instrucciones?",
            options: ["Memoria RAM", "Disco Duro", "Placa Base", "CPU"],
            correctIndex: 3
        },
        {
            text: "¿Qué comando se usa en SQL para extraer o leer datos de una tabla?",
            options: ["SELECT", "EXTRACT", "GET", "PULL"],
            correctIndex: 0
        },
        {
            text: "Si necesitas ver el consumo de memoria y CPU en tiempo real en Linux, ¿qué comando usarías?",
            options: ["df", "top", "grep", "tar"],
            correctIndex: 1
        }
    ]
};

// 2. Referencias al DOM
const appContainer = document.getElementById('app-container');

// 3. Orquestación y Renderizado
function renderCurrentState() {
    let htmlContent = '';

    if (state.currentQuestionIndex < state.questions.length) {
        // Todavía hay preguntas
        const currentQuestion = state.questions[state.currentQuestionIndex];
        
        // Uso de los componentes puros
        htmlContent += renderInfoCard(
            "🧠 Módulo de Evaluación", 
            `Pregunta ${state.currentQuestionIndex + 1} de ${state.questions.length}`
        );
        htmlContent += renderQuestionCard(currentQuestion.text, currentQuestion.options);
        htmlContent += renderScore(state.score, state.questions.length);

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
        htmlContent += renderScore(state.score, state.questions.length);
        
        htmlContent += `
            <div style="text-align: center; margin-top: 2rem;">
                <button class="option-btn" style="background-color: var(--primary-color); color: white;" onclick="resetTest()">Volver a intentar</button>
            </div>
        `;

        appContainer.innerHTML = htmlContent;
    }
}

// 4. Lógica de Negocio
function handleAnswer(selectedIndex) {
    const currentQuestion = state.questions[state.currentQuestionIndex];
    if (selectedIndex === currentQuestion.correctIndex) {
        state.score++; // Sumar punto si es correcto
    }
    
    // Avanzar a la siguiente pregunta
    state.currentQuestionIndex++;
    
    // Re-renderizar la interfaz
    renderCurrentState();
}

function resetTest() {
    state.currentQuestionIndex = 0;
    state.score = 0;
    renderCurrentState();
}

// 5. Arranque de la aplicación
document.addEventListener('DOMContentLoaded', () => {
    console.log("Inicializando lógica de Autoescuela de Sistemas...");
    renderCurrentState();
});
