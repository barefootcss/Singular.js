# Component Module

The `component` module contains members to create and render components.

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

__render(*component*, *el*)__

The `render` function is used to render a component in a container.

	<html>
		<body>
			<script src="singular.min.js"></script>

			<script>
				var component = new singular.com.create({
					draw: function(el) {
						return "<h1>Singular</h1>";
					}	
				});

				singular.com.render(component, document.body);
			</script>
		</body>
	</html>	

__renderAll(*component*, *selector*)__

The `renderAll` function calls render() for each match on a selector.

> Note: Because this function places the *same component* in multiple containers, changing a property will effect all instances of it on your page. 

	<html>
		<body>
			<div class="test"></div>
			<div class="test"></div>
			<div class="test"></div>
			
			<script src="singular.min.js"></script>

			<script>
				var component = new singular.com.create({
					draw: function(el) {
						return "<h1>Singular</h1>";
					}	
				});

				singular.com.renderAll(component, ".test");
			</script>
		</body>
	</html>	

## Properties

__init(*el*)__

The `init` property calls a function when the component is created.

	<html>
		<body>
			<script src="singular.min.js"></script>

			<script>
				var component = new singular.com.create({
					init: function(el) {
						console.log("The component was initialized.");
					}	
				});

				singular.com.render(component, document.body);
			</script>
		</body>
	</html>	

__draw(*el*)__

The `init` property calls a function when the component is created or changed.

	<html>
		<body>
			<script src="singular.min.js"></script>

			<script>
				var component = new singular.com.create({
					draw: function(el) {
						return "<h1>Singular</h1>";
					}	
				});

				singular.com.render(component, document.body);
			</script>
		</body>
	</html>	


