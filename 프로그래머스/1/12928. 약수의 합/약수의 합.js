function solution(n) {
    // 약수는 본인을 제외하고 n/2 보다 클 수 없기 때문에 절반 값 까지만 체크
    let result = 0;
    let index = 1;
    while (index <= n / 2) {
      if (n % index === 0) {
          result+=index;
      }
      index++
    }
    result = result + n // 본인 값까지 더하기
    console.log(result);
    
    return result;
}