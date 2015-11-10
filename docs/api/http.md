# Http Module

The `http` module contains members for making http requests.

## Members

__get(*url*, *{options}*)__

The `get` shorthand function executes a http `get` request.

	<html>
		<body>
			<script src="singular.min.js"></script>

			<script>
				singular.http.get('test.html').then(function(data) {
					console.log('The request was successful');
				});
			</script>
		</body>
	</html>	

__post(*url*, *data*, *{options}*)__

The `post` shorthand function executes a http `post` request.

	<html>
		<body>
			<script src="singular.min.js"></script>

			<script>
				singular.http.post('test.html', 'somedata').then(function(data) {
					console.log('The request was successful');
				});
			</script>
		</body>
	</html>	

__request(*{options}*)__

The `request` function executes a http request.
	
	<html>
		<body>
			<script src="singular.min.js"></script>

			<script>
				singular.http.request({method: 'get', url: 'test.html'}).then(function(data) {
					console.log('The request was successful');
				});
			</script>
		</body>
	</html>	

## Options

* options.method
* options.url
* options.username
* options.password
* options.data

