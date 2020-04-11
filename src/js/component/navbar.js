import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<Link to="/Groceries">
					<button className="btn btn-primary">Groceries</button>
				</Link>
				<Link to="/Recipes">
					<button className="btn btn-primary">Recipes</button>
				</Link>
				<Link to="/AddGroceries">
					<button className="btn btn-primary">Add Groceries</button>
				</Link>
				<Link to="/AddRecipes">
					<button className="btn btn-primary">Add Recipes</button>
				</Link>
			</div>
		</nav>
	);
};
