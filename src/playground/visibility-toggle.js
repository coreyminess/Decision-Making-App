// Create a component VisibilityToggle - render, constructor, handleToggleVisibility (OnClick)
// visibility -> false; toggle between true and false.

class VisibilityToggle extends React.Component {
 
    constructor(props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToggle() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggle}>
                   {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>Hey. These are the details</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const appRoot = document.getElementById('app');

// const changeState = () => {
//     if(app.state) {
//         app.state = false;
//         app.text = 'Those are some details!';
//         renderApp();
//     } else {
//         app.state = true;
//         app.text = '',
//         renderApp();
//     }
// }

// const renderApp = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={changeState}>{app.state ? 'Show details' : 'Hide details'}></button>
//             <p>{app.text}</p>
//         </div>
//     ) 
//     ReactDOM.render(template, appRoot);
// }


// renderApp();
