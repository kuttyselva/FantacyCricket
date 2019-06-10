import React,{Component} from 'react';
import Header from './components/Header'
import './App.css';
import Display from './components/Display';
import {connect} from 'react-redux'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import AddPlayer from './components/AddPlayer';

class App extends Component {
 
  render(){
   
  return (
   <div>
    
     <Header/>
     {!this.props.auth.isSignedIn?
    <div className="center-div ">
      <div className="container">
     <h1>please Login to Select Your Team</h1> 
      <img  src="https://i.pinimg.com/originals/8b/44/51/8b4451665d6b2139e29f29b51ffb1829.png" width="300px" alt=""/>
      </div>
    </div> :
    <Router>
    <Route exact path ='/' component={Display}/>
    <Route exact path ='/add' component={AddPlayer}/>
    </Router>
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
