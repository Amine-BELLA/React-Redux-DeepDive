import React from 'react';
import { connect } from 'react-redux';
import {SUCCESS, FAILURE} from './action/actions.js';


function Component(props) {


    return (
        <div>
            <button onClick={() => console.log(props.connected)} >Get State</button>
            <button onClick={() => props.action1()}>Dispatch first action</button>
            <button onClick={() => props.action2()}>Dispatch second action</button>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        connected: state.connected
    }
}

function mapDispatchToProps(dispatch) {
    return {
        action1: () => dispatch(SUCCESS()),
        action2: () => dispatch(FAILURE())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);