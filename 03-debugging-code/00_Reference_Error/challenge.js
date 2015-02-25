var hello = function(msg) {
  console.log("hello " + msg);
}
module.exports.hello = function(msg) {
return "Hello " + msg;
};
