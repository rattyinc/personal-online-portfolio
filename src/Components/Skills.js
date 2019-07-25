import React, { Component } from 'react';
import '../Styles/Skills.scss';
import '../Styles/Main.scss';

class Skills extends Component {
	state  = {
		skills: [
			"Programming - Java",
			"Programming - C++",
			"Programming - C#",
			"Programming - Javascript",
			"Programming - Actionscript",
			"Programming - Swift",
			"Programming - PHP",
			"Graphics",
			"Music, Sounds, Audio",
			"3D Modelling",
			"2D and 3D Animation",
			"Concept Art",
			"Web Development",
			"Playing Video Games"
		],
		isVisible: false
	}

	toggleVisibility = () => {
		this.setState({
			isVisible: !this.state.isVisible
		});
		var x = document.getElementsByClassName("skill-list");
		if (this.state.isVisible) {
			x[0].classList.add("hidden");
		} else {
			x[0].classList.remove("hidden");
		}
	}

	render() {
		return (
			<div className="skills">
				Skills and Experience <span onClick={this.toggleVisibility}>{ this.state.isVisible ? "🔽" : "▶️" } </span>
				<div className="hidden skill-list">
					{this.state.skills.map((skill, i)=>{
							return (
								<div key={"skill" + i}>
									{skill}
								</div>
							)
					})}
				</div>
			</div>
		);
	}
}

export default Skills;