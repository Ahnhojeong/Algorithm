function solution(progresses, speeds) {
    var answer = [];
    var days = [];
    
    for(let i=0; i<progresses.length; i++) {
        days.push(Math.ceil((100 - progresses[i]) / speeds[i]));
    }
    console.log('days -> ', days);
    
     let cnt = 1;
  let maxDay = days[0];

  for (let i = 1; i < days.length; i++) {
    if (days[i] <= maxDay) {
      cnt++;
    } else {
      maxDay = days[i];
      answer.push(cnt);
      cnt = 1;
    }
  }
  answer.push(cnt);
  return answer;
    
}