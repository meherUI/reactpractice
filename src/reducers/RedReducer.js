const initialState = {
    color:"red"
}
const RedReducer = (state=initialState,action) =>{
    console.log(action)
    switch(action.type){
        case "ADD_COLOR":
            return {...state,nxtColor:action.payload}
        default: return state
    }
}

export  default RedReducer