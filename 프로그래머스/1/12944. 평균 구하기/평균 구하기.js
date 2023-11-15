function solution(arr) {
    let result = arr.reduce((acc, cur) => {
        return acc + cur
    }, 0);
    
    let average = result / arr.length;
    
    return average;
}