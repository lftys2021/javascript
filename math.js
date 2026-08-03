export function add(a,b){
    return a+b;
}

export function minus(a,b){
    return a-b;
}

export function multiple(a,b){
    return a*b;
}

export function divide(a,b){
    if (b == 0){
        console.log("0으로 나눌 수 없습니다.");
        return;
    }
    return a/b;
}
