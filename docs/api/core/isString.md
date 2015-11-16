# singular.isString

The `isString` function returns true if the argument is a `String`.

## Usage

singular.isString(value);

### Arguments

| Param | Type | Details |
| ----- | ---- | ------- |
| _value_ | `*` | The value to check. |

### Returns

`boolean` True if `value` is a `String`.

## Example

	<html>
		<body>
			<script src="singular.min.js"></script>
			<script>
				console.log(singular.isString("Singular")); // True
			</script>
		</body>
	</html>