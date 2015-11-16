# singular.route.clear

The `clear` function removes all route definitions.

## Usage

singular.route.clear();

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

				singular.route.clear();
			</script>
		</body>
	</html>
