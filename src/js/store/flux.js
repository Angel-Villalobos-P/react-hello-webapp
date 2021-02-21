const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// demo: [
			// 	{
			// 		title: "FIRST",
			// 		background: "white",
			// 		initial: "white"
			// 	},
			// 	{
			// 		title: "SECOND",
			// 		background: "white",
			// 		initial: "white"
			// 	}
			// ],
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
						let peopleArray = [];

						for (let i = 0; i < arrayResults.length; i++) {
							const res = await fetch(arrayResults[i].url);
							const json = await res.json();
							const data = await json.result.properties;
							peopleArray.push(data);
						}
						setStore({ characters: peopleArray });
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

			// exampleFunction: () => {
			//     getActions().changeColor(0, "green");
			// },
			// loadSomeData: () => {
			// 	/**
			// 		fetch().then().then(data => setStore({ "foo": data.bar }))
			// 	*/
			// },
			// changeColor: (index, color) => {
			//     //get the store
			//     const store = getStore();

			//     //we have to loop the entire demo array to look for the respective index
			//     //and change its color
			//     const demo = store.demo.map((elm, i) => {
			//         if (i === index) elm.background = color;
			//         return elm;
			//     });

			//     //reset the global store
			//     setStore({ demo: demo });
			// }
		}
	};
};

export default getState;
