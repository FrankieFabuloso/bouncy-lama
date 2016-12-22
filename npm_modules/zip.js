// _.zip([arrays])
// Creates an array of grouped elements, the first of which contains the first
// elements of the given arrays, the second of which contains the second elements
// of the given arrays, and so on.

const zip = (...args) => {
  let arrays = [...args]
  console.log(arrays)
  let zippersSize = getZippers(arrays)
  console.log(zippersSize);
  let zippers = zipperMaker(zippersSize)
  for( let array of arrays ) {
    for( let i=0; i<zippersSize; i++) {
      zippers[i].push(array[i])
    }
  }
  return zippers
}



// ---- Utitlity Functions ----
const getZippers = ( inputArrays ) => {
  let max = 0
  for( let array of inputArrays ){
    if( array.length > max ){
      max = array.length
    }
  }
return max
}

const zipperMaker = ( size ) => {
  console.log(size);
  const outterArray = []
  while( size > 0 ){
    outterArray.push([])
    size--
  }
  return outterArray
}

module.exports = zip;
