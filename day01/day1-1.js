const data = `a1bc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

const lines = data.split("\n");
let result = 0;
let arr = [];

lines.forEach((element, index) => {
  arr.push([]);

  element.split("").forEach((letter, i) => {
    for (let i = 0; i < 10; i++) {
      if (parseInt(letter) === i) {
        arr[index].push(i);
      }
    }
  });
});

arr.foreach((element) => {
  const number = `${element[0]}${element[element.length - 1]}`;
  result += parseInt(number);
});

console.log(result);
