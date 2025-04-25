import chalk from "chalk";
import readline from "readline";
import { Writable } from "stream";
import { checkOperations } from "../conditions/how-many-questions.js";

const mutableStdout = new Writable({
  write(chunk, encoding, callback) {
    callback();
  },
});

export function helpInstructions() {
  const readLine = readline.createInterface({
    input: process.stdin,
    output: mutableStdout,
  });

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
    if (input === "") {
      readLine.close();
      checkOperations();
    } else {
      console.clear();
      readLine.close();
      console.log(
        "\nWrong input. Please read the instructions correctly and try again...\n"
      );
      helpInstructions();
    }
  });
}
