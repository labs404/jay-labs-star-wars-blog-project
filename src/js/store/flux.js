const getState = ({ getStore, getActions, setStore }) => {
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