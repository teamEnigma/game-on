module.exports = function(sequelize, DataTypes) {
	const Roster = sequelize.define("Roster", {
		user_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			references: {
				model: User,
				key: 'user_id'
			}
		},
		game_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			references: {
				model: Event,
				key: 'game_id'
			}
		}
	});

	return Roster

};