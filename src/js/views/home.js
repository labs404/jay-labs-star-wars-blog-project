import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import TestCard from "./testCard";
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
			{/* {store.peopleDetails} */}
			{(store.peopleDetails[1]) != null ? console.log("name: ", store.peopleDetails[1].name, "eye color: ", store.peopleDetails[1].eye_color) : null }
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
										name={person.name}
										height={person.height}
										mass={person.mass}
										hair_color={person.hair_color}
										skin_color={person.skin_color}
										eye_color={person.eye_color}
										birth_year={person.birth_year}
										gender={person.gender}
										homeworld={person.homeworld}
										films={person.films}
										species={person.species}
										vehicles={person.vehicles}
										starships={person.starships}
										url={person.url}
										img={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`}
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
										name={planet.name}
										rotation_period={planet.rotation_period}
										orbital_period={planet.orbital_period}
										diameter={planet.diameter}
										climate={planet.climate}
										gravity={planet.gravity}
										terrain={planet.terrain}
										surface_water={planet.surface_water}
										population={planet.population}
										residents={planet.residents}
										films={planet.films}
										url={planet.url}
										img={`https://starwars-visualguide.com/assets/img/planets/${index + 1}.jpg`}
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
								let extractedImgUrl = "https://starwars-visualguide.com/assets/img/vehicles/" + (vehicle.url.split("https://swapi.dev/api/vehicles/").pop()).slice(0, -1) + ".jpg";
								return (
									<VehicleCard 
										key={index} 
										name={vehicle.name}
										model={vehicle.model}
										manufacturer={vehicle.manufacturer}
										cost_in_credits={vehicle.cost_in_credits}
										length={vehicle.length}
										max_atmosphering_speed={vehicle.max_atmosphering_speed}
										crew={vehicle.crew}
										passengers={vehicle.passengers}
										cargo_capacity={vehicle.cargo_capacity}
										consumables={vehicle.consumables}
										vehicle_class={vehicle.vehicle_class}
										pilots={vehicle.pilots}
										films={vehicle.films}
										url={vehicle.url}
										img={extractedImgUrl}
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