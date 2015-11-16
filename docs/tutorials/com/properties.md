# Building a Component

## Properties

A component can have user-defined properties that are available to the `draw` function.

	<html>
		<body>
			<div id="example"></div>

			<script src="singular.min.js"></script>
			<script>
				var example = {
					name: 'Singular',
					draw: function(el) {
						return '<h1>Hello ' + this.name + '</h1>';
					}
				};
				singular.renderOne(example, '#example');
			</script>
		</body>
	</html>

[Next Step](templating.md)