import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SearchData } from '../../redux/action/DataLoadAction';
import backgroundImg  from '../../images/rocket-bg.jpg'
const SearchBar = () => {
    const [searchData, setSearchData ] = useState('')
    const handleOnChange =(e)=>{
        const trimSearchValue = e.target.value
        setSearchData(trimSearchValue)
}
const dispatch  = useDispatch();

    return (
        <div className="searchbar bg-light d-flex align-items-center" style={{height:'50vh',  backgroundImage: `url(${backgroundImg})`, backgroundPosition:'center center', backgroundSize:'cover',}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" name="rocket_name" onBlur={handleOnChange} placeholder="Search Rocket name " aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button onClick={()=> dispatch(SearchData(searchData)) } class="btn btn-success" type="button" id="button-addon2">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;