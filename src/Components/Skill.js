import React, { Component } from 'react';
import '../Styles/Skill.scss';

class Skill extends Component {
	state = {
		isExpanded: false
	}

	toggleDetails = () => {
		this.setState({
			isExpanded: !this.state.isExpanded
		});
	}

	render() {
		return (
			<div className="skill">
				<div>
					{this.props.skill.name}
				</div>
				<div className="skill-detail" onClick={this.toggleDetails}> View Details </div>
				{ this.state.isExpanded && 
					<div> {this.props.skill.details} </div>
				}
			</div>
		);
	}
}

export default Skill;