import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams, Link } from "react-router-dom";

import "../../styles/cards.scss";

export const Character = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="jumbotron row">
			<img className="col-6" src="https://via.placeholder.com/800x600" />
			<div className="col-6">
				<h1 className="text-center">{store.characters[params.id].name}</h1>
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
					<li className="character col-3">Birth year: {" " + store.characters[params.id].birth_day}</li>
					<li className="character col-3">Height: {" " + store.characters[params.id].height}</li>
					<li className="character col-3">Mass: {" " + store.characters[params.id].mass}</li>
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
