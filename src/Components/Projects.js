import React, { Component } from 'react';
import '../Styles/Projects.scss';

class Projects extends Component {
	render() {
		return (
			<div className='projects'>
				<div className='projects-grid'>
					{this.props.projects.map((project, i) => {
						return (
							<img src={project.imgUrl} key={"project" + i}/>
						)})
					}
				</div>
			</div>
		);
	}
}

export default Projects;