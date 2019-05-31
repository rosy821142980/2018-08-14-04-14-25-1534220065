module.exports = function main(num) {
    var m = [['._.', '|.|','|_|'],
        ['...','..|','..|'],
        ['._.','._|','|_.'],
        ['._.','._|','._|'],
        ['...','|_|','..|'],
        ['._.','|_.','._|'],
        ['._.','|_.','|_|'],
        ['._.','..|','..|'],
        ['._.','|_|','|_|'],
        ['._.','|_|','..|']];
    var nums = num.split('');
    var first_line = new Array();
    var second_line = new Array();
    var third_line = new Array();
    
    for(var i in nums){
        var int_i = parseInt(nums[i]);
        first_line.push(m[int_i][0]);
        second_line.push(m[int_i][1]);
        third_line.push(m[int_i][2]);
    }
    var f = first_line.join(' ');
    var s = second_line.join(' ');
    var t = third_line.join(' ');
    var output = f + '\n' + s + '\n' + t + '\n';
    return output;
};

