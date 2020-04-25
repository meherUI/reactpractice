import React, { Component } from 'react'


export default class ModalPopUp extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="popup">
                <div className="popupBody">
                    <h2>{this.props.header}</h2>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
