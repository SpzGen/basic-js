module.exports = function transform(arr) {
    let NewArr = [];
    if(!Array.isArray(arr)) throw new Error ('Error');
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '--discard-next' : {
                if (i < arr.length-1) i++;
                break;
            }
            case '--discard-prev' : {
                if (i > 0) NewArr.pop();
                break;
            }           
            case '--double-next' : {
                if(i < arr.length-1) NewArr.push(arr[i+1]);
                break;
            }
            case '--double-prev' : {
                if(i > 0) NewArr.push(arr[i-1]);
                break;
            }
            default: NewArr.push(arr[i]);
        }
    }
return NewArr;
};
