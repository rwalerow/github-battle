import React from 'react'
import { transparentBG } from '../styles'
import { Link } from 'react-router'
import MainContainer from './MainContainer'

const Home = React.createClass({
	render: function() {
		return (
			<MainContainer>
				<h1>Github Battle</h1>
				<p className="lead">Some fancy motto</p>
				<Link to='/playerOne'>
					<button type='button' className='btn btn-lg btn-success'>
						Get Started
					</button>
				</Link>
			</MainContainer>
		)
	}
});

export default Home
