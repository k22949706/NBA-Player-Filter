/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: players
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `players` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `team_acronym` varchar(50) NOT NULL,
  `team_name` varchar(50) NOT NULL,
  `games_played` int NOT NULL,
  `minutes_per_game` varchar(50) NOT NULL,
  `field_goals_attempted_per_game` int NOT NULL,
  `field_goals_made_per_game` int NOT NULL,
  `field_goal_percentage` int NOT NULL,
  `free_throw_percentage` int NOT NULL,
  `three_point_attempted_per_game` int NOT NULL,
  `three_point_made_per_game` int NOT NULL,
  `three_point_percentage` int NOT NULL,
  `points_per_game` int NOT NULL,
  `offensive_rebounds_per_game` int NOT NULL,
  `defensive_rebounds_per_game` int NOT NULL,
  `rebounds_per_game` int NOT NULL,
  `assists_per_game` int NOT NULL,
  `steals_per_game` int NOT NULL,
  `blocks_per_game` int NOT NULL,
  `turnovers_per_game` int NOT NULL,
  `player_efficiency_rating` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 2 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: players
# ------------------------------------------------------------

INSERT INTO
  `players` (
    `id`,
    `name`,
    `team_acronym`,
    `team_name`,
    `games_played`,
    `minutes_per_game`,
    `field_goals_attempted_per_game`,
    `field_goals_made_per_game`,
    `field_goal_percentage`,
    `free_throw_percentage`,
    `three_point_attempted_per_game`,
    `three_point_made_per_game`,
    `three_point_percentage`,
    `points_per_game`,
    `offensive_rebounds_per_game`,
    `defensive_rebounds_per_game`,
    `rebounds_per_game`,
    `assists_per_game`,
    `steals_per_game`,
    `blocks_per_game`,
    `turnovers_per_game`,
    `player_efficiency_rating`
  )
VALUES
  (
    1,
    'Aaron Brooks',
    'min',
    'Minnesota Timberwolves',
    23,
    '6:38',
    2,
    1,
    43,
    75,
    1,
    0,
    33,
    2,
    0,
    0,
    1,
    1,
    0,
    0,
    0,
    1
  );
INSERT INTO
  `players` (
    `id`,
    `name`,
    `team_acronym`,
    `team_name`,
    `games_played`,
    `minutes_per_game`,
    `field_goals_attempted_per_game`,
    `field_goals_made_per_game`,
    `field_goal_percentage`,
    `free_throw_percentage`,
    `three_point_attempted_per_game`,
    `three_point_made_per_game`,
    `three_point_percentage`,
    `points_per_game`,
    `offensive_rebounds_per_game`,
    `defensive_rebounds_per_game`,
    `rebounds_per_game`,
    `assists_per_game`,
    `steals_per_game`,
    `blocks_per_game`,
    `turnovers_per_game`,
    `player_efficiency_rating`
  )
VALUES
  (
    2,
    'Aaron Gordon',
    'orl',
    'Orlando Magic',
    38,
    '33:49',
    15,
    7,
    45,
    74,
    6,
    2,
    35,
    18,
    2,
    7,
    8,
    2,
    1,
    1,
    2,
    2
  );
INSERT INTO
  `players` (
    `id`,
    `name`,
    `team_acronym`,
    `team_name`,
    `games_played`,
    `minutes_per_game`,
    `field_goals_attempted_per_game`,
    `field_goals_made_per_game`,
    `field_goal_percentage`,
    `free_throw_percentage`,
    `three_point_attempted_per_game`,
    `three_point_made_per_game`,
    `three_point_percentage`,
    `points_per_game`,
    `offensive_rebounds_per_game`,
    `defensive_rebounds_per_game`,
    `rebounds_per_game`,
    `assists_per_game`,
    `steals_per_game`,
    `blocks_per_game`,
    `turnovers_per_game`,
    `player_efficiency_rating`
  )
VALUES
  (
    3,
    'Abdel Nader',
    'bos',
    'Boston Celtics',
    22,
    '7:26',
    2,
    1,
    35,
    33,
    1,
    0,
    33,
    2,
    0,
    1,
    1,
    0,
    0,
    0,
    0,
    1
  );
INSERT INTO
  `players` (
    `id`,
    `name`,
    `team_acronym`,
    `team_name`,
    `games_played`,
    `minutes_per_game`,
    `field_goals_attempted_per_game`,
    `field_goals_made_per_game`,
    `field_goal_percentage`,
    `free_throw_percentage`,
    `three_point_attempted_per_game`,
    `three_point_made_per_game`,
    `three_point_percentage`,
    `points_per_game`,
    `offensive_rebounds_per_game`,
    `defensive_rebounds_per_game`,
    `rebounds_per_game`,
    `assists_per_game`,
    `steals_per_game`,
    `blocks_per_game`,
    `turnovers_per_game`,
    `player_efficiency_rating`
  )
VALUES
  (
    4,
    'Adreian Payne',
    'orl',
    'Orlando Magic',
    5,
    '8:30',
    2,
    1,
    70,
    83,
    1,
    0,
    67,
    4,
    0,
    1,
    2,
    0,
    0,
    0,
    0,
    1
  );

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
