// Day 7. ES6+ 문법
// 오늘의 목표

// 오늘 학습이 끝나면 다음을 할 수 있습니다.

// Template Literal을 사용할 수 있다.
// Spread 문법을 사용할 수 있다.
// Rest Parameter를 사용할 수 있다.
// 구조 분해 할당을 사용할 수 있다.
// 기본 매개변수를 사용할 수 있다.
// Optional Chaining을 사용할 수 있다.
// Nullish Coalescing(??)을 사용할 수 있다.
// 모듈(import, export)을 이해한다.
/*----------------------------------------------------------------------------------------------------*/
// 1. ES6란?
// ES6(ECMAScript 2015)는 JavaScript의 대규모 업데이트입니다.
// Vue3에서는 ES6 문법을 기본으로 사용합니다.
// 대표적인 기능
const ES6s = [
    {name:"let"},
    {name:"const"},
    {name:"Arrow Function"},
    {name:"Template Literal"},
    {name:"Spread"},
    {name:"Destructuring"},
    {name:"import"},
    {name:"export"},
    {name:"Optional Chaining"}
];
for(const ES6 of ES6s){
    console.log(ES6.name);
}
/*----------------------------------------------------------------------------------------------------*/
// 2. Template Literal
// 기존 방식
const name = "홍길동";
console.log("안녕하세요 " + name + "님");
// ES6
const name1 = "조진상";
console.log(`안녕하세요 ${name1}님`);
// 출력
// 안녕하세요 홍길동님
// 여러 줄 문자열도 가능합니다.
const text = `
안녕하세요.
반갑습니다.
`;
console.log(`${text}`);
/*----------------------------------------------------------------------------------------------------*/
// 3. Spread(...)
// 배열 복사
const arr1 = [1,2,3];
const arr2 = [...arr1];
console.log(arr1);
console.log(arr2);
// 출력
// [1,2,3]
// 배열 합치기
const arr3 = [1,2];
const arr4 = [3,4];
const result = [...arr3,...arr4];
console.log(result);
// 출력
// [1,2,3,4]
// 객체 복사
const user = {
    name:"홍길동",
    age:20
};
const newUser = {
    ...user
};
console.log(newUser);
// 객체 추가
const newUser1 = {
    ...user,
    city:"서울"
};
console.log(newUser1);
/*----------------------------------------------------------------------------------------------------*/
// 4. Rest Parameter(...)
// 여러 개의 인수를 하나의 배열로 받습니다.
function sum(...numbers){
    console.log(numbers);
}
sum(1,2,3,4,5);
console.log(sum(1,2,3,4,5));
// 출력
// [1,2,3,4,5]
// 합계
function sum1(...numbers){
    return numbers.reduce(
        (sum,num)=>sum+num,
        0
   );
}
console.log(sum1(1,2,3,4,5));
// 출력
// 15
/*----------------------------------------------------------------------------------------------------*/
// 5. 구조 분해 할당
// 배열
const colors = [
    "빨강",
    "파랑",
    "초록"
];
const [first, second] = colors;
console.log(first);
console.log(second);
// 출력
// 빨강
// 파랑
// 객체
const user1 = {
    name2:"홍길동",
    age:20
};
const {name2, age} = user1;
console.log(name2);
console.log(age);
// 이름 변경
const {
    name:userName,
    age:userAge
} = user1;
console.log(user1);
/*----------------------------------------------------------------------------------------------------*/
// 6. 기본 매개변수
function hello(name="손님"){
    console.log(`안녕하세요 ${name}`);
}
hello();
hello("홍길동");
/*----------------------------------------------------------------------------------------------------*/
// 7. Optional Chaining
// 객체가 없을 수도 있을 때
const user2 = null;
console.log(user2?.name);
// 출력 undefined
// 오류가 발생하지 않습니다.
// 객체 안의 객체
const student2 = {
    address:{
        city:"서울"
    }
};
console.log(student2.address?.city);
/*----------------------------------------------------------------------------------------------------*/
// 8. Nullish Coalescing(??)
// 값이
// null, undefined
// 이면 기본값 사용
const name3 = null;
const name4 = undefined;
console.log(name3 ?? "손님");
console.log(name4 ?? "쥐꼬리");
// 출력
// 손님
// 비교
const score = 0;
console.log(score || 100);
// 출력
// 100
// 하지만
console.log(score ?? 100);
// 출력
// 0
// 0은 정상적인 값이기 때문입니다.
/*----------------------------------------------------------------------------------------------------*/
// 9. import / export
// 파일
// math.js
// export function add(a,b){
//     return a+b;
// }
// 사용
import { add } from "./math.js";
console.log(add(10,20));
// 기본 내보내기
// export default function hello(){}
// 사용
import hello1 from "./hello.js";
hello1();
/*----------------------------------------------------------------------------------------------------*/
// 10. 객체 속성 축약
// 기존
const name5 = "홍길동";
const age4 = 20;
const user4 = {
    name:name5,
    age:age4
};
console.log(user4.name, user4.age);
// ES6
const user5 = {
    name5,
    age4
};
console.log(user5);
/*----------------------------------------------------------------------------------------------------*/
// 11. 화살표 함수 복습
const add3 = (a,b)=>a+b;
console.log(add3(10,20));
/*----------------------------------------------------------------------------------------------------*/