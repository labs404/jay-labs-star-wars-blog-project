import React from "react";
import propTypes from "prop-types";

const cardStyling = {
    width: "18rem"
}

const Card = (props) => {
    return (
        <>
            <div className="card" style={cardStyling}>
                <img src="..." className="card-img-top" alt="..." />
                <div classNamee="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <a href="#" className="btn btn-primary">Go Somewhere</a>
                </div>
            </div>
        </>
    )
}

Card.propTypes = {
    name: propTypes.string
}

export default Card;