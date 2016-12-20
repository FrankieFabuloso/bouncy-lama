// _.drop(array, [n=1])
// Creates a slice of array with n elements dropped from the beginning.

const drop = ( array, amount ) => {
  if(amount == undefined){
    amount = 1
  }
  array.splice(0, amount)
  return array
}

module.exports = drop
