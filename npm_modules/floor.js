const floor = (number,precision) => {
  var numString = number.toString();
  numString = numString.split('.');

  if(!precision || precision === 0){
    return Number(numString[0]);
  }

  if(precision + numString[0].length <= 0){
    return 0;
  }
  if(numString[1] !== undefined && numString[1].length - precision < 0){
    return number;
  }

  if(precision < 0){
    var size = numString[0].length;
    var index = size + precision;
    numString[0]=numString[0].substring(0,index);
    for(let i = size-1; i>=index; i--){

      numString[0]+='0';

    }
    return Number(numString[0]);
  }

  if(precision > 0){
    numString[1]=numString[1].substring(0, precision)
    return Number(numString.join('.'))
  }

};

module.exports = floor;
