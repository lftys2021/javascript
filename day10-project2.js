// Day 10. 미니 프로젝트
/*----------------------------------------------------------------------------------------------------*/
// 프로젝트 2. 학생 관리
// 사용 데이터
let students = [
    {
        id:1,
        name:"홍길동",
        score:95
    },
    {
        id:2,
        name:"김철수",
        score:80
    },
    {
        id:3,
        name:"이영희",
        score:70
    }
];
/*----------------------------------------------------------------------------------------------------*/
// Step 1. 학생 출력
// 출력
// 홍길동 95
// 김철수 80
// 이영희 70
console.log("Step 1. 학생 출력");
console.log("===== students List =====");
students.forEach(student => {
    console.log(`${student.name} ${student.score}`);
});
/*----------------------------------------------------------------------------------------------------*/
// Step 2. 학생 추가
// addStudent("박민수",88);
// 출력
// 학생 추가 완료
console.log("Step 2. 학생 추가");
const addStudent = (name, score) => {
    const newStudent = {
        id: students.length + 1,
        name: name,
        score: score
    };
    students.push(newStudent);
    console.log("추가 완료");
};
addStudent("박민수",88);
console.log("===== students List =====");
students.forEach(student => {
    console.log(`${student.name} ${student.score}`);
});
/*----------------------------------------------------------------------------------------------------*/
// Step 3. 학생 삭제
// deleteStudent(2);
// 결과
// 김철수가 삭제됩니다.
console.log("Step 3. 학생 삭제");
const deleteStudent = (id) => {
    const Student = students.find(Student => Student.id === id);
    if (Student) {
        students = students.filter(t => t.id !== id);
        console.log(`${Student.name}가 삭제됩니다`);
    }
};
deleteStudent(2);
console.log("===== students List =====");
students.forEach(student => {
    console.log(`${student.name} ${student.score}`);
});
/*----------------------------------------------------------------------------------------------------*/
// Step 4. 평균 점수
// 출력
// 84.3
// 힌트
// reduce()
console.log("Step 4. 평균 점수");
const avg = students.reduce((sum,student)=>sum+student.score, 0)/students.length;
console.log(avg);
/*----------------------------------------------------------------------------------------------------*/
// Step 5. 최고 점수
// 출력
// 홍길동
// 95
// 힌트
// reduce()
console.log("Step 5. 최고 점수");
const top = students.reduce((best, student) => {
    if (student.score > best.score) {
        return student;
    } else {
        return best;
    }
});
console.log(top.name);
console.log(top.score);
/*----------------------------------------------------------------------------------------------------*/
// Step 6. 80점 이상
// 출력
// 홍길동
// 김철수
// 힌트
// filter()
console.log("Step 6. 80점 이상");
const result = students.filter(students => students.score >= 80);
result.forEach(student => {
    console.log(student.name);
});
console.log(result.map(student => student.name));
console.log(result[0].name);
/*----------------------------------------------------------------------------------------------------*/
// Step 7. 이름 검색
// searchStudent("홍");
// 출력
// 홍길동
// 힌트
// includes()
console.log("Step 7. 이름 검색");
const searchStudent = (str) => {
    const student = students.find(student =>
        student.name.includes(str)
    );
    console.log(student.name);
};
searchStudent("홍");
/*----------------------------------------------------------------------------------------------------*/
// Step 8. 점수순 정렬
// 높은 점수부터
// 95
// 88
// 80
// 70
// 힌트
// sort()
console.log("Step 8. 점수순 정렬");
const sortResult = students.sort(
    (a, b) => b.score - a.score
);
sortResult.forEach(student => {
    console.log(student.score);
});
/*----------------------------------------------------------------------------------------------------*/
// Step 9. 이름만 출력
// 출력
// [
// "홍길동",
// "김철수",
// "이영희"
// ]
console.log("Step 9. 이름만 출력");
const nameOnly = students.filter(students => students);
console.log(nameOnly.map(student => student.name));
// 힌트
// map()
/*----------------------------------------------------------------------------------------------------*/
// Step 10. JSON 저장
console.log("Step 10. JSON 저장");
console.log(
    JSON.stringify(students)
);
/*----------------------------------------------------------------------------------------------------*/
