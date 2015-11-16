# singular.isNodeList

The `isNodeList` function returns true if the argument is a `NodeList`.

## Usage

singular.isNodeList(value);

### Arguments

| Param | Type | Details |
| ----- | ---- | ------- |
| _value_ | `*` | The value to check. |

### Returns

`boolean` True if `value` is a `NodeList`.

## Example

	<html>
		<body>
			<div></div>
			<div></div>
			<div></div>
			
			<script src="singular.min.js"></script>
			<script>
				var els = document.querySelectorAll('div');
				console.log(singular.isNodeList(els)); // True
			</script>
		</body>
	</html>
