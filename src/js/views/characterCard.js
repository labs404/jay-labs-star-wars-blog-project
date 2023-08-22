import React, { useContext, useEffect } from "react";
import propTypes from "prop-types";
import "../../styles/card.css";


const CharacterCard = (props) => {
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
                    <p>gender: {props.gender}</p>
                    <p>hair color: {props.hair_color}</p>
                    <p>eye color:{props.eye_color}</p>
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

CharacterCard.propTypes = {
    name: propTypes.string
}

export default CharacterCard;

// name=
// height=
// mass=
// hair_color=
// skin_color=
// eye_color=
// birth_year=
// gender
// homeworld=
// films=
// species=
// vehicles=
// starships=
// url=