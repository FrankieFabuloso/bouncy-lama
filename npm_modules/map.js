// _.map(collection, [iteratee=_.identity])
// Creates an array of values by running each element in collection thru iteratee.
// The iteratee is invoked with three arguments:
// (value, index|key, collection).

const map = ( collection, func ) => {
  let newArray = []
  for( let item in collection ){
    if( Array.isArray(collection) ){
      item = parseInt(item)
    }
    console.log(typeof(item));
    newArray.push(func( collection[item], item, collection ))
  }
  return newArray
}

module.exports = map
