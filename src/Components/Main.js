import React, { Component } from 'react';
import '../Styles/Main.scss'
import ProfileHeader from './ProfileHeader';
import Profile from './Profile';
import Stats from './Stats';
import Skills from './Skills';
import Projects from './Projects';

class Main extends Component {
	state = {
		currentView: "overview"
	}

	toggleView = (view) => {
		console.log("meeeeeow");
		this.setState({
			currentView: view
		});
		console.log(this.state.currentView);
	}

	selectedView = () => {
		switch(this.state.currentView) {
			case "projects":
				return	<div>
							<Projects />
						</div>;
			case "blog":
				return <div> Blog </div>
			default: 
				return	<div>
							<Profile />
							<Stats />
							<Skills />
						</div>
		}
	}

	render() {
		return (
			<div className="main">
				<div className="personal">
					<ProfileHeader 
						toggleView= {this.toggleView}
					/> 
					<div>
						{this.selectedView()}
					</div>
				</div>
				<div>
					
				</div>
			</div>
		);
	}
}

export default Main;