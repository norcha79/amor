function createHearts() {
    const heartsContainer = document.getElementById('hearts');
    const heartEmojis = ['❤️', '💕', '💖', '💗', '💓', '💝', '♥️'];

    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
        heart.style.animationDelay = (Math.random() * 5) + 's';
        heart.style.fontSize = (Math.random() * 15 + 15) + 'px';
        heartsContainer.appendChild(heart);
    }
}

// Llamar al cargar la página
createHearts();

// Razones para amarla
const reasons = [
    "Porque tu sonrisa ilumina hasta el día más gris.",
    "Porque tu risa es la melodía más hermosa del mundo.",
    "Porque me haces sentir que puedo lograr cualquier cosa.",
    "Porque tu mirada me quita el aliento.",
    "Porque eres fuerte, valiente e increíble.",
    "Porque cada momento contigo es un tesoro.",
    "Porque me conoces mejor que nadie.",
    "Porque tu amor me llena completamente."
];

function updateReason() {
    const reasonEl = document.getElementById('reason-text');
    const randomReason = reasons[Math.floor(Math.random() * reasons.length)];
    reasonEl.textContent = randomReason;
}

// Actualizar razón cada 5 segundos
setInterval(updateReason, 5000);

// Contador de tiempo juntos (fecha de inicio del noviazgo)
function updateCounter() {
    // Cambia esta fecha a cuando comenzaron su relación
    const startDate = new Date('2024-01-01T00:00:00');
    const now = new Date();
    
    const diff = now - startDate;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

setInterval(updateCounter, 1000);

// Mensaje secreto
function showSecretMessage() {
    document.getElementById('secret-message').classList.add('show');
}

function hideSecretMessage() {
    document.getElementById('secret-message').classList.remove('show');
}