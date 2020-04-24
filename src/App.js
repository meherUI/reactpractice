import React from 'react';
import logo from './logo.svg';
import './App.css';

import ModalPopUp from './components/ModalPopUp'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      showPopup: false
    }
    this.handleClick.bind(this)
  }
  handleClick= () =>{
    this.setState({
      showPopup: !this.state.showPopup
    })
  }
  render(){
    return (
      <div className="App">
        <button onClick={this.handleClick}>Modal</button>
        {this.state.showPopup && <ModalPopUp header="Modal Popup">
            {console.log("close",this.handleClick)}
            <p>Model Content</p>
            <h4>Modal Footer</h4>

            <button onClick={this.handleClick}>Close</button>
                  
            </ModalPopUp>}
      </div>
    );
  }
}

export default App;
