import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UpdateTime } from './actions/index';

class Clock extends Component {

    componentDidMount(){
        setInterval(this.props.UpdateTime, 1000);
    }

    render(){
        return (
            <div className="text-center">
                <h1>{this.props.time}</h1>
            </div>
        )
    }
}


function mapStateToProps(state){
    console.log(state)
    return {
        time: state.clock.time
    }
}

export default connect(mapStateToProps, {
    UpdateTime,
})(Clock);

