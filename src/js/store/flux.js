const getState = ({ getStore, getActions, setStore }) => {
	let newPeopleArr = [];
	let newPlanetsArr = [];
	let newVehiclesArr = [];
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			peopleDetails: [],
			planetDetails: [],
			vehicleDetails: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			initialLoading: () => {
				getActions().fetchPeople();
				getActions().fetchPlanets();
				getActions().fetchVehicles();
				getActions().fetchIndividualPerson(1);
				getActions().fetchIndividualPerson(2);
				getActions().fetchIndividualPerson(3);
			},
			fetchPeople: () => {
				fetch("https://www.swapi.tech/api/people")
				.then(response => {
					if (!response.ok) throw Error(response.statusText);
					return response.json();
				})
				.then(data => {
					// console.log("START - People Data");
					// console.log(data.results);
					// console.log("END - People Data");
					setStore({ people: data.results });
				})
				.catch(error => console.log("ERROR MESSAGE @ fetchPeople()", error))
			},
			// fetchPeople: async () => {
			// 	const response = await fetch("https://www.swapi.tech/api/people");
			// 	let data = await response.json();
			// 	console.log("START - People Data");
			// 	console.log(data);
			// 	console.log("END - People Data");
			// },
			fetchPlanets: () => {
				fetch("https://www.swapi.tech/api/planets")
				.then(response => {
					if (!response.ok) throw Error(response.statusText);
					return response.json();
				})
				.then(data => {
					// console.log("START - Planets Data");
					// console.log(data.results);
					// console.log("END - Planets Data");
					setStore({ planets: data.results });
				})
				.catch(error => console.log("ERROR MESSAGE @ fetchPlanets()", error));
			},
			fetchVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles")
				.then(response => {
					if(!response) throw Error(response.statusText);
					return response.json();
				})
				.then(data => {
					// console.log("START - Vehicles Data");
					// console.log(data.results);
					// console.log("END - Vehicles Data");
					setStore({ vehicles: data.results });
				})
				.catch(error => console.log("ERROR MESSAGE @ fetchVehicles()", error))
			},
			fetchIndividualPerson: (id) => {
				fetch("https://www.swapi.tech/api/people/"+ id)
				.then(response => {
					if(!response) throw Error(response.statusText);
					return response.json();
				})
				.then(data => {
					newPeopleArr = [...newPeopleArr, data.result.properties];
					setStore({ peopleDetails: newPeopleArr})
				})
				.catch(error => console.log("ERROR MESSAGE @ fetchIndividualPerson()", error))
			},
			// fetchIndividualPerson: async id => {
			// 	const response = await fetch("https://www.swapi.tech/api/people/"+ id);
			// 	let data = await response.json();
			// 	console.log("line 84", data.result.properties);
			// 	setStore({peopleDetails: [...peopleDetails,data.result.properties]});
			// 	console.log("line 86");
			// 	// setStore({peopleDetails: [...peopleDetails, data.result.properties]});
			// },
			fetchIndividualPlanet: (id) => {
				return null;
			},
			fetchIndividualVehicle: (id) => {
				return null;
			},
			generatePerson: (array) => {
				array.forEach((element) => console.log(element));
			}
		}
	};
};

export default getState;