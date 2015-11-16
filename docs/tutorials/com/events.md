# Building a Component

## Events

The `init` reserved property is ideal for adding events, since it's only called once.

	<html>
		<body>
			<div id="example"></div>

			<script src="singular.min.js"></script>
			<script>
				var example = {
					name: 'Singular',
					init: function(el) {
						el.addEventListener('click', function(){
							example.name = 'World';
						});
					},
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

[Next Step](step-2.md)