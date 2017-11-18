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
  const newDriver = Object.assign({},driver);
  delete driver.key;
  return driver;
}
