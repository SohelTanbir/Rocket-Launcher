const initialState = {
    rockets: [],
    searchName: ''
}

const dataReducer  = (state = initialState, action) =>{
    switch(action.type){
        case 'LOAD_DATA':{
            const newState = {
                ...state,
                rockets:[...state.rockets, action.payload]
            }
            return newState
        }
        case 'SEARCH_DATA':{
            const newState = {
                ...state,
                searchName: action.payload
            }
            return newState
 
        }
        default:{
            return state
        }
    }

}
export default dataReducer