let data = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;

const matchingDigit = [
  ["one", 1],
  ["two", 2],
  ["three", 3],
  ["four", 4],
  ["five", 5],
  ["six", 6],
  ["seven", 7],
  ["eight", 8],
  ["nine", 9],
];

const lines = data.split("\n");
let result = 0;
let sentenceWithDigit;
let arr = [];

matchingDigit.filter((matchingData) => {
  sentenceWithDigit = data.replaceAll(matchingData[0], matchingData[1]);
  data = sentenceWithDigit;
});

console.log(sentenceWithDigit);
