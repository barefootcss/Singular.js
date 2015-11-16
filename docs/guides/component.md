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

A component is an object that is observed for changes.

    <html>
        <body>
            <script src="../builds/singular.full.js"></script>
            <script>
                var example = {
                    name: 'World'
                };
            </script>
        </body>
    </html>

## The Heart of a Component

The `draw` reserved property calls a function that returns the HTML of your component.

    <html>
        <body>
            <script src="singular.min.js">
            <script>
                var example = {
                    name: 'World',
                    draw: function(el) {
                        return "<h1>Hello " + this.name + "</h1>"
                    }
                };

                //
                // Render the component on the page.
                //

                singular.renderOne(example, document.body);
            </script>
        </body>
    </html>

## Changing Properties

Each time a user-defined property changes, the `draw` callback function will update the UI.

    <html>
        <body>
            <script src="../builds/singular.full.js"></script>
            <script>
                var example = {
                    name: 'World',
                    draw: function(el) {
                        return "<h1>Hello " + this.name + "</h1>"
                    }
                };

                example.name = 'Singular';
                
                //
                // Render the component on the page.
                //

                singular.renderOne(example, document.body);
            </script>
        </body>
    </html>

## Templating

Double-brackets in the 'draw' return string will be replaced with the user-defined property.

    <html>
        <body>
            <script src="../builds/singular.full.js"></script>
            <script>
                var example = {
                    name: 'World',
                    draw: function(el) {
                        return "<h1>Hello {{name}}</h1>"
                    }
                };

                example.name = 'Singular';

                //
                // Render the component on the page.
                //

                singular.renderOne(example, document.body);
            </script>
        </body>
    </html>

## Concatenation

The `singular.concat` function retuns a string from an array, making writing HTML easier.

    <html>
        <body>
            <script src="../builds/singular.full.js"></script>
            <script>
                var example = {
                    name: 'World',
                    draw: function(el) {
                        return singular.concat(
                            "<h1>",
                                "Hello {{name}}",
                            "</h1>"
                        );
                    }
                };

                example.name = 'Singular';

                //
                // Render the component on the page.
                //

                singular.renderOne(example, document.body);
            </script>
        </body>
    </html>

## Event Handling

The `init` reserved property is ideal for writing event handlers, since it is called only once.
    
    <html>
        <body>
            <script src="../builds/singular.full.js"></script>
            <script>
                var example = {
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
                };

                example.name = 'Singular';

                //
                // Render the component on the page.
                //

                singular.renderOne(example, document.body);
            </script>
        </body>
    </html>

## Event Handling

Most simple DOM manipulation can be done with double-brackets.
    
    <html>
        <body>
            <script src="../builds/singular.full.js"></script>
            <script>
                var example = {
                    bgcolor: 'red',
                    name: 'World',
                    init: function(el) {
                        el.addEventListener('click', function(e) {
                            console.log("You clicked the component.");
                        });
                    },
                    draw: function(el) {
                        return singular.concat(
                            '<h1 style="background: {{bgcolor}}">',
                                'Hello {{name}}',
                            '</h1>'
                        );
                    }
                };

                example.name = 'Singular';

                //
                // Render the component on the page.
                //

                singular.renderOne(example, document.body);
            </script>
        </body>
    </html>    

## jQuery Integration

The `el` attribute can be wrapped inside of a jQuery object.

    <html>
        <body>
            <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
            <script src="../builds/singular.full.js"></script>
            <script>
                var example = {
                    bgcolor: 'red',
                    name: 'World',
                    init: function(el) {
                        el.addEventListener('click', function(e) {
                            console.log("You clicked the component.");
                        });
                    },
                    draw: function(el) {
                        $(el).css('margin', '1.5rem');
                        return singular.concat(
                            '<h1 style="background: {{bgcolor}}">',
                                'Hello {{name}}',
                            '</h1>'
                        );
                    }
                };

                example.name = 'Singular';

                //
                // Render the component on the page.
                //

                singular.renderOne(example, document.body);
            </script>
        </body>
    </html>    
