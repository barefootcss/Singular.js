# Core Module

The `core` module contains top-level functions essential to the framework.

## Members

__concat(*string1*, *string2*...)__

The `concat` function returns a concatenated string from multiple arguments.

	<html>
		<body>
			<script src="singular.min.js"></script>

			<script>
				console.log(singular.concat(
					"<h1>",
						"Singular",
					"</h1>"
				)); //Returns "<h1>Singular</h1>"
			</script>
		</body>
	</html>

__each(*value*, *cb*)__

The `each` function executes a callback for each item in an object or array. 

	<html>
		<body>
			<script src="singular.min.js"></script>

			<script>
				singular.each(["abc", "def"], function(value) {
					console.log(value);
				});
				
				singular.each({name:'eric'}, function(prop, value) {
					console.log(value);
				});
			</script>
		</body>
	</html>

__template(**string**, **{values}**)__

The `template` function replaces double-brackets in a string with values.

	<html>
		<body>
			<script src="singular.min.js"></script>

			<script>
				console.log(singular.template("Hello {{name}}", {
					name: 'Singular'	
				})); //Returns "Hello Singular"
			</script>
		</body>
	</html>

__isArray(*value*)__

The `isArray` function returns true is the value is an array.

	<html>
		<body>
			<script src="singular.min.js"></script>

			<script>
				console.log(singular.isArray(["Singular"])); //Returns true
			</script>
		</body>
	</html>

__isBoolean(*value*)__

The `isBoolean` function returns true is the value is a boolean.

	<html>
		<body>
			<script src="singular.min.js"></script>

			<script>
				console.log(singular.isBoolean("Singular")); //Returns false
			</script>
		</body>
	</html>

__isDefined(*value*)__

The `isDefined` function returns true is the value is defined.

	<html>
		<body>
			<script src="singular.min.js"></script>

			<script>
				console.log(singular.isDefined("Singular")); //Returns true
			</script>
		</body>
	</html>

__isFunction(*value*)__

The `isFunction` function returns true is the value is a function.

	<html>
		<body>
			<script src="singular.min.js"></script>

			<script>
				console.log(singular.isFunction("Singular")); //Returns false
			</script>
		</body>
	</html>

__isNumber(*value*)__

The `isNumber` function returns true is the value is a number.

	<html>
		<body>
			<script src="singular.min.js"></script>

			<script>
				console.log(singular.isNumber("Singular")); //Returns false
			</script>
		</body>
	</html>

__isObject(*value*)__

The `isObject` function returns true is the value is an object.

	<html>
		<body>
			<script src="singular.min.js"></script>

			<script>
				console.log(singular.isObject("Singular")); //Returns false
			</script>
		</body>
	</html>

__isString(*value*)__

The `isString` function returns true is the value is a string.

	<html>
		<body>
			<script src="singular.min.js"></script>

			<script>
				console.log(singular.isString("Singular")); //Returns true
			</script>
		</body>
	</html>

__isUndefined(*value*)__

The `isUndefined` function returns true is the value is undefined.

	<html>
		<body>
			<script src="singular.min.js"></script>

			<script>
				console.log(singular.isUndefined("Singular")); //Returns false
			</script>
		</body>
	</html>
