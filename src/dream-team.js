module.exports = function createDreamTeam(arr) {
  let res = [];
  if(Array.isArray(arr)){
    for (let i = 0; i < arr.length; i++) {
      if (typeof(arr[i]) === 'string') {
        let arrCat = arr[i].trim().toUpperCase();
        for (let j = 0; j < arrCat.length; j++) {
          if (typeof(arrCat[j] === 'string')) {
              res = res.concat(arrCat[j]);
              break;
          }           
        }
      }       
    }
  }
  return res.sort().join('');
};