module.exports = function check(str, bracketsConfig) {
  let arr = [];
  for(let i = 0; i < str.length; i++) {
    for(let j = 0; j < bracketsConfig.length; j++) {
      if(bracketsConfig[j][0] === bracketsConfig[j][1] && str[i] === bracketsConfig[j][0]) {
      	if (arr.length > 0 && arr[arr.length - 1] === bracketsConfig[j][0]) {
      		arr.pop();
      	} else {
      		arr.push(bracketsConfig[j][0]);
      	}
      	break;
      }
      if(str[i] === bracketsConfig[j][0]) {
        arr.push(bracketsConfig[j][1]);
        break;
      } 
      if(str[i] === bracketsConfig[j][1]) {
        if(arr.length === 0) {
          return false;
        }
        if(arr.pop() !== bracketsConfig[j][1]) {
          return false;
        } 
        break;
      }
    }
  }
  return arr.length === 0;
}
