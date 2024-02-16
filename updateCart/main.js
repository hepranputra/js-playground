const maximumCartQuantity = 10;
const minimumCartQuantity = 0;
const fullMessage = 'The cart is full';
const notEnoughMessage = 'Not enough items in the cart';

let cartQuantity = 0;

function updateCartQuantity(sign, number) {
    if (sign === '+') {
        if ((cartQuantity + number) > maximumCartQuantity) {
            alert(fullMessage);
            return;
        }
        cartQuantity += number;
    } else if (sign === '-') {
        if ((cartQuantity - number) < minimumCartQuantity) {
            alert(notEnoughMessage);
            return;
        }
        cartQuantity -= number;
    }

    console.log(`Cart quantity: ${cartQuantity}`);
}
