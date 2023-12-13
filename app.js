function applyDiscount() {
    // Get the discount code from the input field
    var discountCode = document.getElementById('discountCode').value;

    // Check if the entered discount code is valid
    if (isValidDiscountCode(discountCode)) {
        // Apply a 10% discount to the total price
        var originalPrice = 100; // Replace with your actual product price
        var discountAmount = originalPrice * 0.1;
        var discountedPrice = originalPrice - discountAmount;

        // Update the total price on the webpage
        document.getElementById('totalPrice').textContent = discountedPrice.toFixed(2);
    } else {
        // Display an error message if the discount code is invalid
        alert('Invalid discount code. Please try again.');
    }
}

// Function to check if the entered discount code is valid
function isValidDiscountCode(code) {
    // Replace this with your actual logic for checking the validity of the discount code
    // For simplicity, this example assumes a valid discount code is 'DISCOUNT123'
    return code === 'DISCOUNT123';
}