var mysql      = require("mysql");
var connection = mysql.createConnection({
    host     : "localhost",
    user     : "root",
    password : "123456",
    database : "nba",
    port     : "3301"
});
 
connection.connect();
 
const fs = require("fs");
var data = fs.readFileSync("./players.json");

data = JSON.parse(data);
console.log(data)
data.forEach((item, index) => {
    var id = 0;
    var name = item["name"];
    var team_acronym = item["team_acronym"];
    var team_name = item["team_name"];
    var games_played = item["games_played"];
    var minutes_per_game = item["minutes_per_game"];
    var field_goals_attempted_per_game = item["field_goals_attempted_per_game"];
    var field_goals_made_per_game = item["field_goals_made_per_game"];
    var field_goal_percentage = item["field_goal_percentage"];
    var free_throw_percentage = item["free_throw_percentage"];
    var three_point_attempted_per_game = item["three_point_attempted_per_game"];
    var three_point_made_per_game = item["three_point_made_per_game"];
    var three_point_percentage = item["three_point_percentage"];
    var points_per_game = item["points_per_game"];
    var offensive_rebounds_per_game = item["offensive_rebounds_per_game"];
    var defensive_rebounds_per_game = item["defensive_rebounds_per_game"];
    var rebounds_per_game = item["rebounds_per_game"];
    var assists_per_game = item["assists_per_game"];
    var steals_per_game = item["steals_per_game"];
    var blocks_per_game = item["blocks_per_game"];
    var turnovers_per_game = item["turnovers_per_game"];
    var player_efficiency_rating = item["player_efficiency_rating"];
    
    var query = `insert into players values ("${id}","${name}","${team_acronym}","${team_name}","${games_played}","${minutes_per_game}","${field_goals_attempted_per_game}","${field_goals_made_per_game}","${field_goal_percentage}","${free_throw_percentage}","${three_point_attempted_per_game}","${three_point_made_per_game}","${three_point_percentage}","${points_per_game}","${offensive_rebounds_per_game}","${defensive_rebounds_per_game}","${rebounds_per_game}","${assists_per_game}","${steals_per_game}","${blocks_per_game}","${turnovers_per_game}","${player_efficiency_rating}")`
    connection.query(query, function(err,data) {
            if(err) throw err;
            console.log(data);
        }
    );
});
connection.end();

var mysqldump = require('mysqldump');

mysqldump({
    connection: {
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'nba',
        port: '3301'
    },
    dumpToFile: './nba.sql',
});