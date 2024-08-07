let selectedSeats = [];
const seatPrices = {
A1: 550, B1: 550, C1: 550, D1: 550, E1: 550,
F1: 550, G1: 550, H1: 550, I1: 550, J1: 550,
A2: 550, B2: 550, C2: 550, D2: 550, E2: 550,
F2: 550, G2: 550, H2: 550, I2: 550, J2: 550,
A3: 550, B3: 550, C3: 550, D3: 550, E3: 550,
F3: 550, G3: 550, H3: 550, I3: 550, J3: 550,
A4: 550, B4: 550, C4: 550, D4: 550, E4: 550,
F4: 550, G4: 550, H4: 550, I4: 550, J4: 550,
};
const bookedSeats = ['A1', 'A2']; // Example booked seats, you can change this as needed

document.querySelectorAll('.seat-button').forEach(button => {
const seat = button.getAttribute('data-seat');
if (bookedSeats.includes(seat)) {
  button.classList.add('booked');
  button.disabled = true;
} else {
  button.addEventListener('click', () => {
      if (button.classList.toggle('selected')) {
          selectedSeats.push(seat);
      } else {
          selectedSeats = selectedSeats.filter(s => s !== seat);
      }

      updateSelectedSeats();
  });
}

button.addEventListener('mouseover', () => {
  if (!button.classList.contains('booked') && !button.classList.contains('selected')) {
      button.style.backgroundColor = '#047a0a'; 
      
      // Slightly darker gray on hover
  }
});

button.addEventListener('mouseout', () => {
  if (!button.classList.contains('booked') && !button.classList.contains('selected')) {
      button.style.backgroundColor = '#e5e7eb'; // Light gray for available seats
  }
});
});

function updateSelectedSeats() {
const selectedSeatsList = document.getElementById('selected-seats-list');
selectedSeatsList.innerHTML = selectedSeats.map(seat => `<div class="flex justify-between gap-10">
  <div>${seat}</div>
  <div>Economy</div>
  <div>BDT ${seatPrices[seat]}</div>
</div>`).join('');

const selectedSeatCount = document.getElementById('selected-seat-count');
selectedSeatCount.textContent = selectedSeats.length;

// const DiscountedPriceCount = document.getElementById('Discounted-Price-Count');
// DiscountedPriceCount.TotalPrice - grandTotal = DiscountedPricee;

const totalPrice = document.getElementById('total-price');
const total = selectedSeats.reduce((sum, seat) => sum + seatPrices[seat], 0);
totalPrice.textContent = total;

const grandTotal = document.getElementById('grand-total');
grandTotal.textContent = total;
}

function applyCoupon() {
const couponCode = document.getElementById('couponCode').value;
let total = selectedSeats.reduce((sum, seat) => sum + seatPrices[seat], 0);

if (couponCode === 'NEW15') {
  total *= 0.85; // 15% discount
} else if (couponCode === 'COUPLE20') {
  total *= 0.80; // 20% discount
}

document.getElementById('grand-total').textContent = total;
}

function nextStep() {
const name = document.getElementById('name').value;
const phone = document.getElementById('phone').value;
const email = document.getElementById('email').value;

if (!name || !phone) {
  alert('Please fill in all required fields');
  return;
}

// Proceed to the next step or submit the form
alert('Submitted Successfully');
}

// Part for Minus seats system

      class Room {
            constructor(totalSeats) {
                this.totalSeats = totalSeats;
            }

            selectSeat() {
                if (this.totalSeats > 0) {
                    this.totalSeats -= 1;
                    return `Seat selected. Remaining seats: ${this.totalSeats}`;
                } else {
                    return "No seats available.";
                }
            }

            getRemainingSeats() {
                return this.totalSeats;
            }
        }

        // Room with 40 seats
        const room = new Room(40);

        // Elements
        const seatCountDiv = document.getElementById('seat-count');
        const selectSeatButton = document.getElementById('select-seat-button');

        // Event listener for the button
        selectSeatButton.addEventListener('click', () => {
            const message = room.selectSeat();
            seatCountDiv.textContent = message;
        });
 