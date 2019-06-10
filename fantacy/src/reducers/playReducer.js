const INITIAL_STATE={
    selected:[],
    point:100
};
export default(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case 'GET_SELECT':
            return {...state,selected:[action.payload, ...state.selected]};         
        case 'UPDATE_PLAY':
            return {...state,point:action.payload};    
        default:
            return state;    
    }
}