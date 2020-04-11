import React, { Component } from "react";
import Proptypes from "prop-types";

class TypeButton extends React.Component {
	constructor() {
		super();
		this.state = {
			// Initialize your state
		};
	}

	render() {
		return (
			<button type="button" className="btn btn-secondary">
				{this.props.type}
			</button>
		);
	}
}
/**
 * Define the data-types for
 * your component's properties
 **/
TypeButton.propTypes = {
	type: Proptypes.string
};

/**
 * Define the default values for
 * your component's properties
 **/
TypeButton.defaultProps = {};
export default TypeButton;
