import React, { Component } from 'react';
import '../Styles/Main.scss'
import ProfileHeader from './ProfileHeader';
import Profile from './Profile';
import Stats from './Stats';
import Skills from './Skills';
import Projects from './Projects';

class Main extends Component {
	state = {
		currentView: "overview",
		projects: [
			{
				imgUrl: "https://cdn.discordapp.com/attachments/483438846206410779/512525014847848458/BoW_cover_Img.jpg",
				name: "Body of Work"
			},
			{
				imgUrl: "https://cdn.discordapp.com/attachments/483438846206410779/512525383778697226/gateway_cover_img.jpg",
				name: "Gateway"
			},
			{
				imgUrl: "https://cdn.discordapp.com/attachments/483438846206410779/512525014847848458/BoW_cover_Img.jpg",
				name: "Body of Work"
			},
			{
				imgUrl: "https://cdn.discordapp.com/attachments/483438846206410779/512525014847848458/BoW_cover_Img.jpg",
				name: "Body of Work"
			},
			
		]
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
				return	<div className="panel-view">
							<Projects 
								projects={this.state.projects}
							/>
						</div>;
			case "blog":
				return <div className="panel-view"> Blog </div>
			default: 
				return	<div className="panel-view">
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
					{this.selectedView()}
				</div>
				<div>
					
				</div>
			</div>
		);
	}
}

export default Main;