/**
 * ARCHIVO DE MODELO (MVC)
 * -------------------------------------------------------------------------
 * REGLA ESTRICTA: Este archivo maneja EXCLUSIVAMENTE los datos (estado, preguntas)
 * y la lógica para manipularlos. No interactúa con el DOM ni con componentes visuales.
 */

const Model = {
    state: {
        currentQuestionIndex: 0,
        score: 0,
        questions: [
            {
                text: "¿Cuál es el comando en Linux para listar archivos mostrando detalles y archivos ocultos?",
                options: ["ls", "ls -la", "dir", "show files"],
                correctIndex: 1,
                imageUrl: null
            },
            {
                text: "En la arquitectura de contenedores, ¿Qué representa esta imagen y cuál es el comando básico para descargar una imagen como 'ubuntu'?",
                options: ["docker run ubuntu", "docker pull ubuntu", "docker build ubuntu", "docker fetch ubuntu"],
                correctIndex: 1,
                imageUrl: "images/docker_concept_1778077035700.png"
            },
            {
                text: "Observando este esquema de red, ¿Qué comando de Windows se utiliza para ver la configuración IP de tu propia máquina en dicha red?",
                options: ["ifconfig", "ip addr", "ipconfig", "netstat"],
                correctIndex: 2,
                imageUrl: "images/network_concept_1778077047711.png"
            },
            {
                text: "¿Qué comando de Linux permite cambiar los permisos de un archivo o directorio?",
                options: ["chown", "chmod", "sudo", "ps"],
                correctIndex: 1,
                imageUrl: null
            },
            {
                text: "En el contexto de esta placa base, ¿qué componente es considerado el 'cerebro' del ordenador encargado de ejecutar las instrucciones?",
                options: ["Memoria RAM", "Disco Duro", "Placa Base", "CPU"],
                correctIndex: 3,
                imageUrl: "images/hardware_concept_1778077063316.png"
            },
            {
                text: "Si necesitas ver el consumo de memoria y CPU en tiempo real en Linux, ¿qué comando usarías?",
                options: ["df", "top", "grep", "tar"],
                correctIndex: 1,
                imageUrl: null
            }
        ]
    },

    getCurrentQuestion() {
        return this.state.questions[this.state.currentQuestionIndex];
    },

    checkAnswer(selectedIndex) {
        const currentQuestion = this.getCurrentQuestion();
        if (selectedIndex === currentQuestion.correctIndex) {
            this.state.score++;
        }
        this.state.currentQuestionIndex++;
    },

    isTestFinished() {
        return this.state.currentQuestionIndex >= this.state.questions.length;
    },

    getScore() {
        return this.state.score;
    },

    getTotalQuestions() {
        return this.state.questions.length;
    },

    resetTest() {
        this.state.currentQuestionIndex = 0;
        this.state.score = 0;
    }
};
