# singular.route.call

The `call` function calls the callback `Function` of a route definition.

## Usage

singular.route.call(route);

### Arguments

| Param | Type | Details |
| ----- | ---- | ------- |
| _route_ | `String` | The URL fragment to match on. |

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
				singular.route.call('#/home');
			</script>
		</body>
	</html>
