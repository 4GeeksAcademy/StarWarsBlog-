import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom"
import "../../styles/home.css";

export const Home = () => {

	const { store, actions } = useContext(Context)

	// useEffect(()=>{
	// 	actions.loadCharacterData()
	// 	actions.loadPlanetsData()
	// }, [])

	const characters = store.characters.map(char =>
		<div key={char.uid} className="card col-3">
			<img src={`https://starwars-visualguide.com/assets/img/characters/${char.uid}.jpg`} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title d-flex">{char.properties.name}</h5>

				<p className="card-text">{char.properties.gender}</p>
				<p className="card-text">{char.properties.hair_color}</p>

				<div className="d-flex justify-content-between">
					<Link to={`character/${char.uid}`} className="btn btn-primary">Learn More!</Link>
					<button className="btn btn-warning" onClick={() => actions.addFavorite(char)}>
						<FontAwesomeIcon icon={faHeart} /></button>
				</div>
			</div>
		</div>
	)

	const planets = store.planets.map(planet =>
		<div key={planet.uid} className="card col-3">
			<img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="d-flex">{planet.name}</h5>

				<p className="">{planet.population}</p>
				<p className="">{planet.terrain}</p>

				<div className="d-flex justify-content-between">
					<Link to={`character/${planet.uid}`} className="btn btn-primary">Learn More!</Link>
					<button className="btn btn-warning" onClick={() => actions.addFavorite(planet.uid)}>
						<FontAwesomeIcon icon={faHeart} />
					</button>
				</div>

			</div>
		</div>
	)

	return <>
		<div className="container">
			<h1 className="mb-4 text-danger">Characters</h1>
			<div className="text-center d-flex flex-column">

				<div className="scroll d-flex justify-content-center gap-1" style={{ maxWidth: "90vw" }}>
					{characters}
				</div>
			</div>
		</div>

		<div className="container">
			<h1 className="my-4 text-danger">Planets</h1>
			<div className="text-center d-flex flex-column">

				<div className="scroll d-flex justify-content-center gap-1 mx-auto" style={{ maxWidth: "90vw" }}>
					{planets}
				</div>
			</div>
		</div>
	</>
};

