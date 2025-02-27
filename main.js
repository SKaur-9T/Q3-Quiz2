function toggleSection(sectionId) {
    let section = document.getElementById(sectionId);
    section.style.display = (section.style.display === "block") ? "none" : "block";
}

function submitInfo() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    
    if (name && email) {
        alert("Info submitted: " + name + " (" + email + ")");
    } else {
        alert("Please fill out all fields.");
    }
}

function checkPrice() {
    let seat = document.getElementById("seat").value;
    let priceOutput = document.getElementById("priceOutput");
    let price = 0;

    if (seat === "Recliners") {
        price = 7000;
    } else if (seat === "Premium") {
        price = 6000;
    } else if (seat === "VIP") {
        price = 8000;
    } else {
        price = "Unknown";
    }

    if (price === "Unknown") {
        priceOutput.innerHTML = "<span style='color: red;'>Select a valid seat type.</span>";
    } else {
        priceOutput.innerHTML = "<strong>Ticket Price: ₱" + price + "</strong>";
        alert("Your ticket price is ₱" + price);
    }
}

function printTicket() {
    alert("Printing your ticket...");
}

function buyMore() {
    location.reload();
}