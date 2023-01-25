
document.querySelector('#btn-search').addEventListener('click', () => {
    const data = {
        departure: document.querySelector('#departure').value,
        arrival: document.querySelector('#arrival').value,
        date: document.querySelector('#date').value
    };
    fetchTrips(data);
})

function fetchTrips(data) {
    fetch('http://localhost:3000/trips/getTrips', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.result) {
                document.querySelector("#trips").innerHTML = "";
                data.trips.forEach(trip => {
                    document.querySelector("#trips").innerHTML += `
                    <div class="bg-light rounded-small trip" data-id="${trip._id}">
                    ${trip.departure} > ${trip.arrival} <span class="hour">${new Date(trip.date).getHours()}:${new Date(trip.date).getMinutes()}</span> <strong class="price">${trip.price}€</strong> <span class="book bg-primary text-white rounded-small pointer">Book</span>
                    </div>
                    
                    `;

                    // Make book clickable
                    document.querySelectorAll('.book').forEach(book => {
                        book.addEventListener('click', (e) => {
                            bookTrip(e);
                        })
                    });
                });
            } else {
                document.querySelector('#result-img').src = "assets/images/notfound.png"
                document.querySelector('#result-txt').textContent = data.error
            }
        });
}



function bookTrip(e) {
    fetch('http://localhost:3000/bookings/store', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: e.target.parentNode.dataset.id })
    })
        .then(response => response.json())
        .then(data => {
            if (data.result) {
                location.href = 'cart.html';
            } else {
                alert(data.error)
            }
        });
}