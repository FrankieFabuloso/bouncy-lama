// _.chunk(array, [size=1])
// Creates an array of elements split into groups the length of size.
// If array can't be split evenly, the final chunk will be the remaining elements.

const chunk = ( array, chunkSize ) => {
  let chunks = []
  while( array.length > 0) { chunks.push( array.splice(0, chunkSize)) }

  return chunks
}
module.exports = chunk
