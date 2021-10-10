import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SearchData } from '../../redux/action/DataLoadAction';

const SearchBar = () => {
    const [searchData, setSearchData ] = useState('')
    const handleOnChange =(e)=>{
        const trimSearchValue = e.target.value
        setSearchData(trimSearchValue)
}
const dispatch  = useDispatch();
console.log(searchData)
    return (
        <div className="searchbar bg-light d-flex align-items-center" style={{height:'50vh', backgroundImage:`url(require("../../images/rocket-bg.jpg"))`}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" name="rocket_name" onBlur={handleOnChange} placeholder="Search by Rocket name here" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button onClick={()=> dispatch(SearchData(searchData)) } class="btn btn-success" type="button" id="button-addon2">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;