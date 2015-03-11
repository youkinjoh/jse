var opts = require('optimist')
         . usage([
           'jse: JavaScript Evaluator',
           'Evaluate JavaScript with pipe.',
           '',
           'Usage:',
           '  $0 [one liner]',
           '  $0 -p [one liner]',
           '  $0 -m [one liner for array]',
           'Example:',
           '  like "ls | cut -f1 -d."',
           '    ls | $0 -p "__LINE__.split(\'.\')[0]"',
           '    ls | $0 -mp "__LINES__.map(function(line) {return line.split(\'.\')[0];}).join(\'\\n\')"',
           '  like "grep error log.log"',
           '    less log.log | $0 "if (/error/.test(__LINE__)) {console.log(__LINE__);}"',
           '    less log.log | $0 -m "__LINES__.filter(function(line) {return /error/.test(line);}).forEach(function(line) {console.log(line);});"'
         ].join('\n'))
         . boolean(['p', 'm'])
         . alias('p', 'print')
         . alias('m', 'multiline')
         . alias('h', 'help')
         . describe('p', 'Print result.')
         . describe('m', 'Use array of multiline.')
         . describe('h', 'Display help.')
         ;

var argv = opts.argv;

if (argv['help']) {
  opts.showHelp();
  return;
}

function print(result) {
  if (argv['p']) {
    console.log(result);
  }
}

var evaluator = (argv['m']) ? require('./multiline') : require('./oneline');

evaluator.evaluate(argv['_'][0], print);
