# singular.each

The `each` function returns a `String` from a template.

## Usage

singular.each(value, cb);

### Arguments

| Param | Type | Details |
| ----- | ---- | ------- |
| _value_ | `Array` | The `Array` to iterate. |
|         | `Object` | The `Object` to iterate. |
| _cb_    | `Function` | The iterator `Function`. |

## Example

	<html>
		<body>
			<script src="singular.min.js"></script>
			<script>
				singular.each([
					"Item 1",
					"Item 2",
					"Item 3",
					"Item 4",
					],
					function(value, key) {
						console.log(value);
					}
				);
			</script>
		</body>
	</html>
