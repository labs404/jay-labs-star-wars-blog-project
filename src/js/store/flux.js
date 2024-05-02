const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			favorites: [],
			fetchPeopleURL: "https://swapi.py4e.com/api/people",
			fetchPlanetsURL: "https://swapi.py4e.com/api/planets",
			fetchVehiclesURL: "https://swapi.py4e.com/api/vehicles",
		},
		actions: {
			initialLoading: () => {
				getActions().fetchPeople();
				getActions().fetchPlanets();
				getActions().fetchVehicles();
			},


			// fetchPeople: () => {
			// 	fetch("https://swapi.py4e.com/api/people")
			// 	.then(response => {
			// 		if (!response.ok) throw Error(response.statusText);
			// 		return response.json();
			// 	})
			// 	.then(data => {
			// 		setStore({ people: data.results });
			// 	})
			// 	.catch(error => console.log("ERROR MESSAGE @ fetchPeople()", error))
			// },
			fetchPeople: async () => {
				const store = getStore();
				const actions = getActions();
				let response = await fetch(store.fetchPeopleURL);
				let data = await response.json();
				let newPeopleArray = store.people.concat(data.results);
				setStore({ people: newPeopleArray });
				setStore({ fetchPeopleURL: data.next });
				if (data.next != null) {
					actions.fetchPeople();
				}
			},


			// fetchPlanets: () => {
			// 	fetch("https://swapi.py4e.com/api/planets")
			// 	.then(response => {
			// 		if (!response.ok) throw Error(response.statusText);
			// 		return response.json();
			// 	})
			// 	.then(data => {
			// 		setStore({ planets: data.results });
			// 	})
			// 	.catch(error => console.log("ERROR MESSAGE @ fetchPlanets()", error));
			// },
			fetchPlanets: async () => {
				const store = getStore();
				const actions = getActions();
				let response = await fetch(store.fetchPlanetsURL);
				let data = await response.json();
				let newPlanetsArray = store.planets.concat(data.results);
				setStore({ planets: newPlanetsArray });
				setStore({ fetchPlanetsURL: data.next });
				if (data.next != null) {
					actions.fetchPlanets();
				}
			},

			
			// fetchVehicles: () => {
			// 	fetch("https://swapi.py4e.com/api/vehicles")
			// 	.then(response => {
			// 		if(!response) throw Error(response.statusText);
			// 		return response.json();
			// 	})
			// 	.then(data => {
			// 		setStore({ vehicles: data.results });
			// 	})
			// 	.catch(error => console.log("ERROR MESSAGE @ fetchVehicles()", error))
			// },
			fetchVehicles: async () => {
				const store = getStore();
				const actions = getActions();
				let response = await fetch(store.fetchVehiclesURL);
				let data = await response.json();
				let newVehiclesArray = store.vehicles.concat(data.results);
				setStore({ vehicles: newVehiclesArray });
				setStore({ fetchVehiclesURL: data.next });
				if (data.next != null) {
					actions.fetchVehicles();
				}
			},


			addToFavorites: (newItem) => {
				const store = getStore();
				const newFavoritesArr = [...store.favorites, newItem];
				setStore({favorites: newFavoritesArr});
			},

			
			removeFromFavorites: (itemName) => {
				const store = getStore();
				const newFavoritesArr = store.favorites.filter(name => name !== itemName)
				setStore({favorites: newFavoritesArr});
			}
		}
	};
};

export default getState;