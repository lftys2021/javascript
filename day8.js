// Day 8. 비동기(Asynchronous JavaScript)
// 오늘의 목표
// 오늘 학습이 끝나면 다음을 할 수 있습니다.
// 동기와 비동기의 차이를 이해한다.
// setTimeout()을 사용할 수 있다.
// Promise를 이해한다.
// then(), catch()를 사용할 수 있다.
// async / await를 사용할 수 있다.
// try / catch를 사용할 수 있다.
// fetch()로 API를 호출할 수 있다.
/*----------------------------------------------------------------------------------------------------*/
// 1. 동기(Synchronous)
// 코드가 순서대로 실행됩니다.
console.log("1");
console.log("2");
console.log("3");
// 출력
// 1
// 2
// 3
/*----------------------------------------------------------------------------------------------------*/
// 2. 비동기(Asynchronous)
// 오래 걸리는 작업은 기다리지 않습니다.
console.log("시작");
setTimeout(() => {
    console.log("3초 후");
}, 3000);
console.log("끝");
// 출력
// 시작
// 끝
// 3초 후
// 왜일까요?
// JavaScript는
// 시작 출력
// ↓
// 3초 기다리는 작업 예약
// ↓
// 다음 코드 실행
// ↓
// 끝 출력
// ↓
// 3초 후 실행
// 하기 때문입니다.
/*----------------------------------------------------------------------------------------------------*/
// 3. setTimeout()
// 기본 형태
setTimeout(() => {
    console.log("Hello");
}, 2000);
// 2초 후
// Hello
/*----------------------------------------------------------------------------------------------------*/
// 4. Promise
// 비동기 작업의 결과를 나타내는 객체입니다.
const promise = new Promise((resolve, reject) => {
    resolve("성공");
});
// 성공
const promise1 = new Promise((resolve, reject) => {
    resolve("로그인 성공");
});
promise1.then(result => {
    console.log(result);
});
// 출력
// 로그인 성공
// 실패
const promise2 = new Promise((resolve, reject) => {
    reject("로그인 실패");
});
promise2.catch(error => {
    console.log(error);
});
// 출력
// 로그인 실패
/*----------------------------------------------------------------------------------------------------*/
// 5. then()
function test(){
    return Promise.resolve("Hello");
}
test().then(result => {
    console.log(result);
});
/*----------------------------------------------------------------------------------------------------*/
// 6. async / await
// 실무에서는 가장 많이 사용하는 방식입니다.
async function hello(){
    return "Hello";
}
hello().then(console.log);
// await
async function test(){
    const result = await Promise.resolve("성공");
    console.log(result);
}
test();
// 출력
// 성공
/*----------------------------------------------------------------------------------------------------*/
// 7. try / catch
// 오류 처리
async function login(){
    try{
        throw new Error("로그인 실패");
    }catch(error){
        console.log(error.message);
    }
}
login();
// 출력
// 로그인 실패
/*----------------------------------------------------------------------------------------------------*/
// 8. fetch()
// 웹 서버 호출
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => console.log(data));
// async 방식
async function getUsers(){
    const response =
        await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
    const data =
        await response.json();
    console.log(data);
}
getUsers();
// 이 방법이 Vue에서 가장 많이 사용됩니다.
/*----------------------------------------------------------------------------------------------------*/
// 9. Promise 흐름
// 비동기 시작
// ↓
// Promise 생성
// ↓
// 성공(resolve)
//         ↓
//       then()
// 실패(reject)
//         ↓
//   catch()
/*----------------------------------------------------------------------------------------------------*/
// 10. async / await 흐름
// async 함수 시작
// ↓
// await
// ↓
// 작업 끝날 때까지 기다림
// ↓
// 결과 반환
// ↓
// 다음 코드 실행
/*----------------------------------------------------------------------------------------------------*/
