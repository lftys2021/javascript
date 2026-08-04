// Day 9. Fetch API
// 오늘의 목표

// 오늘 학습이 끝나면 다음을 할 수 있습니다.

// HTTP 요청을 이해한다.
// GET 요청을 보낼 수 있다.
// POST 요청을 보낼 수 있다.
// PUT 요청을 보낼 수 있다.
// DELETE 요청을 보낼 수 있다.
// 요청 헤더(Header)를 사용할 수 있다.
// JSON 데이터를 주고받을 수 있다.
// 응답 상태(Status)를 확인할 수 있다.
/*----------------------------------------------------------------------------------------------------*/
// 1. Fetch API란?
console.log("1. Fetch API란?");
// Fetch API는 웹 서버와 데이터를 주고받기 위한 JavaScript 내장 기능입니다.
// 예를 들어, 로그인, 회원가입, 게시글 조회, 게시글 작성, 댓글 삭제
// 모두 Fetch API를 사용합니다.
/*----------------------------------------------------------------------------------------------------*/
// 2. HTTP 요청 방식
setTimeout(() => {
    console.log("2. HTTP 요청 방식");
}, 1000);
// Method	의미
// GET	데이터 조회
// POST	데이터 생성
// PUT	데이터 수정
// PATCH	일부 수정
// DELETE	데이터 삭제
// REST API에서는 이 다섯 가지를 가장 많이 사용합니다.
/*----------------------------------------------------------------------------------------------------*/
// 3. GET 요청
// 데이터 조회
setTimeout(() => {
    console.log("3. GET 요청");
}, 2000);
async function getUsers() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );
    const data = await response.json();
    console.log(data);
}
setTimeout(() => {
    getUsers();
}, 3000);
// 사용자 이름만 출력
async function getUsers() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );
    const users = await response.json();
    users.forEach(user=>{
        console.log(user.name);
    });
}
setTimeout(() => {
    getUsers();
}, 4000);
/*----------------------------------------------------------------------------------------------------*/
// 4. POST 요청
// 데이터 생성
setTimeout(() => {
    console.log("4. POST 요청");
}, 5000);
async function createPost(){
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                title:"Vue",
                body:"공부 중",
                userId:1
            })
        }
    );
    const data = await response.json();
    console.log(data);
}
setTimeout(() => {
    createPost();
}, 6000);
/*----------------------------------------------------------------------------------------------------*/
// 5. PUT 요청
// 전체 수정
setTimeout(() => {
    console.log("5. PUT 요청");
}, 7000);
async function updatePost(){
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1",
        {
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                id:1,
                title:"수정 완료",
                body:"내용 수정",
                userId:1
            })
        }
    );
    const data =
        await response.json();
    console.log(data);
}
setTimeout(() => {
    updatePost();
}, 8000);
/*----------------------------------------------------------------------------------------------------*/
// 6. DELETE 요청
setTimeout(() => {
    console.log("6. DELETE 요청");
}, 9000);
async function deletePost(){
    const response =
        await fetch(
            "https://jsonplaceholder.typicode.com/posts/1",
            {
                method:"DELETE"
            }
        );
    console.log(response.status);
}
setTimeout(() => {
    deletePost();
}, 10000);
// 출력 200
/*----------------------------------------------------------------------------------------------------*/
// 7. Header
setTimeout(() => {
    console.log("7. Header");
}, 11000);
// headers:{
//     "Content-Type":"application/json"
// }
// 의미
// 나는 JSON 데이터를 보낼 거야.
// 실무에서는
// headers:{
//     "Authorization":"Bearer 토큰",
//     "Content-Type":"application/json"
// }
// 도 많이 사용합니다.
/*----------------------------------------------------------------------------------------------------*/
// 8. JSON.stringify()
// 객체 → JSON 문자열
setTimeout(() => {
    console.log("8. JSON.stringify()");
}, 12000);
const user = {
    name:"홍길동",
    age:20
};
setTimeout(() => {
    console.log(
        JSON.stringify(user)
    );
}, 13000);
//  출력
//  {"name":"홍길동","age":20}
/*----------------------------------------------------------------------------------------------------*/
// 9. response.json()
// JSON → 객체
setTimeout(() => {
    console.log("9. response.json()");
}, 14000);
async function getUsers_1(){
    const response =
        await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
    
    const users =
        await response.json();
    console.log(users);
    console.log("10. 상태 코드(Status Code)");
    console.log(response.status);
    console.log("11. 응답 확인");
    if(response.ok){
        console.log("성공");
    }else{
        throw new Error("조회 실패");
    }
}
setTimeout(() => {
    getUsers_1();
}, 15000);
/*----------------------------------------------------------------------------------------------------*/
// 10. 상태 코드(Status Code)
// console.log(response.status);
// 대표적인 상태 코드
// 코드 | 의미
// ------------
// 200 | 성공
// 201 | 생성 성공
// 204 | 삭제 성공(본문 없음)
// 400 | 잘못된 요청
// 401 | 인증 실패
// 403 | 권한 없음
// 404 | 찾을 수 없음
// 500 | 서버 오류
/*----------------------------------------------------------------------------------------------------*/
// 11. 응답 확인
// if(response.ok){
//     console.log("성공");
// }else{
//     console.log("실패");
// }
/*----------------------------------------------------------------------------------------------------*/
//12. 오류 처리
setTimeout(() => {
    console.log("12. 오류 처리");
}, 16000);
async function getUsers_2(){
    try{
        const response =
        await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        if(!response.ok){
            throw new Error("실패");
        }
        const users =
        await response.json();
        console.log(users);

    }
    catch(error){
        console.log(error.message);
    }
}
setTimeout(() => {
    getUsers_2();
}, 17000);
/*----------------------------------------------------------------------------------------------------*/