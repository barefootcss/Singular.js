# singular.isDefined

The `isDefined` function returns true if `value` is defined.

## Usage

singular.isDefined(value);

### Arguments

| Param | Type | Details |
| ----- | ---- | ------- |
| _value_ | `*` | The value to check. |

### Returns

`boolean` True if `value` is defined.

## Example

	<html>
		<body>
			<script src="singular.min.js"></script>
			<script>
				var message = "Singular";
				console.log(singular.isDefined(message)); // True
			</script>
		</body>
	</html>