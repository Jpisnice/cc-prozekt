// payment.js

async function fetchBookingDetails() {
    try {
        // Replace 'userID' with the actual user's ID or a way to identify the user
        const bookingSnapshot = await db.collection("bookings").doc(userID).get();

        if (bookingSnapshot.exists) {
            const bookingData = bookingSnapshot.data();
            const movieNameElement = document.getElementById("movieName");
            const ticketCountElement = document.getElementById("ticketCount");
            const totalPriceElement = document.getElementById("totalPrice");

            movieNameElement.textContent = `Movie: ${bookingData.movieName}`;
            ticketCountElement.textContent = `Number of Tickets: ${bookingData.ticketCount}`;
            totalPriceElement.textContent = `Total Amount: ₹${bookingData.totalPrice}`;
        } else {
            console.log("Booking data not found.");
        }
    } catch (error) {
        console.error("Error fetching booking details:", error);
    }
}

async function proceedToPayment() {
    // Handle the payment process, e.g., redirect to a payment gateway
}

// Fetch booking details when the page loads
fetchBookingDetails();
