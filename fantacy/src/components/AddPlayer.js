import React,{Component} from 'react';
import axios from 'axios';
class AddPlayer extends Component {

  state={
   
   players:{
     name:'',
     pos:'',
     team:'',
     point:'',
     img:'',

   }
  }
 
 
  


Onupd=()=>{
  const {players}=this.state;
  console.log(players)
  fetch(`http://localhost:3001/aa?name=${players.name}&pos=${players.pos}&team=${players.team}&img=${players.img}&point=${players.point}`)
  
  
}

  render() {
    
  return (
    
    <div className="container center-div">
        <br/><br/><br/>
      {/* {console.log(this.state.products)} */}
     
      <h1 class="display-4 text-center">Add a Player</h1>
      
      <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Player Name</label>
    <input type="text" className="form-control" name="name" value={this.state.players.name} onChange={e=>this.setState({players:{...this.state.players,name:e.target.value}})}/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Position</label>
    <input type="text" name="name" className="form-control" value={this.state.players.pos} onChange={e=>this.setState({players:{...this.state.players,pos:e.target.value}})}/>
    <small id="emailHelp" class="form-text text-muted">eg(bat,bow,wc,all)</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Image Source</label>
    <input type="text" name="name" className="form-control" value={this.state.players.img} onChange={e=>this.setState({players:{...this.state.players,img:e.target.value}})}/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Team</label>
    <input type="text" name="name" className="form-control" value={this.state.players.Team} onChange={e=>this.setState({players:{...this.state.players,team:e.target.value}})}/>
    <small id="emailHelp" class="form-text text-muted">eg(ind,aus)</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Points</label>
    <input type="text" name="name" className="form-control" value={this.state.players.point} onChange={e=>this.setState({players:{...this.state.players,point:e.target.value}})}/>
    
  </div>

  <input type="button" value="submit" className="btn btn-dark form-control" onClick={this.Onupd}/>
</form>


{/* 
    <input type="text" name="name" value={this.state.players.name} onChange={e=>this.setState({players:{...this.state.players,name:e.target.value}})}/>
    <input type="text" name="email" value={this.state.players.email} onChange={e=>this.setState({players:{...this.state.players,email:e.target.value}})}/>
    <input type="text" name="pno" value={this.state.players.pno} onChange={e=>this.setState({players:{...this.state.players,pno:e.target.value}})}/> */}

       
     
    </div>
  );
}
}
export default AddPlayer;
