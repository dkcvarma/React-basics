import React from 'react';
// import Radium from 'radium';

import classes from './Person.css'

const Person = (props) => {
    // const style = {
    //     '@media (min-width": 500px)' : { // Random is required
    //         width: '450px'
    //     }
    // };
    return (
        <div className={classes.person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default Person;
// export default Radium(Person);