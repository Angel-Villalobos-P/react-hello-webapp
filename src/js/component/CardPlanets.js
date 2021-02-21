import React, { useContext } from "react";
import Context from "../store/appContext";
import { Link } from "react-router-dom";

const CardPlanets = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<h1>Planets</h1>
			<div className="row p-2 w-6">
				{!!store.planets &&
					store.planets.map((planet, index) => {
						return (
							<div key={index} className="card col-3" style="width: 18rem;">
								<img
									clasName="card-img-top"
									src="https://via.placeholder.com/800x600"
									alt="Card image cap"
								/>
								<div className="card-body">
									<h5 className="card-title">{planet.name}</h5>
									<ul key={index} className="characters">
										<li>Diameter: {planet.diameter}</li>
										<li>Gratity: {planet.gravity}</li>
										<li>Terrain: {planet.terrain}</li>
									</ul>
									<Link to={"/planet/" + index}>
										<a href="#" className="btn btn-outline-primary">
											Learn more!
										</a>
									</Link>
									<button
										onClick={() => actions.addFavorite(planet.name)}
										type="button"
										className="btn btn-outline-warning float-right">
										<i className="far fa-heart" />
									</button>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default CardPlanets;
