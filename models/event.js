module.exports = function(sequelize, DataTypes) {

	const Event = sequelize.define("Event", {
		game_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		event_name: {
			type: DataTypes.STRING(80),
			allowNull: false
		},
		event_time: {
			type: DataTypes.DATE,
			allowNull: false
		},
		event_date: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		min_players: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		max_players: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		equipment_binary: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		disability_binary: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		min_birthdate: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		game_fee: {
			type: DataTypes.DECIMAL(10,2),
			allowNull: false
		},
		game_on_boolean: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		city: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		state: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		zip: {
			type: DataTypes.STRING(5),
			allowNull: false
		},
		gender_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		sport_type_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		skill_level_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		owner_id: {
			type: DataTypes.INTEGER,
			references: {
				model: User,
				key: 'user_id'
			}
		}
	});

	return Event

};