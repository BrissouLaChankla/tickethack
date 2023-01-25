
function fetchBookings() {
    fetch('http://localhost:3000/bookings/allBooked', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.bookings.length) {
                document.querySelector("#bookings").innerHTML += `<p class="text-center">My bookings.</p>`
                data.bookings.forEach(booking => {
                    document.querySelector("#bookings").innerHTML += `
                        <div class="bg-light rounded-small trip" data-id="${booking.trips._id}">
                        ${booking.trips.departure} > ${booking.trips.arrival} <span class="hour">${new Date(booking.trips.date).getHours()}:${new Date(booking.trips.date).getMinutes()}</span> <strong class="price">${booking.trips.price}€</strong> <span>Departure in ${getDeltaHours(Date.now(), booking.trips.date)}</span>
                        </div>
                    `;
                });
                document.querySelector("#bookings").innerHTML += `<hr>`
                document.querySelector("#bookings").innerHTML += `<p class="text-center text-primary">Enjoy your travels with Tickethack!</p>`
            } else {
                document.querySelector('#bookings').innerHTML = `
                <p class="text-center">No booking yet.</p>
                <p class="text-center">Why not plan a trip?</p>`
            }
        });
}

function getDeltaHours(now, date) {
    const formatNow = new Date(now)
    const formatDate = new Date(date);

    let deltaHours = formatDate.getHours() - formatNow.getHours();
    let deltaMinutes = formatDate.getMinutes() - formatNow.getMinutes();
    let deltaDay = formatDate.getDay() - formatNow.getDay();

    if (deltaDay > 0) {
        return deltaDay + " days"
    } else if (deltaHours > 0) {
        return deltaHours + " hours";
    } else {
        return deltaMinutes + " minutes"
    }
}


fetchBookings();
