var axios = require('axios');

var id = "viniolli";
var sec = "f85b0594e6ed80ab675d45a656b853d4bc970fce";
var param = "?client_id" + id + "&client_secret=" + sec;

function getUserInfo(username) {
	return axios.get('https://api.github.com/users/' + username + param);
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
	}
};

module.exports = helpers;
