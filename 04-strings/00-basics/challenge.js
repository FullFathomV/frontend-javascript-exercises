
module.exports.formLetter = function(firstName, senderName, message) {
  return "Hello " + firstName + ",\n\n" + message + "\n\nSincerely,\n" + senderName;
};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
  return bigString.substring(startA, endA) + bigString.substring(startB, endB);
};

module.exports.findFirstMatch = function(text, searchString) {
  return text.indexOf(searchString);
};

module.exports.findLastMatch = function(text, searchString) {
  return text.lastIndexOf(searchString);
};

module.exports.substringBetweenMatches = function(text, searchString) {
  // 1 extract the index of the first match
  var firstIndex = text.indexOf(searchString);
  // 2 extract the index of the last match
  var lastIndex = text.lastIndexOf(searchString);
  // 3 extract the content between first and last match
  var content = text.substring(firstIndex + searchString.length, lastIndex);
  // return 3
  return content;
};