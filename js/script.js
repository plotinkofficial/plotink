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
}