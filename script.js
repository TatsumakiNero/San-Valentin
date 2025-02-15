document.addEventListener("DOMContentLoaded", () => {
    const terminalText = document.getElementById("terminal-text");
    const terminalScreen = document.querySelector(".terminal-screen");
    const celebrationScreen = document.querySelector(".celebration-screen");
    
    // Simulación de "hackeo"
    let messages = [
        "Accediendo a la base de datos...",
        "Analizando archivos...",
        "Sistema comprometido...",
        "Has sido hackeado...",
        "Jaja no cierto, Feliz San Valentín ❤️"
    ];
    
    let index = 0;
    let interval = setInterval(() => {
        terminalText.textContent = messages[index];
        index++;
        if (index === messages.length) {
            clearInterval(interval);
            setTimeout(() => showCelebration(), 2000);
        }
    }, 1500);
    
    function showCelebration() {
        terminalScreen.classList.add("hidden");
        celebrationScreen.classList.remove("hidden");
        launchConfetti();
    }
    
    function launchConfetti() {
        let end = Date.now() + 5 * 1000;
        let colors = ["#ff4b2b", "#ff416c", "#ffffff"];
    
        (function frame() {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: colors
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: colors
            });
            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        })();
    }
});
