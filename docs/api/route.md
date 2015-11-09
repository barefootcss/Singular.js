# Route Module

The `route` module contains members to create and manage routes.

## Members

__call(*route*)__

The `call` function executes a route definition.

	singular.route.call('#/home');

__clear()__

The `clear` function clears all route definitions.

	singular.route.clear();

__ignore()__

The `ignore` function ignores changes made to the url hash.

	singular.route.ignore();

__listen()__

The `listen` function listens to the url hash for changes.

	singular.route.listen();

__map(*route*, *callback*)__

The `map` function creates a route definition.

	singular.route.map('#/home', function() {
		
	});

	singular.route.listen();

__unmap(*route*)__

The `unmap` function removes a route definition.

	singular.route.unmap('#/home');


