const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			loadCharacters: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then(res => res.json())
					.then(async data => {
						// let _characters = [];
						// data.results.map(async result => {
						// 	const res = await fetch(result.url);
						// 	const json = await res.json();
						// 	const dat = await json.result.properties;
						// 	_characters.push(dat);
						// });
						let arrayResults = data.results;
						let _characters = [];

						for (let i = 0; i < arrayResults.length; i++) {
							const res = await fetch(arrayResults[i].url);
							const json = await res.json();
							const data = await json.result.properties;
							_characters.push(data);
						}
						setStore({ characters: _characters });
					});
			},

			loadPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/")
					.then(res => res.json())
					.then(async data => {
						let planets = [];
						data.results.map(async result => {
							const res = await fetch(result.url);
							const json = await res.json();
							const dat = await json.result.properties;
							planets.push(dat);
						});
						setStore({ planets: planets });
					});
			},

			addFavorite: fav => {
				const auxStore = getStore();
				auxStore.favorites.push(fav);
				setStore({ favorites: [...auxStore.favorites] });
			},

			deleteFavorite: index => {
				const favorites = getStore().favorites;
				favorites.splice(index, 1);
				setStore({ favorites: [...favorites] });
			}
		}
	};
};

export default getState;
