export const signIn=(userID)=>{
    return{
        type:'SIGN_IN',
        payload:userID
    };
};
export const signOut=()=>{
    return{
        type:'SIGN_OUT'
    }
}
export const select=(data)=>{
    return{
        type:'UPDATE_PLAY',
        payload:data
    }
}