function solution(absolutes, signs) {
    
    
    let answer = absolutes.reduce((acc, cur, idx) => { return acc+(signs[idx] ? +cur : -cur) }, 0);
    return answer;
}