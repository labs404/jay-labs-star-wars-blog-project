import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/card.css";

const Card = (props) => {
    const { actions } = useContext(Context);
    let returnOutput = null;

    props.cardType === "person" ? (
        returnOutput = (
            <div className="condensedCard card m-1">
                <img 
                    src={`https://starwars-visualguide.com/assets/img/characters/${props.index + 1}.jpg`}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src="https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
                    }} 
                    className="card-img-top" 
                    alt={props.person.name} 
                />
                <div className="card-body p-1">
                    <div className="blurb-container">
                        <h2>{props.person.name}</h2>
                        <p>Height : {props.person.height}</p>
                        <p>Mass : {props.person.mass}</p>
                        <p>Birth Year : {props.person.birth_year}</p>
                    </div>
                    <div className="container container-fluid d-flex blurb-container p-2">
                        <div className="col text-start">
                            <Link to={'individual/people/' + props.index}>
                                <button className="btn btn-warning">Learn More!</button>
                            </Link>
                        </div>
                        <div className="col text-end">
                            <button className="btn btn-warning" onClick={() => actions.addToFavorites(props.person.name)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    ) : null;

    props.cardType === "planet" ? (
        returnOutput = (
            <div className="condensedCard card m-1">
                <img 
                    src={props.img} 
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src="https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
                    }} 
                    className="card-img-top" 
                    alt={props.planet.name} 
                />
                <div className="card-body p-1">
                    <div className="blurb-container">
                        <h2>{props.planet.name}</h2>
                        <p>Climate : {props.planet.climate}</p>
                        <p>Terrain : {props.planet.terrain}</p>
                        <p>Population : {props.planet.population}</p>
                    </div>
                    <div className="container container-fluid d-flex blurb-container p-2">
                        <div className="col text-start">
                            <Link to={'individual/planets/' + props.index}>
                                <button className="btn btn-warning">Learn More!</button>
                            </Link>
                        </div>
                        <div className="col text-end">
                            <button className="btn btn-warning" onClick={() => actions.addToFavorites(props.planet.name)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    ) : null;

    props.cardType === "vehicle" ? (
        returnOutput = (
            <div className="condensedCard card m-1">
                <img 
                    src={props.img} 
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src="https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
                    }} 
                    className="card-img-top" 
                    alt={props.vehicle.name} 
                />
                <div className="card-body p-1">
                    <div className="blurb-container">
                        <h2>{props.vehicle.name}</h2>
                        <p>Class: {props.vehicle.vehicle_class}</p>
                        <p>Model : {props.vehicle.model}</p>
                        <p>Manufacturer : {props.vehicle.manufacturer}</p>
                        </div>
                    <div className="container container-fluid d-flex blurb-container p-2">
                        <div className="col text-start">
                            <Link to={'individual/vehicles/' + props.index}>
                                <button className="btn btn-warning">Learn More!</button>
                            </Link>
                        </div>
                        <div className="col text-end">
                            <button className="btn btn-warning" onClick={() => actions.addToFavorites(props.vehicle.name)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            )
    ) : null;

    return (
        <>
            {returnOutput}
        </>
    )
}

export default Card;