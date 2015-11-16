# singular.route.unmap

The `unmap` function function removes a route definition.

## Usage

singular.route.unmap(route);

### Arguments

| Param | Type | Details |
| ----- | ---- | ------- |
| _route_ | `String` | The URL fragment that will be removed. |

## Example

	<html>
		<body>
			<ul>
				<li><a href="#/home">Home</a></li>
				<li><a href="#/help">Help</a></li>
			</ul>

			<script src="singular.min.js"></script>
			<script>
				singular.route.map('#/home', function() {
					console.log('You clicked Home.');
				});
				
				singular.route.map('#/help', function() {
					console.log('You clicked Help.');
				});

				singular.route.listen();
				singular.route.unmap('#/home');
			</script>
		</body>
	</html>
