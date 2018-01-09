module.exports = function(sequelize, DataTypes) {

	var Event = sequelize.define("Event", {
		game_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 140]
			}
		},
		min_players: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				len: [1, 2]
			}
		},
		max_players: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				len: [1, 3]
			}
		},
		game_date: {
			type: DataTypes.DATE,
			allowNull: false,
        },
        game_time: {
			type: DataTypes.TIME,
			allowNull: false,
        },
        game_fee: {
			type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
				len: [1, 3]
			}
        },
        min_birthdate: {
			type: DataTypes.DATE,
			allowNull: false,
        },
        address: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 60]
			}
		},
        city: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 45]
			}
		},
		state: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [2, 2]
			}
		},
		zip: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				len: [5, 5]
			}
        },
        equipment: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
            defaultValue: false,
        },
        disability: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
            defaultValue: false,
        },
        skill_level_code: {
			type: DataTypes.STRING,
            allowNull: false,
            validate: {
				len: [1, 30]
			}
        },
	});

	return Event

};