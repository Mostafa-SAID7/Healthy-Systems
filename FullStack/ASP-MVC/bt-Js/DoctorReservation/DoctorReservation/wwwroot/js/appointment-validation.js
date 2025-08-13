document.addEventListener('DOMContentLoaded', function () {
    const appointmentTime = document.getElementById('appointmentTime');
    const appointmentForm = document.getElementById('appointmentForm');

    // 1️⃣ Flatpickr date picker: disable Friday & Saturday + past dates
    flatpickr("#appointmentDate", {
        dateFormat: "Y-m-d",
        minDate: "today",
        disable: [
            function (date) {
                return (date.getDay() === 5 || date.getDay() === 6); // 5 = Friday, 6 = Saturday
            }
        ]
    });

    // 2️⃣ Populate time dropdown with 30-minute increments in AM/PM format
    function populateTimes() {
        appointmentTime.innerHTML = "";
        let startHour = 8;  // Start at 8 AM
        let endHour = 18;   // End at 6 PM

        for (let hour = startHour; hour <= endHour; hour++) {
            for (let min of [0, 30]) {
                if (hour === endHour && min > 0) continue;

                let period = hour >= 12 ? "PM" : "AM";
                let displayHour = hour % 12 || 12;
                let displayMin = String(min).padStart(2, '0');

                let valueHour = String(hour).padStart(2, '0');
                let valueMin = String(min).padStart(2, '0');

                let option = document.createElement("option");
                option.value = `${valueHour}:${valueMin}`;
                option.textContent = `${displayHour}:${displayMin} ${period}`;
                appointmentTime.appendChild(option);
            }
        }
    }

    populateTimes();

    // 3️⃣ Handle form submission
    appointmentForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const dateValue = document.getElementById('appointmentDate').value;
        const timeValue = appointmentTime.value;

        // ⛔ Stop submit if fields are empty (no alert)
        if (!dateValue || !timeValue) {
            return;
        }

        const myModal = new bootstrap.Modal(document.getElementById('successModal'), {
            backdrop: 'static',
            keyboard: false
        });
        myModal.show();
        appointmentForm.reset();
    });
});
