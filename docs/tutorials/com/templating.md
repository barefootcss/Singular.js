# Building a Component

## Templating

Double-brackets in the `draw` return string are replaced by property values.

	<html>
		<body>
			<div id="example"></div>

			<script src="singular.min.js"></script>
			<script>
				var example = {
					name: 'Singular',
					draw: function(el) {
						return '<h1>Hello {{name}}</h1>';
					}
				};
				singular.renderOne(example, '#example');
			</script>
		</body>
	</html>

> __Tip__: Double-brackets work with deeply nested properties.

[Next Step](concatenating.md)