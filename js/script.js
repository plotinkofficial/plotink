function searchStay() {

    const location = document.getElementById("stayLocation").value.trim();
    const checkIn = document.getElementById("checkIn").value;
    const checkOut = document.getElementById("checkOut").value;

    if (location === "") {
        alert("Please enter your location.");
        return;
    }

    if (checkIn === "") {
        alert("Please select check-in date.");
        return;
    }

    if (checkOut === "") {
        alert("Please select check-out date.");
        return;
    }

    if (checkOut <= checkIn) {
        alert("Check-out date must be after check-in date.");
        return;
    }

    document.getElementById("properties").scrollIntoView({
        behavior: "smooth"
    });
}// Stay links auto-update based on location selector
function updateStayLinks() {
    const locationSelect = document.getElementById("stayLocation");
    if (!locationSelect) return;
    
    const location = locationSelect.value;
    const phone = "917500030061";

    document.getElementById("btn-hotel").href = 
        `https://wa.me/${phone}?text=Hi%20Plotink,%20I%20am%20looking%20for%20a%20*Hotel%20/%20Room*%20stay%20in%20*${location}*.%20Please%20share%20details.`;

    document.getElementById("btn-homestay").href = 
        `https://wa.me/${phone}?text=Hi%20Plotink,%20I%20am%20looking%20for%20a%20*Homestay*%20in%20*${location}*.%20Please%20share%20details.`;

    document.getElementById("btn-resort").href = 
        `https://wa.me/${phone}?text=Hi%20Plotink,%20I%20am%20looking%20for%20a%20*Resort%20/%20Villa*%20stay%20in%20*${location}*.%20Please%20share%20details.`;

    document.getElementById("btn-camp").href = 
        `https://wa.me/${phone}?text=Hi%20Plotink,%20I%20am%20looking%20for%20a%20*Camp%20/%20Glamping*%20stay%20in%20*${location}*.%20Please%20share%20details.`;
}

document.addEventListener("DOMContentLoaded", updateStayLinks);