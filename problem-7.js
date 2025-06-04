// write a function that generate and print multiplication of table

function generateTable(table) {
  if (!table) {
    throw new Error("Please enter a number");
  }
  for (let i = 1; i <= 10; i++) {
    console.log(`${table} * ${i} = ${table * i}`);
  }
}

generateTable(1);
