const forEach = (collection, func) => {

  for(let item in collection){
    func(item);
  }
  return collection;
}
module.exports = forEach;
