import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/cards.scss";

const CardCharacters = () => {
	const { store, actions } = useContext(Context);

	const [icon, setIcon] = useState("far fa-heart");

	const changeIcon = () => {
		icon === "far fa-heart" ? setIcon("fas fa-heart") : setIcon("far fa-heart");
	};

	return (
		<div>
			<h1>Characters</h1>
			<div className="row p-2 w-6">
				<div className="cards-container d-flex justify-content-between">
					{!!store.characters &&
						store.characters.map((character, index) => {
							return (
								<div key={index} className="card">
									<img
										clasName="card-img-top"
										src="https://via.placeholder.com/800x600"
										alt="Card image cap"
									/>
									<div className="card-body">
										<h5 className="card-title">{character.name}</h5>
										<ul key={index} className="characters">
											<li>Gender: {character.gender}</li>
											<li>Eye color: {character.eye_color}</li>
											<li>Hair color: {character.hair_color}</li>
										</ul>
										<Link to={"/character/" + index}>
											<a href="#" className="btn btn-outline-primary">
												Learn more!
											</a>
										</Link>
										<button
											onClick={() => actions.addFavorite(character.name)}
											// onClickCapture={() => changeIcon()}
											type="button"
											className="btn btn-outline-warning float-right">
											<i className={icon} />
										</button>
									</div>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default CardCharacters;
