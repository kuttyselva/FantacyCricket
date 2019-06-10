import React,{Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {select,players} from '../actions/Index'

class Display extends Component {
    state={
      
      bat:[],
      bow:[],
      wc:[],
      all:[],
      point:100,
      btc:0,
      bwc:0,
      wcc:0,
      arc:0,
      btn:'btn btn-dark'
      
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
      this.state.bat.data?
      (this.state.btc<5 && this.props.play.point>0)?
      this.state.bat.data.map((data,ind)=>(
        <div className="card col-2" style={{width:'15rem',margin:'1rem'}}>
        <img className="card-img-top img-thumbnail" src={data.img} alt="Card image cap"/>
        <div className="card-body text-justify">
          <h5 className="card-title">{data.name}</h5>
          <p className="card-text">{data.pos} - {data.team}</p>
          <a href="#" className={this.state.btn} onClick={()=>{ 
            this.props.select(this.props.play.point-data.point)
            this.props.players(data)
            this.setState({btc:this.state.btc+1})
            

            }}>Points {data.point}</a>
        </div>
      </div>     
      )):alert("Batsmen Limit is 4 :p refresh to Choose from first")
      :null
    )
    renderbow=()=>(
      this.state.bow.data?
      (this.state.bwc<5 &&this.props.play.point>0)?
      this.state.bow.data.map((data,ind)=>(
        <div className="card col-2" style={{width:'15rem',margin:'1rem'}}>
        <img className="card-img-top img-thumbnail" src={data.img} alt="Card image cap"/>
        <div className="card-body text-justify">
          <h5 className="card-title">{data.name}</h5>
          <p className="card-text">{data.pos} - {data.team}</p>
          <a href="#" className={this.state.btn} onClick={()=>{ 
            this.props.select(this.props.play.point-data.point)
            this.props.players(data)
            this.setState({bwc:this.state.bwc+1})
           
            }}>Points {data.point}</a>
        </div>
      </div>         
      )):alert("Bowlers Limit is 4 :p refresh to Choose from first")
      :null
    )
  
    renderall=()=>(
      this.state.all.data?
      (this.state.arc<2 && this.props.play.point>0)?
      this.state.all.data.map((data,ind)=>(
        <div className="card col-2" style={{width:'15rem',margin:'1rem'}}>
        <img className="card-img-top img-thumbnail" src={data.img} alt="Card image cap"/>
        <div className="card-body text-justify">
          <h5 className="card-title">{data.name}</h5>
          <p className="card-text">{data.pos} - {data.team}</p>
          <a href="#" className={this.state.btn} onClick={()=>{ 
            this.props.select(this.props.play.point-data.point)
            this.props.players(data)
            this.setState({arc:this.state.arc+1})
           
            }}>Points {data.point}</a>
        </div>
      </div>         
      )):alert("All Rounder Limit is 1 :p refresh to Choose from first")
      :null
    )
    renderwc=()=>(
      this.state.wc.data?
      (this.state.wcc<2 && this.props.play.point>0 )?
      this.state.wc.data.map((data,ind)=>(
        <div className="card col-2" style={{width:'15rem',margin:'1rem'}}>
        <img className="card-img-top img-thumbnail" src={data.img} alt="Card image cap"/>
        <div className="card-body text-justify">
          <h5 className="card-title">{data.name}</h5>
          <p className="card-text">{data.pos} - {data.team}</p>
          <a href="#" className={this.state.btn} onClick={()=>{ 
            this.props.select(this.props.play.point-data.point)
            this.props.players(data)
            this.setState({wcc:this.state.wcc+1})
            
            }}>Points {data.point}</a>
        </div>
      </div>           
      )):alert("Wicket Keeper Limit is 1 :p refresh to Choose from first")
      :null
    )
    render(){
    
    return (
      <div classNameName="container"><br/>
      {console.log(this.state)}
        <button className="btn btn-dark"><h1 className="display-3">Batsmen</h1></button><br/>
        <div className="row">
       {this.renderbat()}
       </div>
       <button className="btn btn-dark"><h1 className="display-3">Bowlers</h1></button><br/>
       <div className="row">
       {this.renderbow()}
       </div>
       <button className="btn btn-dark"><h1 className="display-3">All rounders</h1></button><br/>
       <div className="row">
       {this.renderall()}
       </div>
       <button className="btn btn-dark"><h1 className="display-3">Wicker Keeper</h1></button><br/>
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
  
  export default connect(mapStateToProps,{select,players})(Display);
  