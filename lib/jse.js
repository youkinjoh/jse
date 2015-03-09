switch ((function() {
  var opts = require('optimist')
           . usage([
             'jse: JavaScript Evaluator',
             'Evaluate JavaScript with pipe.',
             '',
             'Usage:',
             '  $0 [one liner]',
             '  $0 -m [one liner for array]',
             'Example:',
             '  like "grep error log.log"',
             '    less log.log | $0 "if (/error/.test(__LINE__)) {console.log(__LINE__);}"',
             '    less log.log | $0 -m "__LINES__.filter(function(line) {return /error/.test(line);}).forEach(function(line) {console.log(line);});"'
           ].join('\n'))
           . boolean(['m'])
           . alias('m', 'multiline')
           . alias('h', 'help')
           . describe('m', 'Use array of multiline.')
           . describe('h', 'Display help.')
           ;

  var argv = opts.argv;

  if (argv['help']) {
    opts.showHelp();
    return null;
  }

  return !!argv['m'];
})()) {
  case false: (function() {
    require('readline').createInterface({
      input: process.stdin,
      output: function() {}
    }).on('line', function(__LINE__) {
      eval(process.argv.slice(-1)[0]);
    });
  })(); break;
  case true: (function() {
    var __LINES__ = [];
    require('readline').createInterface({
      input: process.stdin,
      output: function() {}
    }).on('line', function(__LINE__) {
      __LINES__.push(__LINE__);
    });
    process.stdin.on('end', function () {
      eval(process.argv.slice(-1)[0]);
    });
  })(); break;
};