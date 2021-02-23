import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img
					src="https://i1.wp.com/gamerfocus.co/wp-content/uploads/2015/07/Star-Wars.png?ssl=1"
					width="90px"
				/>
			</Link>
			<div className="dropdown">
				<button
					className="btn btn-primary dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favorites
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					{!!store.favorites &&
						store.favorites.map((element, index) => {
							return (
								<div
									className="d-flex justify-content-between"
									key={index}
									style={{ background: "#05204a" }}>
									<a className="elemen" style={{ color: "white", marginLeft: "5px" }}>
										{element}
									</a>
									<div className="trash">
										<button
											onClick={() => actions.deleteFavorite(index)}
											className="fas fa-trash border-0"
											style={{ color: "white", background: "none" }}
										/>
									</div>
								</div>
							);
						})}
					;
				</div>
			</div>
		</nav>
	);
};
