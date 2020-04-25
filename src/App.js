import React from 'react';
import logo from './logo.svg';
import './App.css';

import ModalPopUp from './components/ModalPopUp'
import ModalPopUpData from './components/ModalPopUpData'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      showPopup: false,
      data:"content"
    }
    this.handleClick.bind(this)
    this.handleClose.bind(this)
  }
  handleClick= () =>{
    this.setState({
      ...this.state,
      showPopup: !this.state.showPopup
    })
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
  }

  handleClose=()=>{
    this.setState({
      ...this.state,
      showPopup: !this.state.showPopup
    })
  }
  
  render(){
    return (
      <div className="App">
        <button onClick={this.handleClick}>Modal</button>
        {this.state.showPopup && <ModalPopUp header="Modal Popup">
           <ModalPopUpData 
              title="Modal Header"
              data={this.state.data}
              handleClose = {this.handleClose}/> 
          </ModalPopUp>}
      </div>
    );
  }
}

export default App;
