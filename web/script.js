let layerCount = 1;
const maxLayers = 4;
const whispers = [
    "Patrzysz, ale nie widzisz…",
    "Prawda kryje się pod skórą.",
    "Bóg mówi szeptem ciał.",
    "Odsłoń LOGOS.",
    "Zasłona opada."
];

const veil = document.getElementById('veil-layer');
const whisperEl = document.getElementById('whisper');
const countEl = document.getElementById('count');
const coherenceEl = document.getElementById('coherence');
const resetBtn = document.getElementById('reset-btn');

veil.addEventListener('click', () => {
    if (layerCount <= maxLayers) {
        let currentLayer;
        if (layerCount === 1) currentLayer = document.querySelector('.layer-1');
        else currentLayer = document.getElementById('layer' + (layerCount));
        
        if (currentLayer) {
            currentLayer.classList.add('hidden');
            
            // Show next layer
            if (layerCount < maxLayers) {
                const nextLayer = document.getElementById('layer' + (layerCount + 1));
                if (nextLayer) nextLayer.classList.remove('hidden');
            } else {
                document.getElementById('core-reveal').classList.remove('hidden');
            }
            
            layerCount++;
            updateStats();
        }
    }
});

function updateStats() {
    const coherence = Math.round(((layerCount - 1) / maxLayers) * 100);
    countEl.textContent = layerCount - 1;
    coherenceEl.textContent = coherence;
    
    whisperEl.textContent = whispers[Math.min(layerCount - 1, whispers.length - 1)];
    
    if (layerCount > maxLayers) {
        resetBtn.classList.remove('hidden');
        whisperEl.style.color = "#d4af37";
        whisperEl.style.opacity = "1";
    }
}

resetBtn.addEventListener('click', () => {
    location.reload();
});

// Subtle hover effect
veil.addEventListener('mousemove', (e) => {
    const x = e.offsetX / veil.clientWidth;
    const y = e.offsetY / veil.clientHeight;
    veil.style.borderColor = `rgba(212, 175, 55, ${0.3 + (x * 0.4)})`;
});
