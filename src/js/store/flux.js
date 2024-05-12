const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			character: [],
			// planets: [],
			// planet: [],
			// vehicles: [],
			// vehicle: [],
			// favourites: []

		},
		actions: {
			getPeople: async() => {
				const store = getStore()
				const response = await fetch ('https://www.swapi.tech/api/people', {
					method:'GET',
					
				})
				const data = await response.json()
				setStore({ people: data.results });
				console.log(data)
			},
			getCharacter: async(url) => {
				const store = getStore()
				const response = await fetch (url, {
					method:'GET',
					
				})
				const data = await response.json()
				setStore({ character: [...store.character, data.result.properties] });
				console.log(data.result)
			},
			characterDispatcher: (url)=> {
				getActions().getCharacter(url)
			},
			
		}
	};
};

export default getState;
