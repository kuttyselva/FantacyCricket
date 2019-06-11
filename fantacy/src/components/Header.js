import React,{Component} from 'react'
import {Link,withRouter} from 'react-router-dom'
import Login from '../components/Login'
import { connect } from 'react-redux';
class Header extends Component {
  render(){
    return (
        <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-light">
  <a class="navbar-brand" href="#">Fantacy</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      
    </ul>
    <div class="form-inline my-2 my-lg-0" action="none">
    {(this.props.play.selected).length==10?            <Link to="/select"><button className="btn btn-success my-2 my-sm-0" >play</button></Link>
:null}
            
              
              &nbsp;
    <button className="btn btn-success my-2 my-sm-0" >
            
          Points: {this.props.play.point}
            
            </button>
            &nbsp;
        <Login/>
    </div>
  </div>
</nav>
    )
}
}
const mapStateToProps=(state)=>{
  return{
    play:state.play
  }
}
export default withRouter(connect(mapStateToProps)(Header));

