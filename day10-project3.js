// Day 10. 미니 프로젝트
/*----------------------------------------------------------------------------------------------------*/
// 프로젝트 3. 게시판(Board)
// 목표
// 게시글을 관리하는 게시판 프로그램을 만들어 봅니다.
// 사용 문법
// 배열(Array)
// 객체(Object)
// 함수(Function)
// 반복문
// filter()
// find()
// map()
// reduce()
// sort()
// JSON
// fetch()
/*----------------------------------------------------------------------------------------------------*/
// 사용할 데이터
let boards = [
    {
        id: 1,
        title: "JavaScript 공부",
        writer: "홍길동",
        content: "배열을 공부했습니다.",
        views: 15
    },
    {
        id: 2,
        title: "Vue 시작",
        writer: "김철수",
        content: "Vue를 설치했습니다.",
        views: 8
    },
    {
        id: 3,
        title: "TypeScript",
        writer: "이영희",
        content: "타입을 공부했습니다.",
        views: 23
    }
];
/*----------------------------------------------------------------------------------------------------*/
// Step 1. 게시글 목록 출력
// 출력
// ===== 게시글 목록 =====
// 1 | JavaScript 공부 | 홍길동 | 조회수 15
// 2 | Vue 시작 | 김철수 | 조회수 8
// 3 | TypeScript | 이영희 | 조회수 23
// 힌트
// forEach()
console.log("Step 1. 게시글 목록 출력");
console.log("===== boards List =====");
boards.forEach(board => {
    console.log(`${board.id} | ${board.title} | ${board.writer} | 조회수 ${board.views}`);
});
/*----------------------------------------------------------------------------------------------------*/
// Step 2. 게시글 추가
// addBoard(
//     "React",
//     "박민수",
//     "React 공부 중"
// );
// 출력
// 게시글 등록 완료
// 힌트
// push()
console.log("Step 2. 게시글 추가");
const addBoard = (title, writer, content) => {
    const newBoard = {
        id: boards.length + 1,
        title: title,
        writer: writer,
        content: content,
        views: 0
    };
    boards.push(newBoard);
    console.log("게시글 등록 완료");
};
addBoard("React", "박민수", "React 공부 중");
console.log("===== boards List =====");
boards.forEach(board => {
    console.log(`${board.id} | ${board.title} | ${board.writer} | 조회수 ${board.views}`);
});
/*----------------------------------------------------------------------------------------------------*/
// Step 3. 게시글 조회
// readBoard(2);
// 출력
// 제목 : Vue 시작
// 작성자 : 김철수
// 내용 : Vue를 설치했습니다.
// 조회수 : 9
// 조회하면
// views++
// 가 되어야 합니다.
console.log("Step 3. 게시글 조회");
const readBoard = (id) => {
    const board = boards.find(board => board.id === id);
    if (board) {
        board.views++;   // 조회수 증가
        console.log(`제목 : ${board.title} \n작성자 : ${board.writer} \n내용 : ${board.content} \n조회수 : ${board.views}`);
    } else {
        console.log("게시글이 없습니다.");
    }
};
readBoard(2)
/*----------------------------------------------------------------------------------------------------*/
// Step 4. 게시글 수정
// updateBoard(
//     2,
//     "Vue 3 시작",
//     "Vue3를 공부합니다."
// );
// 출력
// 수정 완료
console.log("Step 4. 게시글 수정");
const updateBoard = (id, title, content) => {
    const board = boards.find(board => board.id === id);

    if (board) {
        board.title = title;
        board.content = content;
        console.log("수정 완료");
    } else {
        console.log("게시글이 없습니다.");
    }
};
updateBoard(2, "Vue 3 시작", "Vue3를 공부합니다.");
console.log("===== boards List =====");
boards.forEach(board => {
    console.log(`${board.id} | ${board.title} | ${board.writer} | ${board.content} | 조회수 ${board.views} `);
});
/*----------------------------------------------------------------------------------------------------*/
// Step 5. 게시글 삭제
// deleteBoard(3);
// 출력
// 삭제 완료
// 힌트
// filter()
// console.log("Step 5. 게시글 삭제");
// const deleteBoard = (id) => {
//     const board = boards.find(board => board.id === id);
//     if (board) {
//         boards = boards.filter(t => t.id !== id);
//         console.log(`삭제 완료`);
//     }
// };
// deleteBoard(2);
// console.log("===== boards List =====");
// boards.forEach(board => {
//     console.log(`${board.id} | ${board.title} | ${board.writer} | ${board.content} | 조회수 ${board.views} `);
// });
/*----------------------------------------------------------------------------------------------------*/
// Step 6. 제목 검색
// searchTitle("Vue");
// 출력
// Vue 시작
// 힌트
// includes()
console.log("Step 6. 제목 검색");
const searchTitle = (str) => {
    const board = boards.find(board =>
        board.title.includes(str)
    );
    console.log(board.title);
};
searchTitle("Vue");
/*----------------------------------------------------------------------------------------------------*/
// Step 7. 작성자 검색
// searchWriter("홍길동");
// 출력
// JavaScript 공부
console.log("Step 7. 작성자 검색");
const searchWriter = (str) => {
    const board = boards.find(board =>
        board.writer.includes(str)
    );
    console.log(board.title);
};
searchWriter("홍길동");
/*----------------------------------------------------------------------------------------------------*/
// Step 8. 조회수 높은 순 정렬
// 출력
// TypeScript
// JavaScript 공부
// Vue 시작
// 힌트
// sort()
console.log("Step 8. 조회수 높은 순 정렬");
const sortResult = boards.sort(
    (a, b) => b.views - a.views
);
sortResult.forEach(board => {
    console.log(board.title);
});
/*----------------------------------------------------------------------------------------------------*/
// Step 9. 게시글 개수
// 출력
// 전체 게시글 : 3
// 힌트
// length
console.log("Step 9. 게시글 개수");
console.log("전체 게시글 : " + boards.length);
/*----------------------------------------------------------------------------------------------------*/
// Step 10. 총 조회수
// 출력
// 46
// 힌트
// reduce()
console.log("Step 10. 총 조회수");
const sum = boards.reduce((sum,board)=>sum+board.views, 0);
console.log(sum);
/*----------------------------------------------------------------------------------------------------*/
// Step 11. 평균 조회수
// 출력
// 15.3
// 힌트
// reduce()
console.log("Step 11. 평균 조회수");
const avg = boards.reduce((sum,board)=>sum+board.views, 0)/boards.length;
console.log(avg);
/*----------------------------------------------------------------------------------------------------*/
// Step 12. 가장 조회수가 높은 게시글
// 출력
// TypeScript
// 23
// 힌트
// reduce()
console.log("Step 12. 가장 조회수가 높은 게시글");
const top = boards.reduce((best, board) => {
    if (board.views > best.views) {
        return board;
    } else {
        return best;
    }
});
console.log(top.title);
console.log(top.views);
/*----------------------------------------------------------------------------------------------------*/
// Step 13. 작성자 목록
// 출력
// [
//     "홍길동",
//     "김철수",
//     "이영희"
// ]
// 힌트
// map()
console.log("Step 13. 작성자 목록");
const nameOnly = boards.filter(boards => boards);
console.log(nameOnly.map(board => board.writer));
/*----------------------------------------------------------------------------------------------------*/
// Step 14. JSON 변환
console.log("Step 14. JSON 변환");
console.log(
    JSON.stringify(boards)
);
console.log(typeof JSON);
/*----------------------------------------------------------------------------------------------------*/
// Step 15. JSON 복원
console.log("Step 15. JSON 복원");
const json = JSON.stringify(boards);
const result = JSON.parse(json);
console.log(result);
console.log(typeof json);
/*----------------------------------------------------------------------------------------------------*/
// Step 16. API 게시글 조회
console.log("Step 16. API 게시글 조회");
async function getPosts(){
    const response =
        await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );
    
    const posts =
        await response.json();
    
    posts.slice(0,10)
        .forEach(post=>{
            console.log(post.title);
        });
}
getPosts();
/*----------------------------------------------------------------------------------------------------*/