# singular.renderAll

The `renderAll` function replaces the innerHTML of a multiple elements with a value.

## Usage

singular.renderAll(value, el);

### Arguments

| Param | Type | Details |
| ----- | ---- | ------- |
| _value_ | `String`     | Render a string value. |
|         | `Function`   | Render a function's return value. |
|         | `Object`     | Render an object's `draw` property. |
| _els_   | `NodeList`   | A collection of elements.|
|         | `String`     | A selector string. |


> Note: Objects are the only type that are observed for changes.

### Returns

`String` The string with the arguments concatenated.

## Example

	<html>
		<body>
			<div></div>
			<div></div>
			<div></div>
			
			<script src="singular.min.js"></script>
			<script>
				var example = {
					draw: function(el) {
						return "<p>Hello Singular</p>";
					}
				};
				singular.renderAll(example, "div");
			</script>
		</body>
	</html>
