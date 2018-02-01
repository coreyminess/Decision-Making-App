'use strict';

var app = {
    title: "Visibility Toggle",
    text: '',
    state: true
};

var appRoot = document.getElementById('app');

var changeState = function changeState() {
    if (app.state) {
        app.state = false;
        app.text = 'Those are some details!';
        renderApp();
    } else {
        app.state = true;
        app.text = '', renderApp();
    }
};

var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        React.createElement(
            'button',
            { onClick: changeState },
            app.state ? 'Show details' : 'Hide details',
            '>'
        ),
        React.createElement(
            'p',
            null,
            app.text
        )
    );
    ReactDOM.render(template, appRoot);
};

renderApp();
