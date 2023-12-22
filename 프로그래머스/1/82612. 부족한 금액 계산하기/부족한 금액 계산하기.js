function solution(price, money, count) {
    var answer = 0;
    
    for(let i=1; i<=count; i++) {
        answer += i * price;
    }
    
    let result = money - answer;

    return result >=0 ? 0 : Math.abs(result)
}