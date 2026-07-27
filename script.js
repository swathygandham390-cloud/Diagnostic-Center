// ===============================
// Hamburger Menu
// ===============================

function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
}

// ===============================
// Appointment Booking
// ===============================

document.getElementById("bookingForm").addEventListener("submit", function (e) {

    e.preventDefault();

    const patientName = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const mobile = document.querySelector('input[type="tel"]').value;
    const age = document.querySelector('input[type="number"]').value;
    const department = document.querySelectorAll("select")[0].value;
    const date = document.querySelector('input[type="date"]').value;
    const time = document.querySelectorAll("select")[1].value;
    const notes = document.querySelector("textarea").value;

    alert(
`✅ APPOINTMENT BOOKED SUCCESSFULLY

Patient Name : ${patientName}

Email : ${email}

Mobile : ${mobile}

Age : ${age}

Department :
${department}

Appointment Date :
${date}

Preferred Time :
${time}

Additional Notes :
${notes || "No Notes"}

Thank you for choosing our Health Diagnostic Center!`
    );

    this.reset();

});

// ===============================
// Close Mobile Menu After Clicking
// ===============================

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        document.getElementById("navMenu").classList.remove("active");

    });

});