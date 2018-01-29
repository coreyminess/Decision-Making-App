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


const userTwo = {
    title: 'Decision Making App',
    subtitle: 'This is cool, yo!'
};

const templateThree = (
    <div>
        <h1>{userTwo.title}</h1>
        <p>{userTwo.subtitle}</p>
    </div>
);

const user = {
    name: 'Mike',
    age: 25,
    location: 'New York'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    } 
}

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
