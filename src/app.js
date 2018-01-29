console.log('app.js is running');



//JSX

var app = {
    title: 'Indecision app',
    subtitle: 'Poopy',
    options: ['One', 'Two']
};


var template = (
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


var userTwo = {
    title: 'Decision Making App',
    subtitle: 'This is cool, yo!'
};

var templateThree = (
    <div>
        <h1>{userTwo.title}</h1>
        <p>{userTwo.subtitle}</p>
    </div>
);

var user = {
    name: 'Mike',
    age: 25,
    location: 'New York'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    } 
}

var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
