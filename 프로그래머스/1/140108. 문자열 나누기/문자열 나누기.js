function solution(s) {
    var stack = [];
    var answer = 0;
    
    [...s].forEach((str) => {
        stack.push(str);
        
        var same_string = stack.filter((item) => item === stack[0]);
        var diff_string = stack.filter((item) => item !== stack[0]);
        
        if(same_string.length === diff_string.length) {
            answer++;
            stack = [];
        }
    });
    
    if(stack.length !== 0) {
        answer++;
    }
    
    return answer;
}