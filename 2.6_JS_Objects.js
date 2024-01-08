/////////////////////////////////////////////////////////////////////////////////

console.log(`

Activity 1:`);

const person = {
  person_name: "Dave",
  songs: ["song_a", "song_b", "song_c"],
  say_hi() {
    return `Hello! My name is ${this.person_name}!`
  }
};

console.log(person.say_hi());

/////////////////////////////////////////////////////////////////////////////////

console.log(`

Activity 2:`);

const pet = {
    pet_name: "Bob",
    typeOfPet: "Cat",
    age: 12,
    colour: "white",
    eat() {
      console.log(`Your ${this.typeOfPet} ${this.pet_name} is eating!`)
      return "Eating complete!"
    },
    drink() {
      console.log(`Your pet ${this.typeOfPet} ${this.pet_name} is drinking!`)
      return "Drinking complete!"
    },
    brush() {
        console.log(`You brush your pet ${this.typeOfPet} ${this.pet_name}'s ${this.colour} fur!`)
        return "Brushing complete!"
    }
};

pet.brush()
/////////////////////////////////////////////////////////////////////////////////

console.log(`

Activity 3:`);

const coffeeShop = {
    branch: "Main Street",
    drinks: [
      { name: "americano", price: 2.5 },
      { name: "latte", price: 3 },
      { name: "cappuccino", price: 3 }
    ],
    foods: [
      { name: "croissant", price: 2 },
      { name: "muffin", price: 2.5 },
      { name: "sandwich", price: 5 }
    ],
  
    totalorder(foods, drinks) {
      let totalCost = 0;
      let orderString = "";
  
      for (const food of foods) {
        // Purpose:
        // This syntax is used to iterate over the elements of an array in JavaScript. It's a concise and readable way to access each element in turn.
        
        // Breakdown:
        // for: This keyword starts a for loop, which is a construct for repeating code a certain number of times.
        // const food: Declares a constant variable named food that will hold the current element's value during each iteration.
        // of: Indicates that you're iterating over the elements of an array or iterable object.
        // foods: Specifies the array or iterable object to loop through.
        
        // How It Works:
        // The loop begins by assigning the first element of the foods array to the food variable.
        // The code within the loop's body executes, using the current value of food.
        // The loop moves on to the next element in the array, re-assigning food with the new value.
        // This process repeats until all elements in the array have been processed.
  
        // In the Coffee Shop Code:
        // The for (const food of foods) loop iterates through the foods array, which contains the names of ordered foods.
        // In each iteration:
        // The food variable holds the current food name (e.g., "croissant").
        // The code checks if the food is available in the this.foods array using the find method.
        // If available, its price is added to the total cost, and it's included in the order string.
        // If not available, a message is added to the order string indicating its unavailability.
        
        // Key Points:
        // The for...of loop provides a clean and efficient way to process array elements.
        // It's a commonly used construct in JavaScript for working with arrays.
        // It offers a modern and readable alternative to traditional for loops with indexes.
        
        const matchingItem = this.foods.find(item => item.name === food);
        // Purpose:
        // This code locates a specific item within the this.foods array based on its name property. It's a common way to search for items in arrays in JavaScript.
        
        // Breakdown:
        // const matchingItem =: Declares a constant variable named matchingItem to store the found item, or undefined if not found.
        // this.foods.find(...): Calls the find method on the this.foods array to search for a matching item.
        // item => item.name === food: This is an arrow function that serves as the callback for the find method. It defines the condition to check for a match:
        // item: Represents each item in the array as it's being iterated over.
        // item.name === food: Compares the current item's name property with the value of the food variable (which holds the name of the food being searched for).
        
        // How It Works:
        // The find method iterates through the this.foods array.
        // For each item, it calls the arrow function with the item as its argument.
        // The arrow function checks if the item's name property matches the food variable.
        // If a match is found, the find method stops iterating and returns the matching item.
        // If no match is found, the find method returns undefined.
        
        // In the Coffee Shop Context:
        // The code is used within the totalorder function to check if ordered foods and drinks are available in the foods and drinks arrays.
        // If a matching item is found, its price is added to the total cost, and it's included in the order summary.
        // If no matching item is found, a message is added indicating its unavailability.
        
        // Key Points:
        // The find method is a convenient way to search for items in arrays based on specific criteria.
        // It returns the first matching item or undefined if no match is found.
        // Arrow functions provide a concise syntax for defining callbacks and are often used with array methods like find.
        
        if (matchingItem) {
          totalCost += matchingItem.price;
          orderString += `- ${food} (£${matchingItem.price})\n`;
        } else {
          orderString += `We don't have ${food}\n`;
        }
      }
  
      for (const drink of drinks) {  //of: Indicates that you're iterating over the elements of an array or iterable object.
        const matchingItem = this.drinks.find(item => item.name === drink);
        if (matchingItem) {
          totalCost += matchingItem.price;
          orderString += `- ${drink} (£${matchingItem.price})\n`;
        } else {
          orderString += `We don't have ${drink}\n`;
        }
      }
  
      orderString += `Total: £${totalCost}`;
  
      return orderString;
    }
  };
  
  const orderFoods = ["croissant", "muffin", "sandwich"];
  const orderDrinks = ["americano", "water"];
  
  const orderDetails = coffeeShop.totalorder(orderFoods, orderDrinks);
  console.log(orderDetails);