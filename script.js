const refranes = [
  "El verdadero viaje no es hacia fuera, sino hacia dentro. Aprende a escucharte en el silencio.",
  "Lo que resistes, persiste. Solo aceptando puedes trascender.",
  "Cada cicatriz es un mapa de tu fortaleza oculta.",
  "El tiempo no cura todo, solo enseña a vivir con las heridas.",
  "En la incertidumbre habita la posibilidad más pura de transformación.",
  "El alma habla en susurros; aprende a entender su lenguaje.",
  "Renunciar no es rendirse, sino elegir tu paz por encima de la tormenta.",
  "El miedo es un maestro disfrazado; solo quien lo enfrenta descubre su poder.",
  "No busques la luz afuera cuando la oscuridad dentro necesita ser sanada.",
  "El amor más profundo comienza por amarte sin condiciones.",
  "Cada final es un umbral hacia un nuevo comienzo, invisible aún para los ojos.",
  "La sabiduría nace del dolor transformado en aprendizaje.",
  "El equilibrio no es estar siempre bien, sino saber navegar entre la tormenta y la calma.",
  "Las preguntas profundas son semillas que germinan respuestas verdaderas.",
  "Tu esencia es eterna; las circunstancias son solo capítulos pasajeros.",
  "No hay crecimiento sin dejar ir lo que ya no sirve a tu alma.",
  "El presente es el único lugar donde realmente existes; habítalo con conciencia.",
  "La autenticidad es el camino hacia la libertad interior.",
  "Cada pensamiento es una semilla: cultiva los que te nutren.",
  "El perdón libera más a quien lo da que a quien lo recibe.",
  "En el desapego florece la verdadera conexión con la vida.",
  "No temas a la soledad, pues en ella se encuentra la voz de tu verdad.",
  "El dolor es inevitable; el sufrimiento es opcional.",
  "Tu sombra contiene la luz que aún no has querido ver.",
  "La humildad es la puerta hacia el verdadero conocimiento.",
  "Ser vulnerable no es debilidad, es valentía que renace cada día.",
  "El destino es una danza entre el libre albedrío y la aceptación.",
  "No cargues el peso del mundo; aprende a soltar con amor.",
  "Cada respiración consciente es un acto de renovación profunda.",
  "Confía en el proceso invisible, porque siempre está obrando a tu favor."
];

const empanada = document.getElementById('empanada');
const message = document.getElementById('message');
const openBtn = document.getElementById('openBtn');
const soundToggle = document.getElementById('soundToggle');
const sparklesContainer = document.querySelector('.sparkles');

let isOpen = false;
let lastRefran = '';
let openSound = new Audio('catmeow1-89814.mp3');
let closeSound = new Audio('shrt-meow-352842.mp3');

function getRandomRefran() {
    let newRefran;
    do {
        newRefran = refranes[Math.floor(Math.random() * refranes.length)];
    } while (newRefran === lastRefran);
    lastRefran = newRefran;
    return newRefran;
}

function createSparkles() {
    for (let i = 0; i < 20; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 2 + 's';
        sparklesContainer.appendChild(sparkle);
        
        // Remover el sparkle después de la animación
        setTimeout(() => sparkle.remove(), 1000);
    }
}

function playSound(isOpening) {
    if (soundToggle.checked) {
        if (isOpening) {
            openSound.currentTime = 0;
            openSound.play();
        } else {
            closeSound.currentTime = 0;
            closeSound.play();
        }
    }
}

function toggleEmpanada() {
    if (!isOpen) {
        // Abrir empanada
        empanada.classList.add('open');
        playSound(true);
        createSparkles();
        setTimeout(() => {
            message.textContent = getRandomRefran();
            message.classList.add('show');
        }, 500);
    } else {
        // Cerrar empanada
        message.classList.remove('show');
        playSound(false);
        setTimeout(() => {
            empanada.classList.remove('open');
        }, 500);
    }
    isOpen = !isOpen;
}

openBtn.addEventListener('click', toggleEmpanada);
empanada.addEventListener('click', toggleEmpanada);

// Precargar sonidos
openSound.load();
closeSound.load();