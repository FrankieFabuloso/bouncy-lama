// _.at(object, [paths])
// Creates an array of values corresponding to paths of object.
const at = (object, paths) => {
  let parsedPaths = []
  let foundValues = []
  for(let path of paths){
    parsedPaths.push(parsePath(path))
  }
  for(let path of parsedPaths){
    foundValues.push( getObjValue(object, path) )
  }
  return foundValues
}

const parsePath = ( path ) => {
  let newPath = path.split('.')
  let splitPath = []
  for(let path of newPath) {
    let parseBrackets = path.replace(/\[/g, ' ').split(' ').join('')
    parseBrackets = parseBrackets.replace(/\]/g, ' ').split(' ').join('')
    parseBrackets = parseBrackets.split('')
    splitPath.push(parseBrackets)
  }
  return flattenPath(splitPath)
}

const getObjValue = (obj, path ) => {
  if( path.length === 0 ) return undefined
  let returningObj = obj
  for( let step of path ) {
    if( isNaN(parseInt(step)) ) {
      returningObj = returningObj[step]
    } else {
      returningObj = returningObj[parseInt(step)]
    }
  }
  return returningObj
}

const flattenPath = ( pathArray ) => {
  let flattendArray = []
  for( let deeperArray of pathArray ) {
    for( let deepestArray of deeperArray ) {
      flattendArray.push(deepestArray)
    }
  }
  return flattendArray
}

module.exports = at
