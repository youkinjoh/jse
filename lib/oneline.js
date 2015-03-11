module.exports.evaluate = function(code, callback) {
  require('readline').createInterface({
    input: process.stdin,
    output: function() {}
  }).on('line', function(__LINE__) {
    callback(eval(code, __LINE__));
  });
};
