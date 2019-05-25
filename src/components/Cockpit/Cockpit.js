import React, { useEffect, useRef, useContext } from 'react';

import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const Cockpit = props => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated);

    useEffect(() => { // useEffect will run after every render cycle
        console.log('[Cockpit.js] useEffect');
        // Http request...
        // const timer = setTimeout(() => {
        //     alert('Saved data to cloud!');
        // }, 1000);
    // }, [props.persons]); // will run only when persons changes
        toggleBtnRef.current.click();
        return () => {
            // clearTimeout(timer);
            console.log('[Cockpit.js] cleanup work in useEffect'); // similar to componentWillUnmount()
        }
    }, []); // will run only for the first time bcz there are no dependencies

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        }
    }); // it will run for every update cycle

    const assignedclasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
        assignedclasses.push(classes.red);
    }
    if(props.personsLength <= 1) {
      assignedclasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedclasses.join(' ')}>This is really working!</p>
            <button ref={toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>   
            {/* <AuthContext.Consumer>
                {context => <button onClick={context.login}>Log in</button> }  
            </AuthContext.Consumer>      */}
            {<button onClick={authContext.login}>Log in</button> }  
        </div>
    );
};

export default React.memo(Cockpit); //only re-renders when input i.e, the props which are receiving changes