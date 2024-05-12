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
	}, [])


	return (
		<Container>

			<Row>
				<Col>
					<h2 className="text-white">Characters</h2>
				</Col>
			</Row>
			<Row>
				<div className='d-flex justify-content-between text-white gap-2'>
					{store?.people?.map((character, key) => {
						return (

							<div>
								<img src={'https://starwars-visualguide.com/assets/img/characters/' + (key + 1) + '.jpg'} style={{ width: '300px' }} />
								<div className='card-body'>
									<h3 className='card-title fw-bold' key={character.name} >
										{character.name}

									</h3>


									<Link to={'/single/' + character.uid}>
										<button type="button" className="btn btn-dark">Learn more</button>
									</Link>
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
