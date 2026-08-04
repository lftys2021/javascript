// Day 10. 미니 프로젝트
/*----------------------------------------------------------------------------------------------------*/
// 프로젝트 1. Todo List
// 목표 : 할 일을 관리하는 프로그램을 만들어 봅니다.
// 사용할 데이터
let todos = [
    {
        id: 1,
        title: "JavaScript 공부",
        completed: false
    },
    {
        id: 2,
        title: "Vue 공부",
        completed: true
    }    
];
/*----------------------------------------------------------------------------------------------------*/
// Step 1. 전체 목록 출력
// ===== Todo List =====
// 1. JavaScript 공부 ❌
// 2. Vue 공부 ✅
console.log("===== Todo List =====");
todos.forEach(todo => {
    console.log(`${todo.id}. ${todo.title} ${todo.completed ? '✅' : '❌'}`);
});
/*----------------------------------------------------------------------------------------------------*/
// Step 2. 할 일 추가
// 함수
const addTodo = (title) => {
    const newTodo = {
        id: todos.length + 1,
        title: title,
        completed: false
    };
    todos.push(newTodo);
    console.log("추가 완료");
};
addTodo("TypeScript 공부");
console.log("===== Todo List =====");
todos.forEach(todo => {
    console.log(`${todo.id}. ${todo.title} ${todo.completed ? '✅' : '❌'}`);
});
// 출력
// 추가 완료
/*----------------------------------------------------------------------------------------------------*/
// Step 3. 완료 처리
const completeTodo = (id) => {
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        todo.completed = true;
        console.log(`${todo.title} ${todo.completed ? '✅' : '❌'}`);
    }
};
completeTodo(1);
// 결과
// JavaScript 공부 ✅
/*----------------------------------------------------------------------------------------------------*/
// Step 4. 삭제
const deleteTodo = (id) => {
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        todos = todos.filter(t => t.id !== id);
        console.log(`${todo.title} 삭제`);
    }
};
deleteTodo(2);
/*----------------------------------------------------------------------------------------------------*/
// Step 5. 완료된 것만 출력
console.log("===== 완료된 Todo =====");
todos.filter(todo => todo.completed).forEach(todo => {
    console.log(`${todo.title}`);
});
/*----------------------------------------------------------------------------------------------------*/
// Step 6. 미완료만 출력
console.log("===== 미완료된 Todo =====");
todos.filter(todo => !todo.completed).forEach(todo => {
    console.log(`${todo.title}`);
});
/*----------------------------------------------------------------------------------------------------*/
// Step 7. 통계
console.log("===== Todo 통계 =====");
console.log(`전체 : ${todos.length}`);
console.log(`완료 : ${todos.filter(todo => todo.completed).length}`);
console.log(`미완료 : ${todos.filter(todo => !todo.completed).length}`);
/*----------------------------------------------------------------------------------------------------*/
// Step 8. 제목 검색
const searchTodo = (title) => {
    const results = todos.filter(todo => todo.title.includes(title));
    if (results.length > 0) {
        console.log("===== 검색 결과 =====");
        results.forEach(todo => {
            console.log(`${todo.title}`);
        });
    } else {
        console.log("검색 결과가 없습니다.");
    }
};
searchTodo("Java");
// 출력
// JavaScript 공부
// 힌트
// includes()
/*----------------------------------------------------------------------------------------------------*/