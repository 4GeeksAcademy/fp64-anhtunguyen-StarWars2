import React, { useState, useContext, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {

	const { store, actions } = useContext(Context)

	useEffect(() => {
		actions.getPeople()
		actions.getPlanets()
	}, [])
	


	return (
		<Container>

			<Row>
				<Col>
					<h2 style={{color:'yellow'}}>Characters</h2>
				</Col>
			</Row>
			<Row>
				<div className='d-flex justify-content-between text-white gap-2'>
					{store.people.map((character, key) => {
						return (

							<div>
								<img src={'https://starwars-visualguide.com/assets/img/characters/' + (key + 1) + '.jpg'} style={{ width: '300px' }} />
								<div className='card-body'>
									<h3 className='card-title fw-bold' key={character.name} >
										{character.name}

									</h3>

								<div className='d-flex justify-content-between'>
								<Link to={'/single/' + character.uid}>
										<button type="button" className="btn btn-dark">Learn more</button>
									</Link>
									<button type="button" className="btn btn-dark" onClick={()=> actions.addFavorite(character.name)}>❤️</button>
								</div>
									
								</div>
							</div>



						)
					}


					)}
				</div>
			</Row>
			<Row>
				<Col>
					<h2 style={{color:'yellow'}}>Planets</h2>
				</Col>
			</Row>
			<Row>
				<div className='d-flex justify-content-between text-white gap-2'>
					{store.planets.map((planet, key) => {
						return (

							<div>
								<img src={'https://starwars-visualguide.com/assets/img/planets/' + (key + 1) + '.jpg'} style={{ width: '300px' }} />
								<div className='card-body'>
									<h3 className='card-title fw-bold' key={planet.name} >
										{planet.name}

									</h3>

									<div className='d-flex justify-content-between'>
									<Link to={'/single_planet/' + planet.uid}>
										<button type="button" className="btn btn-dark">Learn more</button>
									</Link>
									<button type="button" className="btn btn-dark" onClick={()=> actions.addFavorite(planet.name)}>❤️</button>
									</div>
								</div>
							</div>



						)
					}


					)}
				</div>
			</Row>
			
			



			







		</Container>
	)

};
