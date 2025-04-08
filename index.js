import { baseAnimation } from "./Animations/base-animation.js";
import { subAnimationDevelopedBy } from "./Animations/base-animation.js";
import { basicLine } from "./Animations/base-animation.js";
import { showLoadingAnimation } from "./Animations/loading-animation.js";
import showProgressBar from "./Animations/pogress-bar.js";


baseAnimation();
await showLoadingAnimation();
subAnimationDevelopedBy();
await showLoadingAnimation();
basicLine();
console.log("");
showProgressBar();