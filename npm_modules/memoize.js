// _.memoize(func, [resolver])
// Creates a function that memoizes the result of func.
// If resolver is provided, it determines the cache key for storing the
// result based on the arguments provided to the memoized function.
// By default, the first argument provided to the memoized function is used
// as the map cache key. The func is invoked with the his binding of
// the memoized function.

const memoize = ( func, resolver=defaultResolver ) => {
  let memo = {}
  console.log(resolver);
  // assume resolver provides a string
  return newFunction = (...input) => {
    let key = resolver(...input)
    if(!memo[key]) {
      console.log("-----> Key :", key," value not found! Inserting!" );
      memo[key] = func(...input)
    }
    console.log("YES FOUND IT! :", memo[key]);
    return memo[key]
  }
}

const defaultResolver = ( ...input ) => [...input].toString()
module.exports = memoize
