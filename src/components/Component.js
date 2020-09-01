import React from 'react';
import { connect } from 'react-redux';
import { FAILURE, SUCCESS } from './action/actions';
import { FIRST_ACTION, SECOND_ACTION } from './action/types';

function Component(props) {


    return (
        <div>
            <button onClick={() => console.log(props.myProp)} >Get State</button>
            <button onClick={() => props.action1()}>Dispatch first action</button>
            <button onClick={() => props.action2()}>Dispatch second action</button>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        myProp: state.connected
    }
}

function mapDispatchToProps(dispatch) {
    return {
        action1: () => dispatch(SUCCESS),
        action2: () => dispatch(FAILURE)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);