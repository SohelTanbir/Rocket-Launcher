const initialState = {
    rockets: [{name:'Jamanullah'}]
}

const dataReducer  = (state = initialState, action) =>{

    switch(action.type){
        case 'LOAD_DATA':{
            const newState = {
                ...state,
                rockets:[{name:'sohelrana'}]
            }
            return newState
 
        }
        default:{
            return state
        }
    }

}
export default dataReducer