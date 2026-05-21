console.log(30 + 7);
console.log(30 - 7);
console.log(30 * 7);
console.log(30 / 7);
console.log(30 % 7);
console.log(30 - 5 * 3);
console.log((30 - 5) * 3);

let a = 0;
a = a + 5;
a += 10;

console.log(1 + "1"); // 11
console.log(1 + "1" * 2); // 2
//문자랑 숫자가 만나면 둘중 하나가 형변환함 -> +는 문자열 연산이 있으니 숫자가 문자열로 바뀜
console.log(2 * "2");
//+를 제외한 나머지 연산들은 문자열 연산이 없으므로 숫자로 자동 변환
console.log(1 == "1"); // 1 -> "1" == "1"
console.log(1 === "1");
console.log(1 !== "1");

console.log(0 == "0"); // true
console.log("" == 0); // true
console.log("" == "0"); // false

let x = 1;
x++;
console.log(x);
x--;
console.log(x);

console.log(x++); // 1이나옴
// x++ => 이게 호출되고나서 대입
// x를 먼저 호출하고 나서 대입

console.log(++x); // 3이나옴

console.log("|| 전", x);
true || x++;
console.log("|| 후", x);

console.log("|| 전", x);
false || x++;
console.log("|| 후", x);

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
console.log("&& 전", x);
true && x++;
console.log("&& 후", x);

console.log("&& 전", x);
false && x++;
console.log("&& 후", x);
