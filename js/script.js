// 1. DUAL LANGUAGE TOGGLE LOGIC (ENGLISH <-> HINDI)
let currentLang = 'en';

function toggleLanguage() {
    const langBtn = document.getElementById('langToggleBtn');
    currentLang = currentLang === 'en' ? 'hi' : 'en';

    if (langBtn) {
        langBtn.innerText = currentLang === 'en' ? '🌐 हिन्दी' : '🌐 English';
    }

    // Switch Text Elements
    const elementsToTranslate = document.querySelectorAll('[data-lang-en]');
    elementsToTranslate.forEach(el => {
        if (currentLang === 'hi') {
            el.innerText = el.getAttribute('data-lang-hi');
        } else {
            el.innerText = el.getAttribute('data-lang-en');
        }
    });
}

// 2. SECURITY PROTECTION CODE (DISABLE RIGHT CLICK & KEYBOARD SHORTCUTS)
document.addEventListener('contextmenu', (e) => e.preventDefault());

document.addEventListener('keydown', (e) => {
    if (
        e.keyCode === 123 || // F12 Key
        (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
        (e.ctrlKey && e.shiftKey && e.keyCode === 74) || // Ctrl+Shift+J
        (e.ctrlKey && e.keyCode === 85) || // Ctrl+U (View Source)
        (e.ctrlKey && e.keyCode === 83) || // Ctrl+S (Save)
        (e.ctrlKey && e.keyCode === 67)    // Ctrl+C (Copy)
    ) {
        e.preventDefault();
        return false;
    }
});

// 3. BOOTSTRAP TOOLTIPS FOR MAP PINS
document.addEventListener("DOMContentLoaded", function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});