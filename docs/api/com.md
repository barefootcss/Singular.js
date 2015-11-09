# Com Module

The `com` module contains members to create and render components.

## Members

__create(*props*)__

The `create` function is used to create an observable component.

	<html>
		<body>
			<script src="singular.min.js"></script>

			<script>
				var component = new singular.com.create({
					draw: function(el) {
						return "<h1>Singular</h1>";
					}	
				});
			</script>
		</body>
	</html>	

__render(*component*, *selector*)__

The `render` function is used to render a component on the page.

	<html>
		<body>
			<div id="example"></div>

			<script src="singular.min.js"></script>

			<script>
				var component = new singular.com.create({
					draw: function(el) {
						return "<h1>Singular</h1>";
					}	
				});

				singular.com.render(component, '#example');
			</script>
		</body>
	</html>	

__template(*content*, *values*)__

The `template` function returns a string from a handlebar string.

This is called automatically by the draw function:

	<html>
		<body>
			<div id="example"></div>

			<script src="singular.min.js"></script>

			<script>
				console.log(singular.com.template("Hello {{name}}", {
					name: 'Singular'
				}));
			</script>
		</body>
	</html>	
