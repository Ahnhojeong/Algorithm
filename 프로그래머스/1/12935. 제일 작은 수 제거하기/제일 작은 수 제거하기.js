function solution(arr) {
    var answer = [];
    
    let min = Math.min(...arr);
    let result = arr.filter(item => item !== min);
    
    if(result.length <= 1) {
        answer.push(-1);
    } else {
        answer = [...result];
    }
    
    return answer;
}