import React from "react";
import propTypes from "prop-types";
import "../../styles/card.css";


const VehicleCard = (props) => {
    return (
        <>
            <div className="condensedCard card m-1">
                <img 
                    src={props.img} 
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src="https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
                      }} 
                    className="card-img-top" 
                    alt={props.name} 
                />
                <div className="card-body">
                    <h1>{props.name}</h1>
                    <p>model: {props.model}</p>
                    <p>vehicle class: {props.vehicle_class}</p>
                    <p>
                        name : {props.name}
                        model : {props.model}
                        manufacturer : {props.manufacturer}
                        cost in credits : {props.cost_in_credits}
                        length : {props.length}
                        max atmosphering speed : {props.max_atmosphering_speed}
                        crew : {props.crew}
                        passengers : {props.passengers}
                        cargo capacity : {props.cargo_capacity}
                        consumables : {props.consumables}
                        vehicle class : {props.vehicle_class}
                        pilots : {props.pilots}
                        films : {props.films}
                        url : {props.url}
                    </p>
                    <div className="row">
                        <div className="col text-start">
                            <a href={props.url} className="btn btn-primary">Learn More!</a>
                        </div>
                        <div className="col text-end">
                            <a href="#" className="btn btn-primary">Favorite Heart Icon</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

VehicleCard.propTypes = {
    name: propTypes.string,
    model: propTypes.string,
    manufacturer: propTypes.string,
    cost_in_credits:  propTypes.number,
    length: propTypes.number,
    max_atmosphering_speed: propTypes.number,
    crew: propTypes.number,
    passengers: propTypes.number,
    cargo_capacity: propTypes.number,
    consumables: propTypes.string,
    vehicle_class: propTypes.string,
    pilots: propTypes.string,
    films: propTypes.string,
    url: propTypes.string
}

export default VehicleCard;