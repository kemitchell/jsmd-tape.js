Rewrite code examples in Markdown code blocks as test assertions.

Turns this:

    # Title of Your README.md

    This is _Markdown_!

    <!--javascript
      var additionModule = require('./');
    -->

    The above won't be rendered in HTML, such as on GitHub or npmjs.com,
    but it will be included in the rewritten JavaScript.

    The JavaScript expressions with comments that follow will be
    rewritten as asssertions.
    
    ```javascript
    additionmodule(1, 1); // => 2
    additionmodule(2, 2); // => 4
    ```

into this:

```javascript
var additionModule = require('./');
__jsmd__(2, additionModule(1, 1));
__jsmd__(4, additionModule(2, 2));
```

Command-Line Interface
=======================

```shellsesssion
$ npm install --global jsmd-rewrite
$ jsmd-rewrite --version
$ jsmd-rewrite --help
$ jsmd-rewrite README.md
$ cat README.md | jsmd-rewrite
```

Node.js
=======

Install:

```shellsession
$ npm install --save jsmd-rewrite
```

Then:

```javascript
var rewrite = require('jsmd-rewrite');
rewrite(markdown); // returns string
rewrite(markdown, assertionFunctionName); // returns string
```

The function name used for assertions is `"__jsmd__"` by default.

Testing `README.md` with `jsmd-tape`
====================================

For a package called "addition" do:

```shellsession
$ npm install --save-dev jsmd-tape tape
```

Then add to `package.json`:

```json
{
  "scripts": {
    "test": "jsmd-tape README.md | sed 's!addition!./!' | node"
  }
}
```

The `sed` substitution allows you to write `require()` calls in code examples exactly as they will appear in user code:

    ```javascript
    var add = require('addition')
    add(1, 1) // => 2
    ```
