import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams, Link } from "react-router-dom";

import "../../styles/cards.scss";

export const Planet = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="jumbotron row">
			<img className="col-6" src="https://pbs.twimg.com/media/EM10__0UYAEPp8U?format=jpg&name=medium" />
			<div className="col-6">
				<h1 className="text-center">{store.planets[params.id].name}</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor congue arcu. Ut in tristique
					magna. Maecenas tincidunt ipsum sed lacus lobortis pretium. Proin ullamcorper justo at massa
					pulvinar rhoncus. Donec fringilla tincidunt tellus. Nam maximus aliquet est id porta. Phasellus eget
					massa vitae risus placerat tristique. In sit amet vehicula felis, a tincidunt felis. Phasellus
					pretium orci malesuada sagittis ornare. Aenean pharetra lorem libero, non tempor erat porttitor id.
					Nullam accumsan velit eu mauris ultrices consequat. Phasellus at turpis ac arcu elementum iaculis
					quis vel tortor. Cras vel felis semper, malesuada augue id, pharetra est
				</p>
			</div>
			<hr className="separator" />
			<div className="text-center">
				<ul className="list row">
					<li className="character col-3">Climate: {" " + store.planets[params.id].climate}</li>
					<li className="character col-3">Diameter: {" " + store.planets[params.id].diameter}</li>
					<li className="character col-3">Gravity: {" " + store.planets[params.id].gravity}</li>
					<li className="character col-3">Population: {" " + store.planets[params.id].population}</li>
				</ul>
				<Link to={"/"}>
					<span href="#" className="btn btn-warning btn-lg btn-block">
						Back
					</span>
				</Link>
			</div>
		</div>
	);
};
