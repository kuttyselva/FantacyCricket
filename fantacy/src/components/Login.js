import React from 'react';
import {connect} from 'react-redux';
import {signIn,signOut} from '../actions/Index'
class Login extends React.Component{
    

    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'167801750446-1oq9pq3d9f8kbaesmost4rusjuhou3ug.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                this.auth=window.gapi.auth2.getAuthInstance();
                this.onAuthchange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthchange);
            })
        }); 
        
    }
    onAuthchange=(isSignedIn)=>{
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }
        else{
            this.props.signOut();
        }    
};
    onSignin=()=>{
        this.auth.signIn();
        console.log('signed in');
    };
    onSignout=()=>{
        this.auth.signOut();
        console.log('signed out ');
    };
    renderAuthButton(){ 
        // if(this.props.auth.isSignedIn ===null){
        //     return <div></div>
        // }
        if(this.props.auth.isSignedIn){
            return( <button className="btn btn-danger my-2 my-sm-0" onClick={this.onSignout}>
            <i class="fab fa-google-plus-g"></i>
                Signout
          
            </button> )
        }
        else{
            return( <button className="btn btn-danger my-2 my-sm-0"  onClick={this.onSignin}>
            <i class="fab fa-google-plus-g"></i>
            Signin
            
            </button> )
        }
    }
    render(){
   
        return (
            <div>{this.renderAuthButton()}</div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        auth:state.auth
    }
}
export default connect(mapStateToProps,{signIn,signOut})(Login);