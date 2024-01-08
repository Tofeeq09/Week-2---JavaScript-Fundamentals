console.log(`

Activity:`)
console.log(
`   |   |   
   |   |   
   |   |   
-----------
   |   |   
   |   |   
   |   |   
-----------
   |   |   
   |   |   
   |   |   `);


console.log(`
Activity Stretch - Using Arreys & Loops:`)
const columns = `   |   |   `;
const rows = `-----------`;
for (let i = 1; i < 12; i++) {
    if (i%4===0) {
        console.log(rows)
    }
    else {
        console.log(columns)
    }
};