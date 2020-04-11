import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import TypeButton from "../component/TypeButton";

import Context from "../store/appContext";

class Groceries extends React.Component {
	constructor() {
		super();
		this.state = {
			// Initialize your statee
		};
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="types">
						<div className="tb">
							<TypeButton type={"Vegetables"} />
						</div>
						<div className="tb">
							<TypeButton type={"Fruits"} />
						</div>
						<div className="tb">
							<TypeButton type={"Grains"} />
						</div>
						<div className="tb">
							<TypeButton type={"Proteins"} />
						</div>
						<div className="tb">
							<TypeButton type={"Snacks"} />
						</div>
						<div className="tb">
							<TypeButton type={"Beverages"} />
						</div>
						<div className="tb">
							<TypeButton type={"Sauces"} />
						</div>
						<div className="tb">
							<TypeButton type={"Fats"} />
						</div>
						<div className="tb">
							<TypeButton type={"Show All"} />
						</div>
					</div>
				</div>
				<div className="row cardrow">
					<div className="card-space col-md-3">
						<div className="card">
							<img
								className="card-img-top"
								src="https://www.carotene.org/wp-content/uploads/2017/09/Retinol-Equivalents.png"
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<a href="#" className="btn btn-primary">
									Go somewhere
								</a>
							</div>
						</div>
					</div>
					<div className="card-space col-md-3">
						<div className="card">
							<img
								className="card-img-top"
								src="https://www.carotene.org/wp-content/uploads/2017/09/Retinol-Equivalents.png"
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<a href="#" className="btn btn-primary">
									Go somewhere
								</a>
							</div>
						</div>
					</div>
					<div className="card-space col-md-3">
						<div className="card">
							<img
								className="card-img-top"
								src="https://www.carotene.org/wp-content/uploads/2017/09/Retinol-Equivalents.png"
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<a href="#" className="btn btn-primary">
									Go somewhere
								</a>
							</div>
						</div>
					</div>
					<div className="card-space col-md-3">
						<div className="card">
							<img
								className="card-img-top"
								src="https://www.carotene.org/wp-content/uploads/2017/09/Retinol-Equivalents.png"
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<a href="#" className="btn btn-primary">
									Go somewhere
								</a>
							</div>
						</div>
					</div>
					<div className="card-space col-md-3">
						<div className="card">
							<img
								className="card-img-top"
								src="https://www.carotene.org/wp-content/uploads/2017/09/Retinol-Equivalents.png"
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<a href="#" className="btn btn-primary">
									Go somewhere
								</a>
							</div>
						</div>
					</div>
					<div className="card-space col-md-3">
						<div className="card">
							<img
								className="card-img-top"
								src="https://www.carotene.org/wp-content/uploads/2017/09/Retinol-Equivalents.png"
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<a href="#" className="btn btn-primary">
									Go somewhere
								</a>
							</div>
						</div>
					</div>
					<div className="card-space col-md-3">
						<div className="card">
							<img
								className="card-img-top"
								src="https://www.carotene.org/wp-content/uploads/2017/09/Retinol-Equivalents.png"
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<a href="#" className="btn btn-primary">
									Go somewhere
								</a>
							</div>
						</div>
					</div>
					<div className="card-space col-md-3">
						<div className="card">
							<img
								className="card-img-top"
								src="https://www.carotene.org/wp-content/uploads/2017/09/Retinol-Equivalents.png"
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<a href="#" className="btn btn-primary">
									Go somewhere
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Groceries;
