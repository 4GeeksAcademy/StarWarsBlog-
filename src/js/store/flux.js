const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			characters:[],

			planets:[],

			favorites:[]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadCharacterData: async () => {
				const res = await fetch("https://www.swapi.tech/api/people/")
				const data = await res.json()
				setStore({characters: data.results})
			},

			loadPlanetsData: async () => {
				const res = await fetch("https://www.swapi.tech/api/planets/")
				const data = await res.json()
				setStore({planets: data.results})
			},


			addFavorite: (index) => {
				console.log(index)
				
				const store = getStore();
				
				const charFavorite = store.characters.find((char,) => {
					return char.uid === index
				})

				 const planetFavorite = store.planets.find((planet,) => {
				 	return planet.uid === index
				 })

				const alreadyFavorite = store.favorites.find((element) => {
					return charFavorite === element
				})
				
				if(!alreadyFavorite){
					setStore({favorites: [...store.favorites, charFavorite,  ]})
				}
			},


			deleteFavorite: (index) => {
				
				const store = getStore();
				const newFavorites = store.favorites.filter((char) => {
					return char.uid !== index
				})
				setStore({favorites: newFavorites})
			},












			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

		}
	};
};

export default getState;
