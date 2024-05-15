import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const { store, actions } = useContext(Context)

	return (
		<nav className="navbar navbar-light bg-dark mb-3 text-white">

			
				<Link to="/demo">
					<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png' width={'100px'} />
				</Link>
				<p style={{fontSize:'2rem',color:'yellow'}}>May the Force be with you</p>
				<div className="ml-auto">
				<div class="dropdown">
					<button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Favorite {store.favorites.length}
					</button>
					<ul className="dropdown-menu">
						{store.favorites.map((favorite,id) => {
							return <li className="dropdown-item" >
							<span>{favorite}</span>	
							<button type="button" class="btn btn-outline-light" onClick={()=> actions.deleteFavorite(id)}>🗑️</button>
							</li>
							
						})}
			
					</ul>
				</div>
			</div>
		</nav>
	);
};
