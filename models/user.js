module.exports = function(sequelize, DataTypes) {
	
	const User = sequelize.define("User", {
		user_id: {
			type: Sequelize.INTEGER,
			primaryKey: true
		},
		first_name: {
			type: Sequelize.STRING(30),
			allowNull: false
		},
		last_name: {
			type: Sequelize.STRING(30),
			allowNull: false
		},
		email: {
			type: Sequelize.STRING(80),
			allowNull: false
		},
		password: {
			type: Sequelize.STRING(45),
			allowNull: false
		},
		mobile_number: {
			type: Sequelize.STRING(10),
			allowNull: false
		},
		birthdate: {
			type: Sequelize.DATEONLY,
			allowNull: false
		},
		city: {
			type: Sequelize.STRING(45),
			allowNull: false
		},
		state: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		zip: { 
			type: Sequelize.STRING(5),
			allowNull: false
		}
	});

	return User

	const Event = sequelize.define("Event", {
		game_id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		event_name: {
			type: Sequelize.STRING(80),
			allowNull: false
		},
		event_time: {
			type: Sequelize.DATE,
			allowNull: false
		},
		event_date: {
			type: Sequelize.DATEONLY,
			allowNull: false
		},
		min_players: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		max_players: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		equipment_binary: {
			type: Sequelize.BOOLEAN,
			allowNull: false
		},
		disability_binary: {
			type: Sequelize.BOOLEAN,
			allowNull: false
		},
		min_birthdate: {
			type: Sequelize.DATEONLY,
			allowNull: false
		},
		game_fee: {
			type: Sequelize.DECIMAL(10,2),
			allowNull: false
		},
		game_on_boolean: {
			type: Sequelize.BOOLEAN,
			allowNull: false
		},
		city: {
			type: Sequelize.STRING(45),
			allowNull: false
		},
		state: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		zip: {
			type: Sequelize.STRING(5),
			allowNull: false
		},
		gender_id: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		sport_type_id: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		skill_level_id: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		owner_id: {
			type: Sequelize.INTEGER,
			references: {
				model: User,
				key: 'user_id'
			}
		}
	});

	return Event

	const Roster = sequelize.define("Roster", {
		user_id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			references: {
				model: User,
				key: 'user_id'
			}
		},
		game_id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			references: {
				model: Event,
				key: 'game_id'
			}
		}
	});

	return Roster
}
