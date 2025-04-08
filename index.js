import { baseAnimation } from "./Animations/base-animation.js";
import { subAnimationDevelopedBy } from "./Animations/base-animation.js";
import { basicLine } from "./Animations/base-animation.js";
import { showLoadingAnimation } from "./Animations/loading-animation.js";
import showProgressBar from "./Animations/pogress-bar.js";
import { helpInstructions } from "./instructions/help-instructions.js";

async function runAnimations() {
  // Loading animation loading process
  // Baisc word "SIMPLE MATH" animation
  baseAnimation();
  await showLoadingAnimation(); // wait for sec

  // Developed by animation
  subAnimationDevelopedBy();
  await showLoadingAnimation(); // wait for sec
  
  // Basic line animation
  basicLine();
  console.log("");
  showProgressBar();

  // Wait for 3 seconds before showing the help instructions
  setTimeout(() => {
    console.log("");
    helpInstructions();
  }, 3800); // Adjust the timeout as needed
}

runAnimations();
