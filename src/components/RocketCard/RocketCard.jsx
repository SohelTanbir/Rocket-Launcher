import img from '../../images/rocket-bg.jpg'

const RocketCard = ({rocket}) => {
  console.log(rocket)
    return (
            <div className="col-md-3">
                <div className="card mb-3">
                    <img src={img} className="card-img-top" alt="..." style={{ height: '12rem' }} />
                    <div className="card-body">
                        <h5 className="card-title">{rocket.name}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Show Details</a>
                    </div>
                </div>
            </div>
    )
}

export default RocketCard;