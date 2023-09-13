import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import { useLocation } from 'react-router-dom'
// import "../../styles/individual.css";

export const Individual = () => {
	const { store } = useContext(Context);
    const location = useLocation();
    const {type, index} = location.state;
    let returnOutput = null;
    let item = store.people

    type == "people" ? (
        returnOutput = <><h1>Success from People</h1><p>{type}</p><p>{index}</p></>
    )
    : null

    type == "planets" ? (
        returnOutput = <><h1>Success from Planets</h1><p>{type}</p><p>{index}</p></>
    )
    : null

    type == "vehicles" ? (
        returnOutput = <><h1>Success from Vehicles</h1><p>{type}</p><p>{index}</p></>
    )
    : null


    return (
        <>
            <h1>Hello from Individual</h1>
            {returnOutput}
            {console.log(item[index])}
        </>
    )
}