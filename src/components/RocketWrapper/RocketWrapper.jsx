import React from 'react';
import RocketCard from '../RocketCard/RocketCard';


const RocketWrapper = () => {
    return (
        <>
            <div className="container-fluid pt-3">
                <div className="row">
                    <div className="title col-md-10 col-sm-12">
                        <h5 className="fw-normal">All Rocket information</h5>
                    </div>
                    <div className="filter  text-end col-md-2 col-sm-12">
                        <div class="input-group mb-3">
                            <select class="form-select" id="inputGroupSelect01">
                                <option selected>Filter by</option>
                                <option value="1">Last Week</option>
                                <option value="2">Last Month</option>
                                <option value="3">Last Year</option>
                                <option value="3">Launch  Failure</option>
                                <option value="3">Launch  Success</option>
                                <option value="3">Is it upcoming?</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{ opacity: .1 }} />
            <div className="container">
                <RocketCard />
            </div>
        </>
    )
}

export default RocketWrapper;