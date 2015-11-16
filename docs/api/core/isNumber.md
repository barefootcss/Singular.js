# singular.isNumber

The `isNumber` function returns true if the argument is a `Number`.

## Usage

singular.isNumber(value);

### Arguments

| Param | Type | Details |
| ----- | ---- | ------- |
| _value_ | `*` | The value to check. |

### Returns

`boolean` True if `value` is a `Number`.

## Example

	<html>
		<body>
			<script src="singular.min.js"></script>
			<script>
				console.log(singular.isNumber(1234)); // True
			</script>
		</body>
	</html>