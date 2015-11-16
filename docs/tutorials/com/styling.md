# Building a Component

## Styling

Most styling can be done using templates. 

	<html>
		<body>
			<div id="example"></div>

			<script src="singular.min.js"></script>
			<script>
				var example = {
					name: 'Singular',
					color: 'red'
					init: function(el) {
						el.addEventListener('click', function(){
							example.name = 'World';
							example.color = 'black';
						});
					},
					draw: function(el) {
						return singular.concat(
							'<h1 style="color: {{color}}">',
								'Hello {{name}}',
							'</h1>'
						);
					}
				};
				singular.renderOne(example, '#example');
			</script>
		</body>
	</html>
