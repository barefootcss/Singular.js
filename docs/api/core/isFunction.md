# singular.isFunction

The `isFunction` function returns true if the argument is a `Function`.

## Usage

singular.isFunction(value);

### Arguments

| Param | Type | Details |
| ----- | ---- | ------- |
| _value_ | `*` | The value to check. |

### Returns

`boolean` True if `value` is a `Function`.

## Example

	<html>
		<body>
			<script src="singular.min.js"></script>
			<script>
				console.log(singular.isFunction(function() {

					}	
				)); // True
			</script>
		</body>
	</html>
