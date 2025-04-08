import figlet from "figlet";

export function baseAnimation() {
  // Print text in ASCII art with a specific font
  figlet.text("SIMPLE MATH", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });
}

export function subAnimationDevelopedBy() {
  // Print text in ASCII art with a specific font
  figlet.text(
    "DEVELOPED BY innozoft.lk",
    { font: "small" },
    function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(data);
    }
  );
}

export function basicLine() {
  // Print text in ASCII art with a specific font
  figlet.text(
    "________________________",
    { font: "small" },
    function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(data);
    } 
  );
}
