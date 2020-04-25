import React from 'react'

export default function ModalPopUpData(props) {
    return (
        <div>
             <p>{props.title}</p>
             <h4>{props.data}</h4>
            <button onClick={props.handleClose}>Close</button>
        </div>
    )
}
