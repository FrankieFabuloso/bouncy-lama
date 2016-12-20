// _.indexOf(array, value, [fromIndex=0])
// Gets the index at which the first occurrence of value is found in array using
// SameValueZero for equality comparisons. If fromIndex is negative, it's used
// as the offset from the end of array.

const indexOf = ( array, value, fromIndex) => {
  if(fromIndex == undefined) {
    fromIndex=0
  }
  for ( let i=fromIndex; i<array.length; i++ ){
    if ( array[index] == value ) {
      return index
    }
  }
}

module.exports = indexOf
