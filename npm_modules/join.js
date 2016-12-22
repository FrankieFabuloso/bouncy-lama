const join = (array, string) => {
  var joinString = '';
  for(var i=0; i<array.length-1; i++){
    joinString += array[i] + string;

  }
  joinString += array[array.length-1];
  return joinString;
}
module.exports = join;
