/////////////////////////////////////////////////////////////////////////////////

console.log(`

Activity 1:`);

const factorial = (n) => {
    if ((n===0) || (n===1)) {
        return 1;
    } else {
        return (n* factorial(n-1));
    }
}

console.log(factorial(33))

/////////////////////////////////////////////////////////////////////////////////

console.log(`

Activity 2:`);

let orderCount = 0;

const takeOrder = (topping, size) => {
    orderCount++;
    console.log(`Order #${orderCount}: ${size} ${topping} Pizza`);
}

takeOrder("Cheese", "Tinny")
takeOrder("Pineapple", "Large")
takeOrder("Mushroom & Beef", "Large")

// Here, count is 5 (current value) when used in the addition, then gets incremented to 6.
// let count = 5;
// let result = count + count++; // result = 11
// console.log(count); // output: 6

// Here, count gets incremented to 6 first, then its new value is used in the addition.
// let count = 5;
// let result = count + ++count; // result = 12 
// console.log(count); // output: 6



/////////////////////////////////////////////////////////////////////////////////

console.log(`

Activity 3:`);

function simulateATM(cardNumber, pin, option) {
    console.log("Welcome to Bank of Elden!\n");
    
    if (!cards[cardNumber]) { // Check if the card exists
        console.log("Invalid card number. Please try again.");
        return;
    }
    
    // Simulate card insertion
    console.log(`Card inserted: ${cardNumber}`);
    console.log(`Enter your PIN`)
  
    // Simulate PIN verification
    if (cards[cardNumber].pin === pin) {
        
        // Display menu options (for reference, not used for input)
        console.log(`\nChoose an option:\n
        1. Balance Inquiry\n
        2. Cash Withdrawal\n
        3. Transfer Funds\n
        4. Mini Statement\n
        5. Help\n
        6. Exit\n`);
        
        // Process selected option (using the provided option value)
        switch (selectedOption) {
            case "1":
                console.log(`Your current balance is: $${cards[cardNumber].balance}`);
                break;

            case "2":
                const withdrawalAmount = 50; // Hardcoded for simulation
                if (withdrawalAmount % 10 === 0 && withdrawalAmount <= cards[cardNumber].balance) {
                    cards[cardNumber].balance -= withdrawalAmount;
                    console.log(`£${withdrawalAmount} dispensed. Please collect your cash and receipt.\nYour remaining balance is: £${cards[cardNumber].balance}`);
                } else {
                    console.log("Invalid amount or insufficient funds.");
                }
                break;

            case "3":
                // Handle fund transfer
                const recipientCardNumber = "9876543210"; // Hardcoded
                const transferAmount = 20; // Hardcoded
                if (cards[recipientCardNumber] && transferAmount <= cards[cardNumber].balance) {
                    cards[cardNumber].balance -= transferAmount;
                    cards[recipientCardNumber].balance += transferAmount;
                    console.log(`Successfully transferred £${transferAmount} to Account: ${recipientCardNumber}\nYour remaining balance is: £${cards[cardNumber].balance}`);
                } else {
                    console.log("Invalid recipient card or insufficient funds.");
                }
                break;

            case "4":
                // Display mini statement
                console.log(`Recent transactions:\n
                - Cash withdrawal: $50\n
                - Transfer to 9876543210: $20\n`);
                break;

            case "5": // Display help instructions
                console.log(`Instructions:\n
                - Insert your card\n
                - Enter your PIN\n
                - Select an option from the menu\n`);
                break;

            case "6":
                console.log("Thank you for using Bank of Elden!");
                break;
            
            default:
                console.log("Invalid option.");
            }
        } else {
            console.log("Incorrect PIN.");
        }
    console.log("\nTransaction complete. Please remove your card.\n");
}

// Store card information and balances (replace with actual data)
const cards = {
    "1234567890": {
        pin: "1234",
        balance: 1000
    },
    "9876543210": {
        pin: "5678",
        balance: 500
    }
};

// Choose the card to use and the PIN to enter
const selectedCardNumber = "1234567890";
const enteredPin = "1234";
const selectedOption = "3";

// Start the simulation with the chosen card and PIN
simulateATM(selectedCardNumber, enteredPin);
  
