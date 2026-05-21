const a1 = "사과";
const a2 = "배";
const a3 = "귤";

console.log(a1, a2, a3);

const fruits = ["사과", "배", "귤"];
console.log(fruits);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits[0] = "포도";
console.log(fruits);
console.log(fruits[0]);
console.log(fruits.length);

const o = {
  키: "밸류",
  true: "123",
  hello: "hello",
  안녕: "안녕",
  1: 100,
  "1 1": "12345",
};

console.log(o.키);
console.log(o.true);
console.log(o.hello);
// 값을 넣었다 (공백이 포함)

console.log(o[1]);
console.log(o["1 1"]);

const arrr = [];
arrr.안녕 = "값";
console.log(arrr, arrr.안녕);

arrr[1.5] = "값2";
console.log(arrr, arrr[1.5]);

arrr[1] = "값3";
console.log(arrr, arrr[1]);

arrr.length = 0;
console.log(arrr, arrr.length);
