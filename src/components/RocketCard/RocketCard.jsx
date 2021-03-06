import React from 'react';


const RocketCard = ({rockets}) => {
const { links, flight_number, details,rocket,mission_name, launch_success, launch_year, upcoming, launch_date_local, launch_date_unix, launch_date_utc, mission_id  } = rockets
console.log(rockets)
    return (
            <div className="col-md-3">
                <div className="card mb-3">
                    <img src={links?.mission_patch} className="card-img-top p-1" alt="..." style={{ height: '10rem', width:'80%', margin:'auto'}} />
                    <div className="card-body text-center">
                        <h6 className="card-title">Rocket name: {rocket.rocket_name}</h6>
                        <h6 className="card-title">Mission name: {mission_name}</h6>
                        <h6 className="card-text">Flight number: {flight_number}</h6>
                        <h6 className="card-text">Launch_year: {launch_year}</h6>
                        <a href={links.video_link}  target="_blank" className="btn btn-primary btn-sm float-none mt-3">Watch video</a>
                    </div>
                </div>
            </div>
    )
}

export default RocketCard;