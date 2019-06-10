import React,{Component} from 'react';
import Header from './components/Header'
import './App.css';
import Display from './components/Display';
import {connect} from 'react-redux'

class App extends Component {
 
  render(){
   
  return (
   <div>
    
     <Header/>
     {!this.props.auth.isSignedIn?
    <div>
      please Login to Select Your Team
    </div> :<Display/>
    }
         
        
   </div>
  );
  }
}
const mapStateToProps=(state)=>{
  return{
    auth:state.auth
  }
}

export default connect(mapStateToProps)(App);
