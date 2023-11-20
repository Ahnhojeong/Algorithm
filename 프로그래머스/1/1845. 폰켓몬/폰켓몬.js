function solution(nums) {
    var arr = [...new Set(nums)];
    var max = nums.length / 2;
    
    return arr.length > max ? max : arr.length;
}