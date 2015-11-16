# singular.http.request

The `request` function executes a HTTP request.

## Usage

singular.http.request(options).then(success, [failure]);

### Arguments

| Param | Type | Details |
| ----- | ---- | ------- |
| _options_ | `Object` | The object containing the request options. |
| _success_ | `Function` | The success callback |
| _failure_ | `Function` | The failure callback |

### Options

The `options` object can contain the following properties.

* options.method 
* options.url 
* options.username
* options.password

## Example

	<html>
		<body>
			<script src="singular.min.js"></script>
			<script>
				singular.http.request({
						method: 'GET',
						url: 'somepage.html'
					},
					function(data) {
						console.log(data);
					}
				);
			</script>
		</body>
	</html>
