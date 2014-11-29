# kist-pluginator

Helpers for my jQuery plugins.

## Installation

```sh
npm install kist-pluginator --save
```

## API

### `constructClasses(defaultClasses, customClasses, defaultNs, customNs)`

Returns: `Object`

#### defaultClasses

Type: `Object`

#### customClasses

Type: `Object`

#### defaultNs

Type: `String`

#### customNS

Type: `String`

### `eventEmitter(context, eventName, data)`

#### context

Type: `Object`

#### eventName

Type: `String`

#### data

Type: `Array`

### `constructOptions(options)`

Returns: `Object`

#### options

Type: `Object`

### `isPublicMethod(name)`

Returns: `Boolean`

#### name

Type: `String`

### `runPlugin(el, options, method)`

Returns: `jQuery`

#### el

Type: `jQuery`

#### options

Type: `Object|String`

#### method

Type: `Function`

### `log`

Returns: `Object`

#### `error(msg)`

Returns: `Error`

##### msg

Type: `String`

## Examples

### `constructClasses`

```js
var constructClasses = require('kist-pluginator').constructClasses;

constructClasses({
	foo: 'Foobar-bar',
	bar: 'Foobar-baz',
	baz: 'Foobar-bad',
	isBaz: 'is-bad'
}, {
	foo: '{baseClass}',
	bar: '{customNsClass} Badfoo',
	isBaz: '{baseClass} Barbaz {customNsClass}'
}, 'Foobar', 'Barbaz');

/* {
	classes: {
		foo: 'Foobar-bar',
		bar: 'Barbaz-baz Badfoo',
		baz: 'Foobar-bad Barbaz-bad',
		isBaz: 'is-bad Barbaz is-bad'
	},
	classesNs: {
		foo: 'Barbaz-bar',
		bar: 'Barbaz-baz',
		baz: 'Barbaz-bad',
		isBaz: 'is-bad'
	}
} */
```

### `eventEmitter`

```js
var eventEmmiter = require('kist-pluginator').eventEmmiter('Foo');

var el = $({});
var a = {
	options: {
		foo: function ( result ) {
			foo++;
			bar = result;
			ctx = this;
		}
	}
};

el.on('foofoo foobar', function ( e, result ) {
	foo++;
	bar += result;
});

eventEmmiter(a, 'foo', ['baz']);
eventEmmiter(a, 'bar', ['bad'], el);

// foo === 3;
// bar === 'bazbazbad';
// ctx === {};
```

### `constructOptions`

```js
var constructOptions = require('kist-pluginator').constructOptions;
constructOptions({});
// {}
```

### `isPublicMethod`

```js
var isPublicMethod = require('kist-pluginator').isPublicMethod(['foo']);
isPublicMethod('foo'); // true
isPublicMethod('bar'); // false
```

### `runPlugin`

```js
var runPlugin = require('kist-pluginator').runPlugin('Foo');
runPlugin(el, {
	foo: function () {
		//
	}
}, Constructor);

runPlugin(el, 'foo', publicMethodArg);
```

### `log`

```js
var log = require('kist-pluginator').log('Foo');
log.error('Error!'); // Foo: Error!
```

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)
