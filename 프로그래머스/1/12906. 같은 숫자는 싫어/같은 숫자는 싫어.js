function solution(arr)
{
    let stack = [];

    for(let i=0; i<arr.length; i++) {
        if(stack[stack.length - 1] !== arr[i]) {
            stack.push(arr[i]);
        } 
        
    }
    
    console.log('stack -> ', stack)
    return stack;
}