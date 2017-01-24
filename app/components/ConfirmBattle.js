var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var Link = require('react-router').Link;
var UserDetails = require('./UserDetails');
var UserDetailsWrepper = require('./UserDetailsWrapper');

function puke(object) {
	return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function ConfirmBattle (props) {
	return props.isLoading === true
		? <p> Loading! </p>
		: <div className="jumbotron col-sm-12 text-center" style={styles.transparentBG}>
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
				<div className="col-sm-12" style={styles.space}>
					<button type="button" className="btn btn-lg btn-success" onClick={props.onInitiateBattle}>
						Initiate Battle!
					</button>
				</div>
				<div className="col-sm-12" style={styles.space}>
					<Link to='/playerOne'>
						<button type="button" className="btn btn-lg btn-danger">
							Reset players
						</button>
					</Link>
				</div>
			</div>
		</div>
}

ConfirmBattle.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	playersInfo: PropTypes.array.isRequired,
	onInitiateBattle: PropTypes.func.isRequired
}

module.exports = ConfirmBattle;
