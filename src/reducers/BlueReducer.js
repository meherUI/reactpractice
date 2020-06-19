const initialState = {
    color:"blue"
}
const BlueReducer = (state=initialState,action) =>{
    switch(action.type){
        case "ADD_COLOR":
            return {...state,"name":"me"}
        default: return state
    }
}

export  default BlueReducer