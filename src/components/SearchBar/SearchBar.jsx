import React from 'react';

const SearchBar = () => {
    return (
        <div className="searchbar bg-light d-flex align-items-center" style={{height:'50vh', backgroundImage:`url(require("../../images/rocket-bg.jpg"))`}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Search by Rocket name here" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button class="btn btn-success" type="button" id="button-addon2">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;