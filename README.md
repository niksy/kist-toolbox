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

### `appendClass(prop, className)`

Returns: `String`

#### prop

Type: `String`

#### className

Type: `String`

### `appendNamespacedClasses(ns)`

Returns: `Object`

#### ns

Type: `String`

## Examples

### `eventEmitter`

```js
var eventEmitter = require('kist-toolbox/lib/event-emitter')('Foo');

var el = $({});
var foo = 0;
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

eventEmitter(a, 'foo', ['baz']);
eventEmitter(a, 'bar', ['bad'], el);

// foo === 3;
// bar === 'bazbazbad';
// ctx === {};
```

### `isPublicMethod`

```js
var isPublicMethod = require('kist-toolbox/lib/is-public-method')(['foo']);
isPublicMethod('foo'); // true
isPublicMethod('bar'); // false
```

### `appendClass`

```js
var appendClass = require('kist-toolbox/lib/append-class')({
	foo: 'foo',
	bar: 'bar'
});
appendClass('foo','bar'); // 'foo bar'
appendClass('bar','barbarbar baz'); // 'bar barbarbar baz'
```

### `appendNamespacedClasses`

```js
var appendNamespacedClasses = require('kist-toolbox/lib/append-namespaced-classes')({
	foo: 'Foobar-foo',
	bar: 'Foobar-bar',
	baz: 'foobarbaz',
	bad: 'bad',
	bag: 'Foobar-bag'
}, 'Foobar');

appendNamespacedClasses('Barbaz');

/*
{
	foo: 'Foobar-foo Barbaz-foo',
	bar: 'Foobar-bar Barbaz-bar',
	baz: 'foobarbaz',
	bad: 'bad',
	bag: 'Foobar-bag Barbaz-bag'
}
*/
```

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)
