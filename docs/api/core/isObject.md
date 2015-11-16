# singular.isObject

The `isObject` function returns true if the argument is an `Object`.

## Usage

singular.isObject(value);

### Arguments

| Param | Type | Details |
| ----- | ---- | ------- |
| _value_ | `*` | The value to check. |

### Returns

`boolean` True if `value` is an `Object`.

## Example

	<html>
		<body>
			<script src="singular.min.js"></script>
			<script>
				console.log(singular.isObject({
					name: 'Singular'
					}
				)); // True
			</script>
		</body>
	</html>
