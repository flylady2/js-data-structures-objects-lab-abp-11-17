// Write your solution in this file!
const driver = {};
function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver,{[key]:value});
}
function destructivelyUpdateDriverWithKeyAndValue(object,key,value) {
  object[key] = value;
  return object;
}
function deleteFromDriverByKey(driver, key) {
  const newObj = Object.assign({}, driver);
  delete newObj.driver;
  })
function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
