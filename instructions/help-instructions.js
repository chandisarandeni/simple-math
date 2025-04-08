import chalk from "chalk";

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
      chalk.red("You can only select one option at a time.") +
      "\n\n" +
      chalk.hex("#FF8C00")("Press ") +
      chalk.green("Enter ") +
      chalk.hex("#FF8C00")(" to continue.")
  );
}
