# singular.http.post

The `post` shorthand function executes a POST request.

## Usage

singular.http.post(url, data, [options]).then(success, [failure]);

### Arguments

| Param | Type | Details |
| ----- | ---- | ------- |
| _url_      | `String` | The `URL` of the request.
| _data_     | `*` | The data to be sent. |
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
				singular.http.post('somepage.html', 'Singular', function(data) {
					console.log('success');
				});
			</script>
		</body>
	</html>
