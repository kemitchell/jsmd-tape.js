var EOL = require('os').EOL
var rewrite = require('jsmd-rewrite')

function jsmdTape(markdown) {
  return [
    "require('tape')('jsmd', function(test)  {",
    rewrite(markdown, 'test.deepEqual')
      .split(EOL)
      .map(function(line) {
        return '  ' + line})
      .join(EOL),
    'test.end()',
    '});' ].join(EOL) }

module.exports = jsmdTape
