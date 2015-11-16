# singular.template

The `template` function replaces double-brackets in a `String` with values.

## Usage

singular.template(content, values);

### Arguments

| Param | Type | Details |
| ----- | ---- | ------- |
| _content_ | `String` | The `String` containing double-brackets. |
| _values_ | `Object` | The `Object` containing the values. |

> Note: The properties in the `Object` can be deeply nested.

### Returns

`String` The string with the double-brackets replaced.

## Example

	<html>
		<body>
			<script src="singular.min.js"></script>
			<script>
				console.log(singular.template("Hello {{name}}", {
						name: 'Singular'
					}
				)); 
			</script>
		</body>
	</html>
