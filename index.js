var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
 return Object.assign({}, object, { [key]: value });
}updateObjectWithKeyAndValue(recipes, 'prop2', 2);

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}destructivelyUpdateObjectWithKeyAndValue(recipes, 'prop2', 2);

function deleteFromObjectByKey(object,key){
  // var recipes = {'prop2': 2};
  // var newRecipes = Object.assign({}, recipes);
  // delete recipes[key];
  // return recipes;
  const newObject = Object.assign({}, object);
  delete newObject[key];
  return newObject
}deleteFromObjectByKey(object, key);