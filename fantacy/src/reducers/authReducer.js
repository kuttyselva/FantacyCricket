const INITIAL_STATE={
    isSignedIn:null,
    userID:null
};
export default(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case 'SIGN_IN':
            return {...state,isSignedIn:true,userID:action.payload};
        case 'SIGN_OUT':
            return {...state,isSignedIn:false,userID:null};    
        default:
            return state;    
    }
}