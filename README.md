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
		