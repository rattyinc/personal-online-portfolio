import React, { Component } from 'react';
import '../Styles/ProfileHeader.scss';
import profilePicture from '../Assets/test.png';

class ProfileHeader extends Component {
	render() {
		return (
			<div className="profile-header">
				<div className='profile-picture'>
					<img src={profilePicture} alt='bop'/>
				</div> 
				<div>
					<div className='profile-buttons'> 
						[] [] []
					</div>
					<div className='profile-short-description'>Full-Stack Game Developer</div>
					<br/>
					<div className='nav-button' onClick={() => this.props.toggleView("overview")}>Overview</div>
					<div className='nav-button' onClick={() => this.props.toggleView("projects")}>Projects</div>
					<div className='nav-button' onClick={() => this.props.toggleView("blog")}>Blog</div>
				</div>
			</div>
		);
	}
}

export default ProfileHeader;