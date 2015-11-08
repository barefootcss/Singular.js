# Core Module

The `core` module contains top-level functions essential to the framework.

## Members

__isDefined(*value*)__

The `isDefined` function returns true is the value is defined.

__isFunction(*value*)__

The `isFunction` function returns true is the value is a function.

__isString(*value*)__

The `isString` function returns true is the value is a string.

__isUndefined(*value*)__

The `isUndefined` function returns true is the value is undefined.

## Example

	<html>
		<body>
			<script src="singular.min.js"></script>

			<script>
				console.log(singular.isString("Singular"));
				console.log(singular.isFunction("Singular"));
				console.log(singular.isDefined("Singular"));
				console.log(singular.isUndefined("Singular"));
			</script>
		</body>
	</html>