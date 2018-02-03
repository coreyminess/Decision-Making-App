const obj = {
    name: 'Vikram',
    getName() {
        return this.name;
    }
};

const getName = obj.getName.bind(obj);

console.log(getName());

class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Thing one', 'Thing two', 'Thing three'];
       
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
        alert('poopy boi')
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

// Add Remove All Button
class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll() {
        console.log(this.props.options);
        // alert('Poop poop poop')
    }

    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Reset All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                Option: {this.props.optionText}
            </div>
        );
    }
}


// 1. Setup the form with text input and submit button - already have this form in jsx-indecision.js. Want to setup the exact same way
// 2. Wire up the onSubmit - need to call method when form is submitted 
// 3. Define the method we are going to wire up - handleAddOption -> fetch the value typed -> if value, then alert

class AddOption extends React.Component {
    handleAddOption(e) {
        //prevent full page refresh
        e.preventDefault();
    
        const option = e.target.elements.option.value.trim();
    
        if (option) {
            alert(option);
        }
    }

    render() {
        return (
            <form onSubmit={this.handleAddOption}>
                <input type ="text" name="option"/>
                <button>Add Option</button>
            </form>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));