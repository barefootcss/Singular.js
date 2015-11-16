# singular.concat

The `concat` function concatenates multiple arguments and returns a `String`.

## Usage

singular.concat(value1, value2...);

### Arguments

| Param | Type | Details |
| ----- | ---- | ------- |
| _value_ | `String` | A `String` to concatenate. |

### Returns

`String` The string with the arguments concatenated.

## Example

	<html>
		<body>
			<script src="singular.min.js"></script>
			<script>
				console.log(singular.concat(
					"Hello ",
					"Singular"
				)); 
			</script>
		</body>
	</html>
