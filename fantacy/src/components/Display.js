import React,{Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {select} from '../actions/Index'

class Display extends Component {
    state={
      
      bat:[],
      bow:[],
      wc:[],
      all:[],
      point:100
    }
    componentDidMount(){
      this.getbat();
      this.getbow();
      this.getall();
      this.getwc();

    }
    getbat=_=>{
      axios.get('http://localhost:3001/')
      // .then(res=>console.log(res.data))
      .then(res=>this.setState({bat:res.data}))
      
    }
    getbow=_=>{
      axios.get('http://localhost:3001/bow')
      // .then(res=>console.log(res.data))
      .then(res=>this.setState({bow:res.data}))
      
    }
    getall=_=>{
      axios.get('http://localhost:3001/all')
      // .then(res=>console.log(res.data))
      .then(res=>this.setState({all:res.data}))
      
    }
    getwc=_=>{
      axios.get('http://localhost:3001/wc')
      // .then(res=>console.log(res.data))
      .then(res=>this.setState({wc:res.data}))
      
    }
    renderbat=()=>(
      this.state.bat.data?this.state.bat.data.map((data,ind)=>(
        <div className="card col-2" style={{width:'15rem',margin:'1rem'}}>
        <img className="card-img-top img-thumbnail" src={data.img} alt="Card image cap"/>
        <div className="card-body text-justify">
          <h5 className="card-title">{data.name}</h5>
          <p className="card-text">{data.pos} - {data.team}</p>
          <a href="#" className="btn btn-primary">Points {data.point}</a>
        </div>
      </div>     
      )):null
    )
    renderbow=()=>(
      this.state.bow.data?this.state.bow.data.map((data,ind)=>(
        <div className="card col-2" style={{width:'15rem',margin:'1rem'}}>
        <img className="card-img-top img-thumbnail" src={data.img} alt="Card image cap"/>
        <div className="card-body text-justify">
          <h5 className="card-title">{data.name}</h5>
          <p className="card-text">{data.pos} - {data.team}</p>
          <a href="#" className="btn btn-primary">Points {data.point}</a>
        </div>
      </div>         
      )):null
    )
    renderall=()=>(
      this.state.all.data?this.state.all.data.map((data,ind)=>(
        <div className="card col-2" style={{width:'15rem',margin:'1rem'}}>
        <img className="card-img-top img-thumbnail" src={data.img} alt="Card image cap"/>
        <div className="card-body text-justify">
          <h5 className="card-title">{data.name}</h5>
          <p className="card-text">{data.pos} - {data.team}</p>
          <a href="#" className="btn btn-primary">Points {data.point}</a>
        </div>
      </div>         
      )):null
    )
    renderwc=()=>(
      this.state.wc.data?this.state.wc.data.map((data,ind)=>(
        <div className="card col-2" style={{width:'15rem',margin:'1rem'}}>
        <img className="card-img-top img-thumbnail" src={data.img} alt="Card image cap"/>
        <div className="card-body text-justify">
          <h5 className="card-title">{data.name}</h5>
          <p className="card-text">{data.pos} - {data.team}</p>
          <a href="#" className="btn btn-primary">Points {data.point}</a>
        </div>
      </div>           
      )):null
    )
    render(){
    
    return (
      <div classNameName="container">
        <button className="btn btn-dark">Batsmen</button><br/>
        <div className="row">
       {this.renderbat()}
       </div>
       <button className="btn btn-dark">Bowlers</button><br/>
       <div className="row">
       {this.renderbow()}
       </div>
       <button className="btn btn-dark">All rounders</button><br/>
       <div className="row">
       {this.renderall()}
       </div>
       <button className="btn btn-dark">Wicker Keeper</button><br/>
       <div className="row">
       {this.renderwc()}
       </div>
      </div>
    );
    }
  }
  const mapStateToProps=(state)=>{
    return{
      play:state.play
    }
  }
  
  export default connect(mapStateToProps,{select})(Display);
  