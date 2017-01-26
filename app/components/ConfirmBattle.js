import React, { PropTypes } from 'react'
import { space }  from '../styles'
import { Link } from 'react-router'
import UserDetails from './UserDetails'
import UserDetailsWrepper from './UserDetailsWrapper'
import MainContainer from './MainContainer'
import Loading from './Loading'

function ConfirmBattle (props) {
	return props.isLoading === true
		? <Loading speed={800} text='Waiting'/>
		: <MainContainer>
			<h1>Confirm Players</h1>
			<div className="col-sm-8 col-sm-offset-2">
				<UserDetailsWrepper header="Player One">
					<UserDetails info={props.playersInfo[0]} />
				</UserDetailsWrepper>
				<UserDetailsWrepper header="Player Two">
					<UserDetails info={props.playersInfo[1]} />
				</UserDetailsWrepper>
			</div>
			<div className="col-sm-8 col-sm-offset-2">
				<div className="col-sm-12" style={space}>
					<button type="button" className="btn btn-lg btn-success" onClick={props.onInitiateBattle}>
						Initiate Battle!
					</button>
				</div>
				<div className="col-sm-12" style={space}>
					<Link to='/playerOne'>
						<button type="button" className="btn btn-lg btn-danger">
							Reset players
						</button>
					</Link>
				</div>
			</div>
		</MainContainer>
}

ConfirmBattle.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	playersInfo: PropTypes.array.isRequired,
	onInitiateBattle: PropTypes.func.isRequired
}

export default ConfirmBattle
