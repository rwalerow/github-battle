var axios = require('axios');

var id = "viniolli";
var sec = "f85b0594e6ed80ab675d45a656b853d4bc970fce";
var param = "?client_id" + id + "&client_secret=" + sec;

function getUserInfo(username) {
	return axios.get('https://api.github.com/users/' + username + param);
}

function getRepos(username) {
	return axios.get('https://api.github.com/users/' + username + '/repos' + param + '&per_page=100');
}

function getTotalStars(repos) {
	return repos.data.reduce(function(prev, curr){
		return prev + curr.stargazers_count
	}, 0)
}

function getPlayersData(player) {
	return getRepos(player.login)
		.then(getTotalStars)
		.then(function(totalStars){
			return {
				followers: player.followers,
				totalStars: totalStars
			}
		})
}

function calculateScores(players) {
	return [
		players[0].followers * 3 + players[0].totalStars,
		players[1].followers * 3 + players[1].totalStars,
	]
}

var helpers = {
	getPlayersInfos: function(players) {
		return axios.all(players.map(function(username){
			return getUserInfo(username)
				.then(function(user){
					return user.data;
				})
		})).catch(function(err){
			console.warn('Error in getPlayersInfos', err)
		})
	},
	battle: function(players) {
		var playerOne = getPlayersData(players[0]);
		var playerTwo = getPlayersData(players[1]);

		return axios.all([playerOne, playerTwo])
			.then(calculateScores)
			.catch(function(err){
				console.warn('Error in getPlayersInfo: ', err)
			})
	}
};

module.exports = helpers;
