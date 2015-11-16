# Singular.js

SingularJS is a lightweight framework for building components. It is still under development.

__[Guides & API Documentation](docs/toc.md)__

# The Basics

	<html>
		<body>
			<script src="singular.min.js"></script>
			<script>
				var hello = {
					name: 'Singular',
					draw: function(el) {
						return "<h1>Hello {{name}}</h1>";
					}
				}
				singular.render(hello, document.body);
			</script>
		</body>
	</html>

# License

Copyright 2015 Eric Harms. Licensed under MIT.

# Thanks

Components couldn't observe changes without [WatchJS](https://github.com/melanke/Watch.JS) by Gil Lopes Bueno.