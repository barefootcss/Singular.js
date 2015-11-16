# singular.http.get

The `get` shorthand function executes a GET request.

## Usage

singular.http.get(url, [options]).then(success, [failure]);

### Arguments

| Param | Type | Details |
| ----- | ---- | ------- |
| _url_      | `String` | The `URL` of the request.
| _options_  | `Object` | The object containing the request options. |
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
				singular.http.get("somepage.html", function(data) {
						console.log(data);
				});
			</script>
		</body>
	</html>
