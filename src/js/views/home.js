import React, { useContext, useEffect } from "react";

import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import Card from "./card";
import CharacterCard from "./characterCard";
import PlanetCard from "./planetCard";
import VehicleCard from "./vehicleCard";

import "../../styles/home.css";

export const Home = () => {
	const { store } = useContext(Context);

	return (
		<>
			<h1>Hello Tatooine!</h1>
			<Link to="/demo">
					<button className="btn btn-primary">Demo page</button>
			</Link>
			<div className="container">
				<div className="row">
					<div className="col-12">
						Characters
					</div>
					<div className="container py-2 col-12">
						<div className="cardScrollBars d-flex flex-row flex-nowrap overflow-auto">
							{store.people.map((person, index) => {
								return (
									<CharacterCard 
										key={index} 
										uid={person.uid} 
										name={person.name} 
										url={person.url}
										cardType="characters"
									/>
								);
							})}
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						Planets
					</div>
					<div className="container py-2 col-12">
						<div className="cardScrollBars d-flex flex-row flex-nowrap overflow-auto">
							{store.planets.map((planet, index) => {
								return (
									<PlanetCard 
										key={index} 
										uid={planet.uid} 
										name={planet.name} 
										url={planet.url}
										cardType="planets"
									/>
								);
							})}
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						Vehicles
					</div>
					<div className="container py-2 col-12">
						<div className="cardScrollBars d-flex flex-row flex-nowrap overflow-auto">
							{store.vehicles.map((vehicle, index) => {
								return (
									<VehicleCard 
										key={index} 
										uid={vehicle.uid} 
										name={vehicle.name} 
										url={vehicle.url} 
										cardType="vehicles"
									/>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	)
};