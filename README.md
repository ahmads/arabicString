#arabicString

A Javascript library that extends the native `String` object with methods to help when dealing with Arabic strings for _node_ and _the browser_.

##Usage
###node
```js
require('arabicString')
```
###browser
```js
<script src="arabicString.js"></script>
```

##String#howArabic()

The percentage of Arabic letters in the `String`.

### Example

```js
'فوو bar'.howArabic()
//=> 0.5
```


##String#isArabic(threshold)

Is the `String` Arabic, based on a given `threshold` between `0` and `1`. Defaults to `0.79`.

### Example

```js
'فوو'.isArabic()
//=> true
'فوو bar baz'.isArabic(0.5)
//=> flase
```

##String#hasArabic()

Does the `String` have _any_ Arabic letter.

### Example

```js
'فوو bar'.hasArabic()
//=> ture
'foo bar'.hasArabic()
//=> false
```

## License 

(The MIT License)

Copyright (c) 2012 Ahmad Salman

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
		