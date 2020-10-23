
module.exports = function isStrHex(str){
    for (var i = 0; i < str.length; i++) {
let char = str.charAt(i);
var code = typeof char === "string" ? char.charCodeAt(0) : char
//  console.log(code);
    if(
        
        (code >= 48  && code <= 57)  ||
      (code >= 65  && code <= 70)  ||
      (code >= 97  && code <= 102) 
    ) {
    } else{
return false;
    }



    }
  return true;  
};