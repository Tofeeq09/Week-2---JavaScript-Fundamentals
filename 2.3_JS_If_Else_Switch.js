console.log(`

Activity 1 + Stretch:`);

let age = 18;
let country = "UK";

if (age > 17 && country == "UK") {
console.log (`You are ${age}, yes I can serve you.`)
}
else {
console.log (`You aren't old enough yet.`)
};

/////////////////////////////////////////////////////////////////////////////////

console.log(`

Activity 2:`);

let topping = "Mushrooms"; // Change this to any topping you want


switch (topping) {
case "Mushrooms":
case "Onions":
case "Bell peppers":
   console.log("These are important ingredients for my pizza.");
   break;
case "Margherita":
   console.log("I don't mind having Margherita on my pizza");
   break;
default:
    console.log ("Pepperoni should not be on a pizza.");
};

/////////////////////////////////////////////////////////////////////////////////

console.log(`

Activity 3:`);

const password = `1234567`;
console.log (`Password Length: ${password.length}`);

if (password.length < 8) {
    console.log (`Password is too short.`)
} else {
    console.log (password)
};

console.log(`
Activity 3 Stretch:`);

let num = 12;
console.log (`This number is ${num}`);

if (num % 3 === 0 || num % 5 === 0) {
    console.log(`This number ${num} is divisible by 3 or 5`);
} else {
    console.log(`This number ${num} isn't divisible by 3 or 5`);
};

/////////////////////////////////////////////////////////////////////////////////

console.log(`

Activity 4:`);

num = 15;

switch (true) {
    case num % 3 === 0 && num % 5 === 0:
        console.log("fizz buzz");
        break;
    case num % 3 === 0:
        console.log("fizz");
        break;
    case num % 5 === 0:
        console.log("buzz");
        break;
    default:
        console.log(num);
        break;
};

/////////////////////////////////////////////////////////////////////////////////

console.log(`

Activity 5:`);

num = 105601;

function is_palindrome(num) {
    const num_string = num.toString(); // toString(): convert a value to its string
    const reversed_num_string = num_string.split('').reverse().join('');
    // split('') split('') method is used to split a string into an array of individual characters.
    // '' as the argument means splitting the string at each character.
    // reverse() method is used to reverse the order of elements in an array.
    // join('') method is used to concatenate the elements of an array into a single string.
    // '' specifies that there should be no separator between the elements.

    return num_string === reversed_num_string;
};


if (is_palindrome(num)) {
    console.log(`${num} is a palindrome.`);
} else {
    console.log(`${num} is not a palindrome.`);
};

/////////////////////////////////////////////////////////////////////////////////

console.log(`

Activity 6:`);

let time = 8;
let placeOfWork = "Office";
let townOfHome = "Home";

if (time === 7) {
    console.log(`At ${time}: I'm at ${townOfHome}.`);
} else if (time === 8) {
    console.log(`At ${time}: I'm commuting.`);
} else if (time === 9) {
    console.log(`At ${time}: I'm at ${placeOfWork}.`);
} else {
    console.log(`At ${time}: I'm somewhere else.`);
};

/////////////////////////////////////////////////////////////////////////////////

console.log(`

Activity 7:`);

let str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";

const vowels = "aeiou";
let lastVowelIndex = -1;

for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
        lastVowelIndex = i;
    }
};

console.log(`The index of the last vowel is: ${lastVowelIndex}`);

/////////////////////////////////////////////////////////////////////////////////

console.log(`

Activity 8:`);

let word = "example";

if (word.length > 0 && word[0] === word.slice(-1)) {
    console.log(true);
} else {
    console.log(false);
};

/////////////////////////////////////////////////////////////////////////////////

console.log(`

Activity 9:`);

let num1 = 5;
let num2 = 8;

let sum = num1 + num2;

if (sum % 2 === 0) {
    console.log(`The sum ${sum} is even.`);
} else {
    let multiplicationResult = num1 * num2;
    console.log(`The result of multiplying ${num1} and ${num2} is ${multiplicationResult}.`);
}