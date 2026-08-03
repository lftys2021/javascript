/*----------------------------------------------------------------------------------------------------*/
// 과제 1. 2초 후 출력
// 2초 후
// 안녕하세요
// 를 출력하세요.
// setTimeout()을 사용합니다.
setTimeout(() => {   
    console.log("안녕하세요");
}, 2000);
console.log("2초 후");
/*----------------------------------------------------------------------------------------------------*/
// 과제 2. Promise 성공
// Promise를 만들어
// 회원가입 성공
// 을 출력하세요.
const promise = new Promise((resolve, reject) => {
    resolve("회원가입 성공");
});
promise.then(result => {
    console.log(result);
});
/*----------------------------------------------------------------------------------------------------*/
// 과제 3. Promise 실패
// Promise를 만들어
// 회원가입 실패
// 를 출력하세요.
const promise2 = new Promise((resolve, reject) => {
    reject("회원가입 실패");
});
promise2.catch(error => {
    console.log(error);
});
/*----------------------------------------------------------------------------------------------------*/
// 과제 4. async 함수
// async function hello(){
// }
// 호출했을 때
// Hello Vue
// 를 출력하세요.
async function hello(){
    return "Hello Vue";
}
hello().then(console.log);
/*----------------------------------------------------------------------------------------------------*/
// 과제 5. await 사용
// async function test(){
// }
// 안에서
// await Promise.resolve(100);
// 을 사용하여
// 100
// 을 출력하세요.
async function test(){
    const result = await Promise.resolve(100);
    console.log(result);
}
test();
/*----------------------------------------------------------------------------------------------------*/
// 과제 6. try / catch
// 의도적으로
// throw new Error("오류 발생");
// 을 발생시키고
// 출력
// 오류 발생
// 을 출력하세요.
async function login(){
    try{
        throw new Error("오류 발생");
    }catch(error){
        console.log(error.message);
    }
}
login();
/*----------------------------------------------------------------------------------------------------*/
// 과제 7. fetch()
// 다음 API를 호출하세요.
// https://jsonplaceholder.typicode.com/users
// 사용자 이름만 출력하세요.
// 힌트
// data.forEach(user => {
//     console.log(user.name);
// });
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    data.forEach(user => {
        console.log(user.name);
    })
});
/*----------------------------------------------------------------------------------------------------*/
// 과제 8. fetch + async
// async / await로 위 API를 다시 작성하세요.
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
/*----------------------------------------------------------------------------------------------------*/
