function solution(answers) {
    const supoja_1 = [1,2,3,4,5];
    const supoja_2 = [2,1,2,3,2,4,2,5];
    const supoja_3 = [3,3,1,1,2,2,4,4,5,5];
    let result = [0, 0, 0];
    
    for(let i=0; i<answers.length; i++) {
        if(supoja_1[i%5] === answers[i]) result[0]++;
        if(supoja_2[i%8] === answers[i]) result[1]++;
        if(supoja_3[i%10] === answers[i]) result[2]++;
    }
    
    let answer = [];
    let max = Math.max(...result);
    let cnt = 0;
    
    for(let i=0; i < result.length; i++) {
        if(max === result[i]) {
            answer.push(i+1);
        }
    }
    
    return answer;
}