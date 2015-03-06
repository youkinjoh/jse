# jse: JavaScript Evaluator

Evaluate JavaScript with pipe.

## Installation

``` bash
$ [sudo] npm install -g jse
```

## Usage

```
$ jse [one liner]
$ jse -m [one liner for array]
```

## Example

```
$ #like "grep error log.log"
$ less log.log | $0 "if (/error/.test(__LINE__)) {console.log(__LINE__);}"',
$ less log.log | $0 -m "__LINES__.filter(function(line) {return /error/.test(line);}).forEach(function(line) {console.log(line);});"'
```

## Options

```
-m, --multiline  Use array of multiline.
-h, --help       Display help.          
```
