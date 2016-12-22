// _.reduce(collection, [iteratee=_.identity], [accumulator])
// Reduces collection to a value which is the accumulated result of running each
// element in collection thru iteratee, where each successive invocation is
// supplied the return value of the previous. If accumulator is not given, the
// first element of collection is used as the initial value. The iteratee is
// invoked with four arguments:
// (accumulator, value, index|key, collection).

const reduce = ( collection, func, accumulator ) => {
  for( let item in collection ) {
    if( accumulator == undefined){
      accumulator = collection[item]
      continue
    }
    accumulator = func(accumulator, collection[item], item, collection)
  }
  return accumulator
}

module.exports = reduce
