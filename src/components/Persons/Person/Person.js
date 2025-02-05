import React, { Component, Fragment } from 'react';
// Fragment is similar to Aux created
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import classes from './Person.css'
import AuthContext from '../../../context/auth-context';

class Person extends Component { 
    constructor(props) {
        super();
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext; // format and spellings should not change.
                                      // Allows react to automatically connect the component

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        console.log('[Person.js] rendering...');
        return (
            <Aux>
                {/* <AuthContext.Consumer>
                    {context => 
                        context.authenticated? <p>Authenticated!</p>: <p>Please log in</p>
                    }
                </AuthContext.Consumer> */}
                {this.context.authenticated? <p>Authenticated!</p>: <p>Please log in</p>}
                <p onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                <p>{this.props.children}</p>
                <input 
                    type="text" 
                   // ref={(inputEl) => {this.inputElement = inputEl}}
                    ref = {this.inputElementRef}
                    onChange={this.props.changed} 
                    value={this.props.name} 
                />
            </Aux>
        );
    }  
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);