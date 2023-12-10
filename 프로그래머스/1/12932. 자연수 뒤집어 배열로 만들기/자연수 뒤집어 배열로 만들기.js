function solution(n) {
    var answer = [];
    var array = n.toString().split('');
    
    for(let i=array.length-1; i>=0; i--){
        answer.push(Number(array[i]));
    }
    
    console.log('answer -> ', answer)
    
    return answer;
}