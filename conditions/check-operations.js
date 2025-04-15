import readline from "readline";

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Store selected operations
let selectedOperations = [];

// Check about the operations before start the calculations
// like : +, -, *, /, %, **, //, etc.
export function checkOperations() {
  console.log("\nWhich operations would you like to practice?");
  console.log("1. Addition (+)");
  console.log("2. Subtraction (-)");
  console.log("3. Multiplication (*)");
  console.log("4. Division (/)");
  console.log("5. Modulo (%)");
  console.log("6. Exponentiation (**)");
  console.log("7. Integer Division (//)");
  console.log("Enter the numbers separated by commas (e.g., 1,3,5) or 'done' when finished:");

  readLine.question("Your choice: ", (input) => {
    if (input.toLowerCase() === 'done') {
      if (selectedOperations.length === 0) {
        console.log("\nYou haven't selected any operations. Please select at least one operation.");
        checkOperations();
      } else {
        console.log("\nYou have selected to practice the following operations:");
        selectedOperations.forEach(op => {
          console.log(`- ${op}`);
        });
        readLine.close();
      }
    } else {
      const choices = input.split(',').map(choice => choice.trim());
      const validChoices = ['1', '2', '3', '4', '5', '6', '7'];
      
      if (choices.every(choice => validChoices.includes(choice))) {
        const operations = {
          '1': '+',
          '2': '-',
          '3': '*',
          '4': '/',
          '5': '%',
          '6': '**',
          '7': '//'
        };
        
        choices.forEach(choice => {
          const operation = operations[choice];
          if (!selectedOperations.includes(operation)) {
            selectedOperations.push(operation);
          }
        });
        
        console.log("\nCurrent selected operations:", selectedOperations.join(', '));
        checkOperations();
      } else {
        console.log("\nInvalid input. Please enter valid numbers separated by commas.");
        checkOperations();
      }
    }
  });
}
