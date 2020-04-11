import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => (
	<div className="container">
		<div className="row">
			<div className="login col-md-4 col-sm-6">
				<div className="logintitle center">
					<h2>Grocery Tracker</h2>
				</div>
				<div className="username center">
					<h3>Username</h3>
					<input className="uninput" />
				</div>
				<div className="password center">
					<h3>Password</h3>
					<input className="pwinput" />
				</div>
				<div className="loginconfirm center">
					<button>Log In</button>
				</div>
				<div className="register center">
					<h5>Register</h5>
				</div>
			</div>
		</div>
	</div>
);
