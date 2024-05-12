import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const url = `https://www.swapi.tech/api/people/${params.uid}`;
	const charStore = store.character.filter(char => char.url == url);
	useEffect(() => actions.characterDispatcher(url),
	 []);
	
	
	return (
		<>
		
		<div className="card mb-3 bg-dark text-white ">
			<div className='row g-0'>
			<div className='col-md-4'>
			<img src={'https://starwars-visualguide.com/assets/img/characters/' + (params.uid)+'.jpg'} style={{width:'350px',height:'400px'}} />
			</div>
			
			<div className='col-md-8 text-center'>
			<div className='card-body'>
				<h5 className='card-title fs-1'>{charStore[0]?.name}</h5>
				<p className='card-text'>Lucas ipsum dolor sit amet c-3p0 c-3p0 darth gonk windu greedo boba wedge organa antilles. Organa moff windu jango darth hutt dagobah darth. Kit maul qui-gon mandalorians amidala. Mandalorians boba ewok greedo solo mara. Kessel han yavin darth solo moff. Grievous lando fett luuke. Kessel gamorrean moff sidious. Organa darth moff windu. Hutt tatooine yoda darth. Kessel yoda solo lando jabba mandalore wampa. Leia mon dantooine solo coruscant. Luuke biggs jawa han organa darth solo coruscant. Kenobi jabba grievous yoda jango leia k-3po.
</p>
			</div>
			</div>
			
			
			</div>
			<div className='container mt-5 text-danger text-center'>
			<div className='row g-0'>
				<div className='col-md-2'>
					<strong>Name</strong>
					<p>{charStore[0]?.name}</p>
				</div>
				<div className='col-md-2'>
					<strong>Birth Year</strong>
					<p>{charStore[0]?.birth_year}</p>
				</div>
				<div className='col-md-2'>
					<strong>Eye Color</strong>
					<p>{charStore[0]?.eye_color}</p>
				</div>
				<div className='col-md-2'>
					<strong>Hair Color</strong>
					<p>{charStore[0]?.hair_color}</p>
				</div>
				<div className='col-md-2'>
					<strong>Height</strong>
					<p>{charStore[0]?.height}</p>
				</div>

			</div>
			</div>
			
			<br />
			<Link to="/">
				<button type="button" className="btn btn-dark">Back home</button>
			</Link>
		</div>
		</>
	);
	
};

Single.propTypes = {
	match: PropTypes.object
};
