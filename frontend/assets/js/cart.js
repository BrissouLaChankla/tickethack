
function fetchCart() {
    fetch('http://localhost:3000/bookings/all', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
        .then(response => response.json())
        .then(data => {
            if (data.bookings.length) {
                document.querySelector("#trips").innerHTML = "";
                let price = 0;
                data.bookings.forEach(booking => {
                    // Price
                    price += booking.trips.price;

                    document.querySelector("#trips").innerHTML += `
                    <div class="bg-light rounded-small trip" data-id="${booking._id}">
                    ${booking.trips.departure} > ${booking.trips.arrival} <span class="hour">${new Date(booking.trips.date).getHours()}:${new Date(booking.trips.date).getMinutes()}</span> <strong class="price">${booking.trips.price}€</strong> <span class="delete bg-primary text-white rounded-small pointer">X</span>
                    </div>
                    
                    `;

                    // Make delete clickable
                    document.querySelectorAll('.delete').forEach(book => {
                        book.addEventListener('click', (e) => {
                            deleteBooking(e);
                        })
                    });
                });

                document.querySelector("#price").textContent = price;
                document.querySelector("#purchase").addEventListener('click', () => {
                    purchaseBooking();
                })

            } else {
                document.querySelector('#trips').innerHTML = `
                <p class="text-center">No tickets in your cart.</p>
                <p class="text-center">Why not plan a trip?</p>`

                document.querySelector(".bottom-cart").remove();
                document.querySelector("#cart p").remove();
            }
        });
}

function deleteBooking(e) {
    fetch('http://localhost:3000/bookings/delete', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: e.target.parentNode.dataset.id })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (!data.result) {
                alert(data.error)
            }
        });
    e.target.parentNode.remove();
    fetchCart();
}


function purchaseBooking() {
    let allId = [];
    document.querySelectorAll('.trip').forEach(el => {
        allId.push(el.dataset.id);
    });
    fetch('http://localhost:3000/bookings/purchase', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ allId:allId })
    })
        .then(response => response.json())
        .then(data => {
            if(data.result){
                location.href = 'bookings.html';
            }
          console.log(data);
        });

}


fetchCart();
