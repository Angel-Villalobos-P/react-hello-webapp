import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

import CardCharacters from "../component/CardCharacters";
import CardPlanets from "../component/CardPlanets";
import Card from "../component/Card";

const Home = () => {
	return (
		<div className="container-fluid">
			<CardCharacters />
			<CardPlanets />
		</div>
	);
};

export default Home;
