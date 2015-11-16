# singular.isArray

The `isArray` function returns true if the argument is an `Array`.

## Usage

singular.isArray(value);

### Arguments

| Param | Type | Details |
| ----- | ---- | ------- |
| _value_ | `*` | The value to check. |

### Returns

`boolean` True if `value` is an `Array`.

## Example

	<html>
		<body>
			<script src="singular.min.js"></script>
			<script>
				console.log(singular.isArray([
						"Item 1",
						"Item 2"
					]
				)); // True
			</script>
		</body>
	</html>
