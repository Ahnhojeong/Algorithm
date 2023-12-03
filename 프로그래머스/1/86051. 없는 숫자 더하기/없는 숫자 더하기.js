function solution(numbers) {
    let sum = 0;
    for(let i=0; i<10; i++) {
        sum+=i;
    }
    
    let numbers_sum = 0;
    
    for(let i=0; i<numbers.length; i++) {
        numbers_sum+=numbers[i];
    }
    
    var answer = sum - numbers_sum;
    
    return answer;
}