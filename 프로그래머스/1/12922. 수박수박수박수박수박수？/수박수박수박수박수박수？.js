function solution(n) {
    var answer = '';
    for(let i=1; i<=n; i++) {
        if(i%2 === 0) {
            answer+= '박'
        }
        if(i%2 === 1) {
            answer+= '수'
        }
    }
    return answer;
}