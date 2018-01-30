'use strict';

console.log('app.js is running');

//JSX

var app = {
    title: 'Indecision app',
    subtitle: 'Poopy',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    //prevent full page refresh
    e.preventDefault();

    var option = e.target.elements.option.value;
    //ignore form submission until something is inputted. Add inputs to array.

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = ', ';
        renderCounter();
    }
};

var renderCounter = function renderCounter() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            'p',
            null,
            app.options
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'ol',
            null,
            React.createElement(
                'li',
                null,
                'Item one'
            ),
            React.createElement(
                'li',
                null,
                'Item two'
            )
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');
renderCounter();
