import location from "../public/assets/location.png"
import "./Card.css"

function Card(props) {
    console.log(props)
    return (
        <div>
            <div className="card">
                <img src={props.imageUrl} alt={props.title} className="card--img" />
                <div>
                    <div className="card--country">
                        <img src={ location } alt="location" />
                        <span className="location">{props.location}</span>
                        <a href={props.googleMapsUrl} className="map"><span>View on Google Maps</span></a>
                    </div>
                    <h2 className="card--title">{props.title}</h2>
                    <div className="card--date">{`${props.startDate} - ${props.endDate}`}</div>
                    <p className="card--desc">{props.description}</p>
                </div>
            </div>
            {props.id <= props.noOfItems-1 && <hr />}
        </div>
    )
}

export default Card