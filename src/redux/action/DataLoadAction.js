
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

// search data by rocket name
export const SearchData = (payload) =>{
    return {
        type:'SEARCH_DATA',
        payload
    }
}
// filter data by last year, last month, last weak, launch success
export const FilterData = (payload) =>{
    return{
        type:'FILTER_DATA',
        payload
    }
}