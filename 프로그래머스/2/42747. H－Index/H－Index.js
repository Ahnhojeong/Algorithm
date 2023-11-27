function solution(citations) {
    var answer = 0;
    let filter =  citations.sort((a, b) => b - a)
    
    for(let i=0; i<filter.length; i++) {
       if(filter[i] > i) {
           answer++
       }
    }
    return answer;
}