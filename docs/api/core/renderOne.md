# singular.renderOne

The `renderOne` function replaces the innerHTML of a single element with a value.

## Usage

singular.renderOne(value, el);

### Arguments

| Param | Type | Details |
| ----- | ---- | ------- |
| _value_ | `String`    | Render a string value. |
|         | `Function`  | Render a function's return value. |
|         | `Object`    | Render an object's `draw` property. |
| _el_    | `Node` 		| A single element. |
|         | `String`   	| A selector string. |


> Note: Objects are the only type that are observed for changes.

### Returns

`String` The string with the arguments concatenated.

## Example

	<html>
		<body>
			<script src="singular.min.js"></script>
			<script>
				var example = {
					draw: function(el) {
						return "<p>Hello Singular</p>";
					}
				};
				singular.renderOne(example, document.body);
			</script>
		</body>
	</html>
