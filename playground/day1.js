const arg = `a1bc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

let splitArg = arg.split(/\r?\n|\r|\n/g);
let arr = [];

splitArg.forEach((element, index) => {
  arr.push([]);
  element.split("").every((letter) => {
    for (let i = 0; i < 10; i++) {
      if (parseInt(letter) === i) {
        arr[index].push(i);
        return false;
      }
    }
    return true;
  });

  element
    .split("")
    .reverse()
    .join("")
    .split("")
    .every((letter) => {
      for (let i = 0; i < 10; i++) {
        if (parseInt(letter) === i) {
          arr[index][0] = parseInt(arr[index] + letter);
          return false;
        }
      }
      return true;
    });
});

let flattenArr = arr.reduce((elem1, elem2) => elem1.concat(elem2));
const result = flattenArr.reduce((elem1, elem2) => elem1 + elem2);

console.log(result);
