// ===== MULTI-LANGUAGE TOGGLE LOGIC =====
document.addEventListener("DOMContentLoaded", () => {
    const langBtn = document.getElementById("langToggleBtn");
    let currentLang = localStorage.getItem("plotink_lang") || "en";

    function updateLanguage(lang) {
        const elements = document.querySelectorAll("[data-lang-en]");
        
        elements.forEach(el => {
            if (lang === "hi") {
                el.innerText = el.getAttribute("data-lang-hi") || el.innerText;
            } else {
                el.innerText = el.getAttribute("data-lang-en") || el.innerText;
            }
        });

        if (langBtn) {
            langBtn.innerText = lang === "en" ? "🌐 हिन्दी" : "🌐 English";
        }
        
        localStorage.setItem("plotink_lang", lang);
    }

    // Initial load setup
    updateLanguage(currentLang);

    // Click event for Language Button
    if (langBtn) {
        langBtn.addEventListener("click", () => {
            currentLang = currentLang === "en" ? "hi" : "en";
            updateLanguage(currentLang);
        });
    }

    // Initialize Stay booking links if present on page
    updateStayLinks();
});

// ===== DYNAMIC STAY / HOTEL BOOKING WHATSAPP LINKS =====
function updateStayLinks() {
    const locationSelect = document.getElementById("stayLocation");
    if (!locationSelect) return;
    
    const location = locationSelect.value;
    const phone = "919193339398";

    const btnHotel = document.getElementById("btn-hotel");
    if (btnHotel) {
        btnHotel.href = `https://wa.me/${phone}?text=Hi%20Plotink,%20I%20am%20looking%20for%20a%20*Hotel%20/%20Room*%20stay%20in%20*${encodeURIComponent(location)}*.%20Please%20share%20details.`;
    }

    const btnHomestay = document.getElementById("btn-homestay");
    if (btnHomestay) {
        btnHomestay.href = `https://wa.me/${phone}?text=Hi%20Plotink,%20I%20am%20looking%20for%20a%20*Homestay*%20in%20*${encodeURIComponent(location)}*.%20Please%20share%20details.`;
    }

    const btnResort = document.getElementById("btn-resort");
    if (btnResort) {
        btnResort.href = `https://wa.me/${phone}?text=Hi%20Plotink,%20I%20am%20looking%20for%20a%20*Resort%20/%20Villa*%20stay%20in%20*${encodeURIComponent(location)}*.%20Please%20share%20details.`;
    }

    const btnCamp = document.getElementById("btn-camp");
    if (btnCamp) {
        btnCamp.href = `https://wa.me/${phone}?text=Hi%20Plotink,%20I%20am%20looking%20for%20a%20*Camp%20/%20Glamping*%20stay%20in%20*${encodeURIComponent(location)}*.%20Please%20share%20details.`;
    }
}