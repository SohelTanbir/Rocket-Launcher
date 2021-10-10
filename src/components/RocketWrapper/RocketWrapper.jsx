import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { dataLoader } from '../../redux/action/DataLoadAction';
import RocketCard from '../RocketCard/RocketCard';


const RocketWrapper = () => {
    const rockets = useSelector(state => {
        return state.rocketData
    });
    const rocketName = rockets.searchName.length? rockets.searchName:false;
    const dispatch = useDispatch();
    useEffect(() => dispatch(dataLoader()), [dispatch])
    const filterData = rockets.rockets[0]?.filter(FilterRockets => rocketName?FilterRockets.rocket.rocket_name === `${rocketName}`: rockets);

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
                                <option selected>Filter By</option>
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
                <div className="row">
                    {
                        filterData?.length ? filterData?.map(singleRocket => <RocketCard rockets={singleRocket} />)
                            : <h5 className="py-5 text-center text-danger">Sorry data not found! try another name</h5>
                    }
                </div>
            </div>
        </>
    )
}

export default RocketWrapper;