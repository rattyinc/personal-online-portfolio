import React, { Component } from 'react';
import '../Styles/Profile.scss';

class Profile extends Component {
	render() {
		return (
			<div className="profile">
				<div className='display-name'>
					<h1>Nathan Rad</h1>
				</div>
				<div className='bio'>
					<p>
						For the most part I’m a video game enthusiast who is following the lucrative 
						trail of a 5 year old’s dream of becoming a professional games developer.
					</p>
					<p>
						Outside of video games I enjoy a multitude of life’s contents such as Sports, 
						Music, Film and Science to name a few.
						<br/>
						I also have music capabilities which include but are not limited to playing Guitars.
					</p>
				</div>
			</div>
		);
	}
}

export default Profile;