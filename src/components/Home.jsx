import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
	render() {
  	return(
  		<div>
				<Link to="/about">ABOUT</Link>
        <h1>This is the big time home page!</h1>
			</div>
		);
	}
}

export default Home;