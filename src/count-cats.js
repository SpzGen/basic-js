module.exports = function countCats(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
      arr[i].forEach(e => { 
        if (e === '^^') {
          sum += 1;
        }
    });
  }
  return sum;
};
