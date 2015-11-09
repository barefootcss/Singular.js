# Building a Component

Let's build a basic component. Make a`example.html` file and paste the following code.
    
    <html>
        <body>
            <script src="../builds/singular.full.js"></script>
            <script>
 
            </script>
        </body>
    </html>

## What is a Component

A component is a collection of user-defined properties that are observed for changes.

    <html>
        <body>
            <script src="../builds/singular.full.js"></script>
            <script>
                var example = new singular.com.create({
                    name: 'World'
                });
            </script>
        </body>
    </html>

## The Heart of a Component

The `draw` reserved property calls a function that returns the HTML of your component.

    <html>
        <body>
            <script src="singular.min.js">
            <script>
                var example = new singular.com.create({
                    name: 'World',
                    draw: function(el) {
                        return "<h1>Hello " + this.name + "</h1>"
                    }
                });

                //
                // Render the component on the page.
                //

                singular.com.render(example, document.body);
            </script>
        </body>
    </html>

## Changing Properties

Each time a user-defined property changes, the `draw` callback function will update the UI.

    <html>
        <body>
            <script src="../builds/singular.full.js"></script>
            <script>
                var example = new singular.com.create({
                    name: 'World',
                    draw: function(el) {
                        return "<h1>Hello " + this.name + "</h1>"
                    }
                });

                example.name = 'Singular';
                
                //
                // Render the component on the page.
                //

                singular.com.render(example, document.body);
            </script>
        </body>
    </html>

## Templating

Double-brackets in the 'draw' return string will be replaced with the user-defined property.

    <html>
        <body>
            <script src="../builds/singular.full.js"></script>
            <script>
                var example = new singular.com.create({
                    name: 'World',
                    draw: function(el) {
                        return "<h1>Hello {{name}}</h1>"
                    }
                });

                example.name = 'Singular';

                //
                // Render the component on the page.
                //

                singular.com.render(example, document.body);
            </script>
        </body>
    </html>

## Concatenation

The `singular.concat` function retuns a string from an array, making writing HTML easier.

    <html>
        <body>
            <script src="../builds/singular.full.js"></script>
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
                // Render the component on the page.
                //

                singular.com.render(example, document.body);
            </script>
        </body>
    </html>

## Event Handling

The `init` reserved property is ideal for writing event handlers, since it is called only once.
    
    <html>
        <body>
            <script src="../builds/singular.full.js"></script>
            <script>
                var example = new singular.com.create({
                    name: 'World',
                    init: function(el) {
                        el.addEventListener('click', function(e) {
                            console.log("You clicked the component.");
                        });
                    },
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
                // Render the component on the page.
                //

                singular.com.render(example, document.body);
            </script>
        </body>
    </html>