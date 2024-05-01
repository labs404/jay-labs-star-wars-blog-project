import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Card from "../component/card";
import "../../styles/home.css";

export const Home = () => {
	const { store } = useContext(Context);

	return (
		<>
			<div className="container-fluid px-5">
				<div className="row mb-4">
					<div className="col-12">
						<h1>Characters</h1>
					</div>
					<div className="container py-2 col-12 cardScrollBars d-flex flex-row flex-nowrap overflow-auto">						
							{store.people.map((person, index) => 
								<Card 
									key={index}
									person={person}
									index={index}
									cardType="person"
								/> 							
							)}
					</div>
				</div>


				<div className="row mb-4">
					<div className="col-12">
						<h1>Planets</h1>
					</div>
					<div className="container py-2 col-12 cardScrollBars d-flex flex-row flex-nowrap overflow-auto">						
						{store.planets.map((planet, index) => 
							<Card
								key={index}
								planet={planet}
								index={index}
								cardType="planet"
								img={`https://starwars-visualguide.com/assets/img/planets/${index + 1}.jpg`}
							/>
						)}
					</div>
				</div>


				<div className="row mb-4">
					<div className="col-12">
						<h1>Vehicles</h1>
					</div>
					<div className="container py-2 col-12 cardScrollBars d-flex flex-row flex-nowrap overflow-auto">						
						{store.vehicles.map((vehicle, index) => 
							<Card
								key={index}
								vehicle={vehicle}
								index={index}
								cardType="vehicle"
								img={"https://starwars-visualguide.com/assets/img/vehicles/" + (vehicle.url.split("https://swapi.py4e.com/api/vehicles/").pop()).slice(0, -1) + ".jpg"}
							/>
						)}
					</div>
				</div>

				<div className="spacer-div row mb-4">
					&nbsp;
				</div>
			</div>
		</>
	)
};