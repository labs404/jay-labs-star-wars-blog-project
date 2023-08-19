import React from "react";
import propTypes from "prop-types";
import "../../styles/card.css";


const VehicleCard = (props) => {
    let cardImgUrl = "https://starwars-visualguide.com/assets/img/" + props.cardType + "/" + props.uid + ".jpg";
    return (
        <>
            <div className="condensedCard card m-1">
                <img 
                    src={cardImgUrl} 
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src="https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
                      }} 
                    className="card-img-top" 
                    alt={props.name} 
                />
                <div className="card-body">
                    <h1>{props.name}</h1>
                    <p>model</p>
                    <p>vehicle class</p>
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
    name: propTypes.string
}

export default VehicleCard;