/*----------------------------------------------------------------------------------------------------*/
// 과제 1. 사용자 조회
// GET 요청을 보내
// https://jsonplaceholder.typicode.com/users
// 사용자 이름만 출력하세요.
setTimeout(() => {
    console.log("-----------------------");
    console.log("과제 1. 사용자 조회");
    console.log("-----------------------");
}, 1000);
async function getUsers() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );
    const users = await response.json();
    users.forEach(user=>{
        console.log(user.name);
    });
    console.log(users);
}
setTimeout(() => {
    getUsers();
}, 2000);
/*----------------------------------------------------------------------------------------------------*/
// 과제 2. 게시글 조회
// GET
// https://jsonplaceholder.typicode.com/posts
// 처음 5개 제목만 출력하세요.
// 힌트
// posts.slice(0,5)
setTimeout(() => {
    console.log("-----------------------");
    console.log("과제 2. 게시글 조회");
    console.log("-----------------------");
}, 3000);
async function getBoard(){
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
    );
    const posts = await response.json();
    const firstFive = posts.slice(0, 5);
    console.log(firstFive);
}
setTimeout(() => {
    getBoard();
}, 4000);
/*----------------------------------------------------------------------------------------------------*/
// 과제 3. 게시글 생성
// POST 요청
// title:"Vue"
// body:"공부"
// userId:1
// 를 생성하세요.
setTimeout(() => {
    console.log("-----------------------");
    console.log("과제 3. 게시글 생성");
    console.log("-----------------------");
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
// 과제 4. 게시글 수정
// PUT 요청으로
// 게시글 1번의 제목을
// Vue 수정 완료
// 로 변경하세요.
setTimeout(() => {
    console.log("-----------------------");
    console.log("과제 4. 게시글 수정");
    console.log("-----------------------");
}, 7000);
async function updatePost() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1",
        {
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                id:1,
                title:"Vue 수정 완료",
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
// 과제 5. 게시글 삭제
// DELETE 요청으로
// 1번 게시글을 삭제하세요.
// 출력
// 200
// 또는
// 204
setTimeout(() => {
    console.log("-----------------------");
    console.log("과제 5. 게시글 삭제");
    console.log("-----------------------");
}, 9000);
async function deletePost() {
    const response = await fetch(
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
/*----------------------------------------------------------------------------------------------------*/
// 과제 6. 상태 코드 확인
// 아무 GET 요청이나 보내고
// response.status
// 를 출력하세요.
setTimeout(() => {
    console.log("-----------------------");
    console.log("과제 6. 상태 코드 확인");
    console.log("-----------------------");
}, 11000);
async function getPost() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/2"
    );
    console.log(response.status);
}
setTimeout(() => {
    getPost();
}, 12000);
/*----------------------------------------------------------------------------------------------------*/
// 과제 7. response.ok
// 성공이면
// 성공
// 실패면
// 실패
// 를 출력하세요.
setTimeout(() => {
    console.log("-----------------------");
    console.log("과제 7. response.ok");
    console.log("-----------------------");
}, 13000);
async function getUsers_1() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );
    if(response.ok){
        console.log("성공");
    } else {
        console.log("실패");
    }
}
setTimeout(() => {
    getUsers_1();
}, 14000);
/*----------------------------------------------------------------------------------------------------*/
// 과제 8. JSON.stringify()
// const user = {
//     name:"홍길동",
//     age:20
// };
// JSON 문자열로 변환하여 출력하세요.
setTimeout(() => {
    console.log("-----------------------");
    console.log("과제 8. JSON.stringify()");
    console.log("-----------------------");
}, 15000);
const user = {
    name:"홍길동",
    age:20
};
setTimeout(() => {
    console.log(
        JSON.stringify(user)
    );
}, 16000);
/*----------------------------------------------------------------------------------------------------*/
// 과제 9. JSON.parse()
// const json =
// '{"name":"홍길동","age":20}';
// 객체로 변환하여
// 홍길동
// 20
// 을 출력하세요.
setTimeout(() => {
    console.log("-----------------------");
    console.log("과제 9. JSON.parse()");
    console.log("-----------------------");
}, 17000);
const json = '{"name":"홍길동","age":20}';
setTimeout(() => {
    const user = JSON.parse(json);
    console.log(user.name);
    console.log(user.age);
}, 18000);
/*----------------------------------------------------------------------------------------------------*/