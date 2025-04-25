import { askQuestions } from "../quiz-slot/ask-quiz.js"; // Adjust the path as necessary
import readline from "readline";

export function checkOperations() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("How many math questions do you want to answer? ", (input) => {
    const count = parseInt(input);
    if (!isNaN(count) && count > 0) {
      rl.close();
      askQuestions(count);
    } else {
      console.log("Please enter a valid number greater than 0.");
      rl.close();
      checkOperations();
    }
  });
}
