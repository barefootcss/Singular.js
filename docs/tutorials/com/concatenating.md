# Building a Component

## Concatenating

The `singular.concat` function makes it easier to write the `draw` return string.

	<html>
		<body>
			<div id="example"></div>

			<script src="singular.min.js"></script>
			<script>
				var example = {
					name: 'Singular',
					draw: function(el) {
						return singular.concat(
							'<h1>',
								'Hello {{name}}',
							'</h1>'
						);
					}
				};
				singular.renderOne(example, '#example');
			</script>
		</body>
	</html>

### Breaking it Down

__singular.concat function__

The `singular.concat` function concatenates multiple arguments and returns a `String`.

		var example = {
			draw: function(el) {
				return singular.concat(
					'<h1>',
						'Hello {{name}}',
					'</h1>'
				);
			}
		};
[Next Step](events.md)