var __LINES__ = [];
module.exports.evaluate = function(code, callback) {
  require('readline').createInterface({
    input: process.stdin,
    output: function() {}
  }).on('line', function(line) {
    __LINES__.push(line);
  });
  process.stdin.on('end', function () {
    callback(eval(code));
  });
};
