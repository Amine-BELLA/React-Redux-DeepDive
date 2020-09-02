import React from 'react';
import { connect } from 'react-redux';
import { SUCCESS, FAILURE, USER_TEXT } from './action/actions.js';


function Component(props) {

    const myText = 'full name: BELLA Amine';
    return (
        <div>
            <button onClick={() => console.log(`${props.user_text} && ${props.connected}`)} >Get State</button>
            <button onClick={() => props.action1()}>Dispatch first action</button>
            <button onClick={() => props.action2()}>Dispatch second action</button>
            <button onClick={() => props.action3(myText)}>Dispatch third action</button>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        connected: state.connected,
        user_text: state.user_text
    }
}

function mapDispatchToProps(dispatch) {
    return {
        action1: () => dispatch(SUCCESS()),
        action2: () => dispatch(FAILURE()),
        action3: (text) => dispatch(USER_TEXT(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);