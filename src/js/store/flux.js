const getState = ({ getStore, getActions, setStore }) => {
	let newPeopleArr = [];
	let newPlanetsArr = [];
	let newVehiclesArr = [];
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			favorites: [],
		},
		actions: {
			initialLoading: () => {
				getActions().fetchPeople();
				getActions().fetchPlanets();
				getActions().fetchVehicles();
				// getActions().fetchIndividualPerson(1);
				// getActions().fetchIndividualPerson(2);
				// getActions().fetchIndividualPerson(3);
			},
			fetchPeople: () => {
				fetch("https://swapi.dev/api/people")
				.then(response => {
					if (!response.ok) throw Error(response.statusText);
					return response.json();
				})
				.then(data => {
					setStore({ people: data.results });
				})
				.catch(error => console.log("ERROR MESSAGE @ fetchPeople()", error))
			},
			// fetchPeople: async () => {
			// 	const response = await fetch("https://www.swapi.dev/api/people");
			// 	let data = await response.json();
			// 	console.log("START - People Data");
			// 	console.log(data);
			// 	console.log("END - People Data");
			// },
			fetchPlanets: () => {
				fetch("https://swapi.dev/api/planets")
				.then(response => {
					if (!response.ok) throw Error(response.statusText);
					return response.json();
				})
				.then(data => {
					setStore({ planets: data.results });
				})
				.catch(error => console.log("ERROR MESSAGE @ fetchPlanets()", error));
			},
			fetchVehicles: () => {
				fetch("https://swapi.dev/api/vehicles")
				.then(response => {
					if(!response) throw Error(response.statusText);
					return response.json();
				})
				.then(data => {
					setStore({ vehicles: data.results });
				})
				.catch(error => console.log("ERROR MESSAGE @ fetchVehicles()", error))
			}
			// fetchIndividualPerson: (id) => {
			// 	fetch("https://swapi.dev/api/people/"+ id)
			// 	.then(response => {
			// 		if(!response) throw Error(response.statusText);
			// 		return response.json();
			// 	})
			// 	.then(data => {
			// 		newPeopleArr = [...newPeopleArr, data.result.properties];
			// 		setStore({ peopleDetails: newPeopleArr})
			// 	})
			// 	.catch(error => console.log("ERROR MESSAGE @ fetchIndividualPerson()", error))
			// },
			// fetchIndividualPlanet: (id) => {
			// 	fetch("https://swapi.dev/api/planets"+ id)
			// 	.then(response => {
			// 		if(!response) throw Error(response.statusText);
			// 		return response.json();
			// 	})
			// 	.then(data => {
			// 		newPlanetsArr = [...newPlanetsArr, data.result.properties];
			// 		setStore({ peopleDetails: newPlanetsArr})
			// 	})
			// 	.catch(error => console.log("ERROR MESSAGE @ fetchIndividualPlanet()", error))
			// },
			// fetchIndividualVehicle: (id) => {
			// 	fetch("https://swapi.dev/api/vehicles"+ id)
			// 	.then(response => {
			// 		if(!response) throw Error(response.statusText);
			// 		return response.json();
			// 	})
			// 	.then(data => {
			// 		newVehiclesArr = [...newVehiclesArr, data.result.properties];
			// 		setStore({ peopleDetails: newVehiclesArr})
			// 	})
			// 	.catch(error => console.log("ERROR MESSAGE @ fetchIndividualVehicle()", error))
			// }
		}
	};
};

export default getState;