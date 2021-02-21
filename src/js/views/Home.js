import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

import CardCharacters from "../component/CardCharacters";
import CardPlanets from "../component/CardPlanets";

const Home = () => {
	return (
		<div>
			<CardCharacters />
			{/* <CardPlanets /> */}
		</div>
	);
};

export default Home;
