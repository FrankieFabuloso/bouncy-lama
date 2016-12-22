// _.flattenDeep(array)
// Recursively flattens array.

const flattenDeep = ( nestedarray ) => {
  var flatArray = [];

  if( Array.isArray( nestedarray ) ) {
    for( let i = 0; i<nestedarray.length; i++ ) {
      flatArray = flatArray.concat( flattenDeep(nestedarray[i]) )
    }
  } else {
    if( nestedarray != undefined ) {
      flatArray.push(nestedarray)
    }
  }
  return flatArray
}


module.exports = flattenDeep
