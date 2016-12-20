// _.at(object, [paths])
// Creates an array of values corresponding to paths of object.
const at = (object, paths) => {
  let parsedPaths = []
  let foundValues =[]
  if (paths.length == undefined){
    paths = [paths]
    return getObjValue(object, paths)
  }
  for(let path of paths){
    parsedPaths.push(parsePath(path))
  }
  for(let path of parsedPaths){
    foundValues.push( getObjValue(object, path) )
  }
  return foundValues
}

const getObjValue = (obj, path ) => {
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

const parsePath = ( path ) => {
  let newPath = path.split('.')
  let splitPath = []
  for(let path of newPath) {
    splitPath.push( path.split(']')[0].split('['))
  }
  return flattenPath(splitPath)
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
