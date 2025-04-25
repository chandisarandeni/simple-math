import readline from "readline";

function generateRandomQuestion() {
  const num1 = Math.floor(Math.random() * 20) + 1;
  const num2 = Math.floor(Math.random() * 19) + 2; // Avoid num2 being 1
  const operators = ["+", "-", "*", "/"];
  const operator = operators[Math.floor(Math.random() * operators.length)];

  let question, answer;
  switch (operator) {
    case "+":
      question = `${num1} + ${num2}`;
      answer = num1 + num2;
      break;
    case "-":
      question = `${num1} - ${num2}`;
      answer = num1 - num2;
      break;
    case "*":
      question = `${num1} * ${num2}`;
      answer = num1 * num2;
      break;
    case "/":
      const dividend = num1 * num2; // ensure whole number
      question = `${dividend} / ${num2}`;
      answer = dividend / num2;
      break;
  }

  return { question, answer };
}

export function checkOperations() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("How many math questions do you want to answer? ", (input) => {
    const count = parseInt(input);
    if (!isNaN(count) && count > 0) {
      rl.close(); // Close after the input
      askQuestions(count); // Call askQuestions with the valid count
    } else {
      console.log("Please enter a valid number greater than 0.");
      rl.close(); // Close readline and prompt again
      checkOperations(); // Recursively call to ask the number again
    }
  });
}

export function askQuestions(count) {
  let score = 0;
  let index = 0;

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function askNext() {
    if (index < count) {
      const { question, answer } = generateRandomQuestion();
      rl.question(`Q${index + 1}: ${question} = `, (input) => {
        const userAnswer = parseFloat(input);
        if (isNaN(userAnswer)) {
          console.log("Please enter a valid number.\n");
          askNext(); // Ask the question again if input is invalid
        } else if (userAnswer === answer) {
          console.log("Correct!\n");
          score++;
        } else {
          console.log(`Wrong! Correct answer is: ${answer}\n`);
        }
        index++;
        askNext();
      });
    } else {
      rl.close();
      console.log(`\nYour final score: ${score} out of ${count}`);
    }
  }

  askNext();
}
