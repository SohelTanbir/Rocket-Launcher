

export const dataLoader = (payload)=>{
    return (dispatch, getState)=>{
        fetch('https://api.spacexdata.com/v3/launches')
        .then( res => res.json())
        .then(data => {
            return{
                type:'LOAD_DATA',
                payload:data
            }
        })
    }

}
