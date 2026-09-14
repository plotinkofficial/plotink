/* =====================================
   PLOTINK HINDI OFFERS
===================================== */

const plotinkOffers = [
    "🔥 खास ऑफर: उत्तराखंड में नई प्रॉपर्टीज़ उपलब्ध हैं!",
    "🏡 घर, प्लॉट या जमीन खरीदना है? PLOTINK से जुड़ें!",
    "💰 अपनी प्रॉपर्टी बेचना चाहते हैं? आज ही PLOTINK से संपर्क करें!",
    "⛰️ उत्तराखंड की खूबसूरत Hill Properties के लिए हमसे जुड़ें!",
    "🔑 BUY • SELL • RENT — आपकी प्रॉपर्टी, हमारी जिम्मेदारी!",
    "📲 अपनी प्रॉपर्टी की जानकारी या जरूरत हमें भेजें!",
    "✨ नई प्रॉपर्टीज़ जल्द ही PLOTINK पर उपलब्ध होंगी!"
];


/* =====================================
   CREATE OFFER BAR
===================================== */

const offerBar = document.getElementById("plotink-offer-bar");

if (offerBar) {

    const track = document.createElement("div");

    track.className = "plotink-offer-track";


    plotinkOffers.forEach(function (offer) {

        const text = document.createElement("span");

        text.className = "plotink-offer-text";

        text.textContent = offer;

        track.appendChild(text);

    });


    offerBar.className = "plotink-offer-bar";

    offerBar.appendChild(track);

}
