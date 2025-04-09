import chalk from "chalk";
import readline from "readline";
import { Writable } from "stream";

// Create a custom output stream to mute input
const mutableStdout = new Writable({
  write(chunk, encoding, callback) {
    // Do nothing to suppress output
    callback();
  },
});

const readLine = readline.createInterface({
  input: process.stdin,
  output: mutableStdout, // Use the silent stream here
});

export function helpInstructions() {
  console.log(
    chalk.bgGreen("Instructions") +
      "\n\n" +
      chalk.hex("#FF8C00")("Exit: ") +
      chalk.green("Press ") +
      chalk.bold("Ctrl + C") +
      chalk.green(" to exit.") +
      "\n\n" +
      chalk.hex("#FF8C00")("- Press ") +
      chalk.green("Enter ") +
      chalk.hex("#FF8C00")(" after entering the answer.") +
      "\n" +
      chalk.hex("#FF8C00")("- Use the ") +
      chalk.green("arrow keys ") +
      chalk.hex("#FF8C00")("to navigate through options.") +
      "\n" +
      chalk.hex("#FF8C00")("- Note: ") +
      chalk.red("** You can only select one option at a time. **") +
      "\n\n" +
      chalk.hex("#FF8C00")("Press ") +
      chalk.green("Enter ") +
      chalk.hex("#FF8C00")(" to continue.") +
      "\n"
  );

  readLine.question("Press Enter to continue...", (input) => {
    //.clear(); // Optional: clear previous prompt if needed
    if (input === "") {
      console.log("You are entered to the program..");
    } else {
      console.log("\nYou are not entered to the program..");
    }
    readLine.close();
  });
}
