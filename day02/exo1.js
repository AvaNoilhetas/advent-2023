const fs = require("fs");

const data = fs.readFileSync("./day02/input.txt", {
  encoding: "utf8",
  flag: "r",
});

const lines = data.split("\n");
let games = [];
const colorRules = [
  [12, "red"],
  [13, "green"],
  [14, "blue"],
];

lines.forEach((line, index) => {
  line = line.split(": ").pop().split("; ");
  games.push(index + 1);

  line.forEach((game) => {
    game = game.split(", ");

    game.forEach((color) => {
      color = color.split(" ");

      colorRules.forEach((colorRules) => {
        if (colorRules[1] === color[1] && colorRules[0] < parseInt(color[0])) {
          games = games.filter((line) => line !== index + 1);
        }
      });
    });
  });
});

const result = games.reduce((a, c) => {
  return a + c;
});

console.log(result);
