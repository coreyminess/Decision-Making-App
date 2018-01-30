console.log('app.js is running');



//JSX

const app = {
    title: 'Indecision app',
    subtitle: 'Poopy',
    options: ['One', 'Two']
};


const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <p>{app.options}</p>
        <ol>
           <li>Item one</li>
           <li>Item two</li>
        </ol>
    </div>
);

let count = 0;

const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
