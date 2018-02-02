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
        e.target.elements.option.value = '';
        renderCounter();
    }
};


const resetAll = () => {
    app.options = [];
    renderCounter(); 
};

const numbers = [55, 101, 1000];

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};


const renderCounter = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={resetAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }   
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
