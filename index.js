var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
 return Object.assign({}, object, { [key]: value });
}updateObjectWithKeyAndValue(recipes, 'prop2', 2);

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}destructivelyUpdateObjectWithKeyAndValue(recipes, 'prop2', 2);

function deleteFromObjectByKey(object,key){
  //var recipes = Object.assign({}, object);
  
  var recipes = {'prop2': 2};
  var newRecipes = Object.;
  
  delete recipes[key];
  return recipes;
}deleteFromObjectByKey(object, key);