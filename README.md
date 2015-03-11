# jse: JavaScript Evaluator

Evaluate JavaScript with pipe.

## Installation

``` bash
$ [sudo] npm install -g jse
```

## Usage

```
$ jse [one liner]
$ jse -p [one liner]
$ jse -m [one liner for array]
```

## Example

```
$ #like "ls | cut -f1 -d."
$ ls | jse -p "__LINE__.split('.')[0]"
$ ls | jse -mp "__LINES__.map(function(line) {return line.split('.')[0];}).join('\n')"
$ #like "grep error log.log"
$ less log.log | jse "if (/error/.test(__LINE__)) {console.log(__LINE__);}"
$ less log.log | jse -m "__LINES__.filter(function(line) {return /error/.test(line);}).forEach(function(line) {console.log(line);});"
```

## Options

```
-p, --print      Print result.
-m, --multiline  Use array of multiline.
-h, --help       Display help.
```
