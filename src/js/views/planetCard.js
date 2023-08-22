import React from "react";
import propTypes from "prop-types";
import "../../styles/card.css";


const PlanetCard = (props) => {
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
                    <p>population: {props.population}</p>
                    <p>terrain: {props.terrain}</p>

                    <p>name : {props.name}</p>
                    <p>rotation_period : {props.rotation_period}</p>
                    <p>orbital_period : {props.orbital_period}</p>
                    <p>diameter : {props.diameter}</p>
                    <p>climate : {props.climate}</p>
                    <p>gravity : {props.gravity}</p>
                    <p>terrain : {props.terrain}</p>
                    <p>surface_water : {props.surface_water}</p>
                    <p>population : {props.population}</p>
                    <p>residents : {props.residents}</p>
                    <p>films : {props.films}</p>
                    <p>url : {props.url}</p>
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

PlanetCard.propTypes = {
    name: propTypes.string,
    rotation_period: propTypes.string,
    orbital_period: propTypes.string,
    diameter: propTypes.string,
    climate: propTypes.string,
    gravity: propTypes.string,
    terrain: propTypes.string,
    surface_water: propTypes.string,
    population: propTypes.string,
    residents: propTypes.array,
    films: propTypes.array,
    url: propTypes.string
}

export default PlanetCard;


// name=
// rotation_period=
// orbital_period=
// diameter=
// climate=
// gravity=
// terrain=
// surface_water=
// population=
// residents=
// films=
// url=