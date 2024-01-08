console.log(`

Activity 1:`)

let person_name = "Tofeeq";
let age = 24;
let fav_colour = "Black";
console.log (`Information:
Name: ${person_name}
Age: ${age}
Favourite Colour: ${fav_colour}`)

console.log(`
Stretch - Updating veriables`)

person_name = "Jack"
age = 28
fav_colour = "Red"
console.log (`Updated Information:
Name: ${person_name}
Age: ${age}
Favourite Colour: ${fav_colour}`)

/////////////////////////////////////////////////////////////////////////////////

console.log(`

Activity 2:`)

let breakfast = "Oatmeal with berries";
let lunch = "Chicken salad sandwich";
let dinner = "Pasta with vegetables";
console.log(`Today's meals:
Breakfast: ${breakfast}
Lunch: ${lunch}
Dinner: ${dinner}`);

console.log(`
Activity 2 Stretch - Updating veriables`)

breakfast = "Scrambled eggs with toast";
lunch = "Leftover pasta";
dinner = "Soup and salad";
console.log(`Tomorrow's meals:
Breakfast: ${breakfast}
Lunch: ${lunch}
Dinner: ${dinner}`);

/////////////////////////////////////////////////////////////////////////////////

console.log(`

Activity 3:`)

const today = new Date(); // new: Creates a new Date object representing the current date and time.
console.log (`Today: ${today}`)

const birthday = new Date(2024, 0, 8); // new: Creates another Date object specifically for your birthday.
console.log (`Birthday: ${birthday}`) // months are 0-indexed

let differenceInMilliseconds;
if (birthday.getTime() > today.getTime()) {
  differenceInMilliseconds = birthday.getTime() - today.getTime();
} else {
  differenceInMilliseconds = birthday.getTime() - today.getTime() + (365 * 24 * 60 * 60 * 1000);
};

const daysUntilBirthday = differenceInMilliseconds / (1000 * 3600 * 24);

// Round the result to a whole number of days using Math.round()
const roundedDays = Math.round(daysUntilBirthday);

console.log(`Days until next Brithday: ${roundedDays}`);

/////////////////////////////////////////////////////////////////////////////////

console.log(`

Activity 4:`)

let space1 = `x`
let space2 = `o`
let space3 = ` `
let space4 = `x`
let space5 = `x`
let space6 = ` `
let space7 = `o`
let space8 = ` `
let space9 = ` `

console.log(`   |   |   
 ${space1} | ${space2} | ${space3} 
   |   |   
-----------
   |   |   
 ${space4} | ${space5} | ${space6} 
   |   |   
-----------
   |   |   
 ${space7} | ${space8} | ${space9} 
   |   |   `);