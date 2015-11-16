# singular.route.map

The `map` function function creates a route definition.

## Usage

singular.route.map(route, cb);

### Arguments

| Param | Type | Details |
| ----- | ---- | ------- |
| _route_ | `String` | The URL fragment that will be matched on. |
| _cb_ | `Function` | The `Function` that will be called. |

> Note: Query parameters are ignored when matching.

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
			</script>
		</body>
	</html>
