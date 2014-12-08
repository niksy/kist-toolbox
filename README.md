# kist-toolbox

Various helpers for my projects.

## Installation

```sh
npm install kist-toolbox --save
```

## API

### `eventEmitter(context, eventName, data)`

#### context

Type: `Object`

#### eventName

Type: `String`

#### data

Type: `Array`

### `isPublicMethod(name)`

Returns: `Boolean`

#### name

Type: `String`

### `log`

Returns: `Object`

#### `error(msg)`

Returns: `Error`

##### msg

Type: `String`

## Examples

### `eventEmitter`

```js
var eventEmmiter = require('kist-toolbox').eventEmmiter('Foo');

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

### `isPublicMethod`

```js
var isPublicMethod = require('kist-toolbox').isPublicMethod(['foo']);
isPublicMethod('foo'); // true
isPublicMethod('bar'); // false
```

### `log`

```js
var log = require('kist-toolbox').log('Foo');
log.error('Error!'); // Foo: Error!
```

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)
