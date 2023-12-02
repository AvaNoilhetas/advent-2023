const fs = require("fs");

const data = fs.readFileSync("./day02/input2.txt", {
  encoding: "utf8",
  flag: "r",
});

const lines = data.split("\n");
let result = 0;

lines.forEach((line, index) => {
  line = line.split(": ").pop().split("; ");

  const colorResults = [
    [0, "red"],
    [0, "green"],
    [0, "blue"],
  ];

  line.forEach((game) => {
    game = game.split(", ");

    game.forEach((color) => {
      color = color.split(" ");

      colorResults.forEach((colorResult, colorIndex) => {
        if (color[1] === colorResult[1]) {
          if (colorResults[colorIndex][0] < parseInt(color[0])) {
            colorResults[colorIndex][0] = parseInt(color[0]);
          }
        }
      });
    });
  });

  lineScore = colorResults.reduce((a, c) => {
    return parseInt(a) * parseInt(c[0]);
  });
  result += lineScore;
});

console.log(result);
