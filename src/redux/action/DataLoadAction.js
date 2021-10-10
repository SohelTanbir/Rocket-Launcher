
export const dataLoader = ()=>{
    return (dispatch)=>{
        fetch(`https://api.spacexdata.com/v3/launches`)
        .then( res => res.json())
        .then(data => {
            dispatch( {
                type:'LOAD_DATA',
                payload:data
            })
        })
    }
}

export const SearchData = (payload) =>{
    return {
        type:'SEARCH_DATA',
        payload
    }
}