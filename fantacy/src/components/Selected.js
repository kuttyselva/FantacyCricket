import React, { Component } from 'react'
import { connect } from 'react-redux';
class Selected extends Component {

    renderbat=()=>(
        this.props.play?
        
        this.props.play.map((data,ind)=>(
          <div className="card col-2" style={{width:'15rem',margin:'1rem'}}>
          <img className="card-img-top img-thumbnail" src={data.img} alt="Card image cap"/>
          <div className="card-body text-justify">
            <h5 className="card-title">{data.name}</h5>
            <p className="card-text">{data.pos} - {data.team}</p>
           
          </div>
        </div>     
        ))
        :null
      )
    render() {
        return (
            <div classNameName="container"><br/>
            {console.log(this.props.play)}
              <button className="btn btn-dark"><h1 className="display-3">Selected Players</h1></button><br/>
              <div className="row">
             {this.renderbat()}
             </div>
             </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        play:state.play.selected
    }
}
export default connect(mapStateToProps)(Selected);
