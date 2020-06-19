import React, { Component } from 'react'
import {connect} from 'react-redux'

class RedComponent extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <h3>Red</h3>
                {this.props.red.nxtColor && this.props.red.nxtColor }
                <button onClick={this.props.addColor}>Red</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        blue: state.blueReducer,
        red: state.redReducer
    }
}
function mapDispatchToProps(dispatch){
    return{
        addColor: () =>{dispatch({type:"ADD_COLOR",payload:"yellow"})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RedComponent)