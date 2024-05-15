import { useLinkClickHandler } from "react-router-dom";
import { peopleDispatcher } from "./peopleDispatcher";
import { planetDispatcher } from "./planetDispatcher";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			character: [],
			planets: [],
			planet: [],
			vehicles: [],
			vehicle: [],
			favorites: []

		},
		actions: {
			getPeople: async() => {
				const data = await peopleDispatcher.get();
				const store = getStore();
				setStore({ ...store,people: data.results}); 
				console.log(data);
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
			getPlanets: async() => {
				const data = await planetDispatcher.get();
				const store = getStore();
				setStore({ ...store,planets: data.results}); 
				console.log(data);
			},
			getPlanet: async(url) => {
				
				const store = getStore()
				const response = await fetch (url, {
					method:'GET',
					
				})
				const data = await response.json()
				setStore({ planet: [...store.planet, data.result.properties] });
				console.log(data.result)
			},
			planetDispatcher: (url)=> {
				 getActions().getPlanet(url)
			},
			addFavorite: (fav) => {
				const store = getStore()
				setStore({...store, favorites: [...store.favorites,fav]})
				console.log(store.favorites)
			},
			deleteFavorite: (id) => {
				const store = getStore()
				const favoriteList = store.favorites.filter((favorite,index) => index !== id)
				setStore({...store, favorites: favoriteList})
				console.log(favoriteList)
			}
		}
	};
};

export default getState;
