console.log('app.js is running');

//JSX

const app = {
    title: 'Indecision app',
    subtitle: 'Poopy',
    options: []
};

const onFormSubmit = (e) => {
    //prevent full page refresh
    e.preventDefault();

    const option = e.target.elements.option.value;
    //ignore form submission until something is inputted. Add inputs to array.

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = ', ';
        renderCounter();
    }
};


const renderCounter = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options}</p>
            <p>{app.options.length}</p>
            <ol>
                <li>Item one</li>
                <li>Item two</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('app');
renderCounter();
