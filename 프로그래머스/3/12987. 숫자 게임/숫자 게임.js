function solution(A, B) {
    var answer = 0;
    
    A.sort((a, b) => b - a); // 가장 작은 숫자 부터
    B.sort((a, b) => a - b); // 가장 큰 숫자 부터
    
    for(const a of A) {
        const max = B[B.length - 1]; // max 값은 계속 B배열 마지막 인덱스에 유지
        
        if(a < max) { // max가 더 큰 경우에만
            answer++; // 승점+1
            B.pop(); // 한 번 사용한 자연수 재사용 불가 -> 마지막에 위치한 가장 큰 숫자는 한 번 사용후 제거
        }
    }
    
    return answer;
}