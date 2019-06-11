import React from 'react';
import Landing from './components/Landing'
import './App.css';

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <h1 className="text-danger text-center"> 
          Welcome User
        </h1>
      <Landing/>
      </div>
    )
  }
}

export default App;
