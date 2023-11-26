function solution(s) {
    var answer = '';
    let array = s.split(' ');
    
    let max = Math.max(...array);
    let min = Math.min(...array);
    
    answer = `${min} ${max}`;
    
    return answer;
}