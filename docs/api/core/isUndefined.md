# singular.isUndefined

The `isDefined` function returns true if the argument is undefined.

## Usage

singular.isUndefined(value);

### Arguments

| Param | Type | Details |
| ----- | ---- | ------- |
| _value_ | `*` | The value to check. |

### Returns

`boolean` True if `value` is undefined.

## Example

	<html>
		<body>
			<script src="singular.min.js"></script>
			<script>
				var message;
				console.log(singular.isUndefined(message)); // True
			</script>
		</body>
	</html>
