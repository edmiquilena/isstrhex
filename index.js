
module.exports = function isStrHex(str){
    for (var i = 0; i < str.length; i++) {
        let c = str.charAt(i);
let char = parseInt(str.charAt(i), 16);


  


    if(char.toString(16) !== c.toLowerCase()) {

return false;
    }



    }
  return true;  
};
