# Building a Component

## Basics

A component is an object that is observed for changes and can be drawn on a page. 

	<html>
		<body>
			<div id="example"></div>

			<script src="singular.min.js"></script>
			<script>
				var example = {
					draw: function(el) {
						return '<h1>Hello World</h1>';
					}
				};
				singular.renderOne(example, '#example');
			</script>
		</body>
	</html>

### Breaking it Down

__draw property__

The `draw` property calls a function that returns the innerHTML of our component.

		var example = {
			draw: function(el) {
				return "<h1>Hello World</h1>";
			}
		};

__renderOne function__

The `renderOne` function makes the object observable, and renders it in the <div>.

	singular.renderOne(example, "#example");

[Next Step](properties.md)