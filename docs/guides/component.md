# Building a Component

A component is a collection of user-defined properties that are observed for changes.

    <html>
        <body>
            <div id="#example"></div>

            <script src="singular.min.js">
            <script>
                var example = new singular.com.create({
                    name: 'World'
                });

                //
                // Renders the component in <div id="#example"></div>.
                //

                singular.com.render(example, document.getElementById("#example"));
            </script>
        </body>
    </html>

## Heart of a Component

The `draw` reserved property calls a function that returns the HTML of your component.

    <html>
        <body>
            <div id="#example"></div>

            <script src="singular.min.js">
            <script>
                var example = new singular.com.create({
                    name: 'World',
                    draw: function(el) {
                        return "<h1>Hello " + this.name + "</h1>"
                    }
                });

                //
                // Renders the component in <div id="#example"></div>.
                //

                singular.com.render(example, document.getElementById("#example"));
            </script>
        </body>
    </html>

## Changing Properties

Each time a user-defined property changes, the `draw` callback function will update the UI.

    <html>
        <body>
            <div id="#example"></div>

            <script src="singular.min.js">
            <script>
                var example = new singular.com.create({
                    name: 'World',
                    draw: function(el) {
                        return "<h1>Hello " + this.name + "</h1>"
                    }
                });

                example.name = 'Singular';

                //
                // Renders the component in <div id="#example"></div>.
                //

                singular.com.render(example, document.getElementById("#example"));
            </script>
        </body>
    </html>

## Templating

Double-brackets in the return string will be replaced with the user-defined property.

    <html>
        <body>
            <div id="#example"></div>

            <script src="singular.min.js">
            <script>
                var example = new singular.com.create({
                    name: 'World',
                    draw: function(el) {
                        return "<h1>Hello {{name}}</h1>"
                    }
                });

                example.name = 'Singular';

                //
                // Renders the component in <div id="#example"></div>.
                //

                singular.com.render(example, document.getElementById("#example"));
            </script>
        </body>
    </html>

## Concatenation

The `singular.concat` function retuns a string from an array, making writing HTML easier.

    <html>
        <body>
            <div id="#example"></div>

            <script src="singular.min.js">
            <script>
                var example = new singular.com.create({
                    name: 'World',
                    draw: function(el) {
                        return singular.concat(
                            "<h1>",
                                "Hello {{name}}",
                            "</h1>"
                        );
                    }
                });

                example.name = 'Singular';

                //
                // Renders the component in <div id="#example"></div>.
                //

                singular.com.render(example, document.getElementById("#example"));
            </script>
        </body>
    </html>

## Event Handling

The `init` reserved property is ideal for writing event handlers, since it is called only once.

    <html>
        <body>
            <div id="#example"></div>

            <script src="singular.min.js">
            <script>
                var example = new singular.com.create({
                    name: 'World',
                    init: function(el) {
                        el.addEventListener('click', function() {
                            console.log('You clicked the component.');
                        });
                    }
                    draw: function(el) {
                        return singular.concat(
                            "<h1>",
                                "Hello {{name}}",
                            "</h1>"
                        );
                    }
                });

                example.name = 'Singular';

                //
                // Renders the component in <div id="#example"></div>.
                //

                singular.com.render(example, document.getElementById("#example"));
            </script>
        </body>
    </html>