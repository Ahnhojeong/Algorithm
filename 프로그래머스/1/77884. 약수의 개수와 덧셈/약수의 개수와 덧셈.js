function solution(left, right) {
    var answer = 0;
    
    let measure;
    
    for(let i=left; i<=right; i++) {
        measure = getMeasure(i).length;
        answer += measure%2 === 0 ? +i : -i;
    }
    return answer;
}

function getMeasure(num) {
    let result = []
    let index = 1;
    while (index <= num / 2) {
      if (num % index === 0) result.push(index)
      index++
    }
    result = [...result, num];
    
    return result;
}