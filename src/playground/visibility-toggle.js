const app = {
    title: "Visibility Toggle",
    text: '',
    state: true
};

const appRoot = document.getElementById('app');

const changeState = () => {
    if(app.state) {
        app.state = false;
        app.text = 'Those are some details!';
        renderApp();
    } else {
        app.state = true;
        app.text = '',
        renderApp();
    }
}

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={changeState}>{app.state ? 'Show details' : 'Hide details'}></button>
            <p>{app.text}</p>
        </div>
    ) 
    ReactDOM.render(template, appRoot);
}


renderApp();
