import React, { Component } from 'react';
import '../Styles/Skills.scss';
import '../Styles/Main.scss';
import Skill from './Skill.js';

class Skills extends Component {
	state  = {
		skills: [ 
					{
						name: "Programming - Java",
						details: "fuck m8"
					},
					{
						name: "Programming - C#",
						details: "fuck m8"
					},
					{
						name: "Programming - COCK SUCKING",
						details: "fat 1s"
					},
					{
						name: "Programming - Swift",
						details: "fuck m8"
					},


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
				<h3> Skills and Experience </h3>
				<div className="skill-list">
					{this.state.skills.map((skill, i)=>{
							return (
								<div key={"skill" + i}>
									<Skill 
										skill={skill}
									/>
								</div>
							)
					})}
				</div>
			</div>
		);
	}
}

export default Skills;