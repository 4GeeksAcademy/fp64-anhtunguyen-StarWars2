import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanet = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const url = `https://www.swapi.tech/api/planets/${params.uid}`;
	const planetStore = store.planet.filter(planet => planet.url == url);
	useEffect(() => actions.planetDispatcher(url),
	 []);
	
	
	return (
		<>
		
		<div className="card mb-3 bg-dark text-white ">
			<div className='row g-0'>
			<div className='col-md-4'>
			<img src={'https://starwars-visualguide.com/assets/img/planets/' + (params.uid)+'.jpg'} style={{width:'350px',height:'400px'}} />
			</div>
			
			<div className='col-md-8 text-center'>
			<div className='card-body'>
				<h5 className='card-title fs-1'>{planetStore[0]?.name}</h5>
				<p className='card-text'>Lucas ipsum dolor sit amet c-3p0 c-3p0 darth gonk windu greedo boba wedge organa antilles. Organa moff windu jango darth hutt dagobah darth. Kit maul qui-gon mandalorians amidala. Mandalorians boba ewok greedo solo mara. Kessel han yavin darth solo moff. Grievous lando fett luuke. Kessel gamorrean moff sidious. Organa darth moff windu. Hutt tatooine yoda darth. Kessel yoda solo lando jabba mandalore wampa. Leia mon dantooine solo coruscant. Luuke biggs jawa han organa darth solo coruscant. Kenobi jabba grievous yoda jango leia k-3po.
</p>
			</div>
			</div>
			
			
			</div>
			<div className='container mt-5 text-danger text-center'>
			<div className='row g-0'>
				<div className='col-md-2'>
					<strong>Name</strong>
					<p>{planetStore[0]?.name}</p>
				</div>
				<div className='col-md-2'>
					<strong>Population</strong>
					<p>{planetStore[0]?.population}</p>
				</div>
				<div className='col-md-2'>
					<strong>Climate</strong>
					<p>{planetStore[0]?.climate}</p>
				</div>
				<div className='col-md-2'>
					<strong>Surface water</strong>
					<p>{planetStore[0]?.surface_water}</p>
				</div>
				<div className='col-md-2'>
					<strong>Diameter</strong>
					<p>{planetStore[0]?.diameter}</p>
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

SinglePlanet.propTypes = {
	match: PropTypes.object
};
