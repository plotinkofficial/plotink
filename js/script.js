// ===== PLOTINK LANGUAGE TOGGLE =====

document.addEventListener("DOMContentLoaded", () => {

    const langBtn = document.getElementById("langToggleBtn");

    let currentLang =
        localStorage.getItem("plotink_lang") || "en";


    function updateLanguage(lang) {

        const elements =
            document.querySelectorAll("[data-lang-en]");


        elements.forEach((el) => {

            if (lang === "hi") {

                const hindiText =
                    el.getAttribute("data-lang-hi");

                if (hindiText) {
                    el.innerText = hindiText;
                }

            } else {

                const englishText =
                    el.getAttribute("data-lang-en");

                if (englishText) {
                    el.innerText = englishText;
                }

            }

        });


        // Update language button

        if (langBtn) {

            langBtn.innerText =
                lang === "en"
                    ? "🌐 हिन्दी"
                    : "🌐 English";

        }


        // Save selected language

        localStorage.setItem(
            "plotink_lang",
            lang
        );

    }


    // ===== INITIAL LANGUAGE =====

    updateLanguage(currentLang);


    // ===== LANGUAGE BUTTON =====

    if (langBtn) {

        langBtn.addEventListener("click", () => {

            currentLang =
                currentLang === "en"
                    ? "hi"
                    : "en";


            updateLanguage(currentLang);

        });

    }


    // ===== STAY LOCATION =====

    const locationSelect =
        document.getElementById("stayLocation");


    if (locationSelect) {

        // Update links on location change

        locationSelect.addEventListener(
            "change",
            updateStayLinks
        );


        // Set initial links

        updateStayLinks();

    }

});


// =====================================================
// ===== DYNAMIC STAY / HOTEL WHATSAPP LINKS ===========
// =====================================================

function updateStayLinks() {

    const locationSelect =
        document.getElementById("stayLocation");


    // Stay section not present on this page

    if (!locationSelect) {
        return;
    }


    const location =
        locationSelect.value || "your preferred location";


    const phone =
        "919193339398";


    // =================================================
    // HOTEL
    // =================================================

    const btnHotel =
        document.getElementById("btn-hotel");


    if (btnHotel) {

        const message =
            `Hi Plotink, I am looking for a *Hotel / Room* stay in *${location}*. Please share details.`;


        btnHotel.href =
            `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    }


    // =================================================
    // HOMESTAY
    // =================================================

    const btnHomestay =
        document.getElementById("btn-homestay");


    if (btnHomestay) {

        const message =
            `Hi Plotink, I am looking for a *Homestay* in *${location}*. Please share details.`;


        btnHomestay.href =
            `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    }


    // =================================================
    // RESORT / VILLA
    // =================================================

    const btnResort =
        document.getElementById("btn-resort");


    if (btnResort) {

        const message =
            `Hi Plotink, I am looking for a *Resort / Villa* stay in *${location}*. Please share details.`;


        btnResort.href =
            `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    }


    // =================================================
    // CAMP / GLAMPING
    // =================================================

    const btnCamp =
        document.getElementById("btn-camp");


    if (btnCamp) {

        const message =
            `Hi Plotink, I am looking for a *Camp / Glamping* stay in *${location}*. Please share details.`;


        btnCamp.href =
            `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    }

}