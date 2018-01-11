module.exports = function(sequelize, DataTypes) {
	//establish the Event table in the MySQL database w/ Sequelize
	const Event = sequelize.define("Event", {
		//primary game identifier
		game_id: {
		 	type: DataTypes.INTEGER,
		 	primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		//chosen name of event
		event_name: {
			type: DataTypes.STRING(80),
			allowNull: false
		},
		//chosen time of event passed from hh:mm on front end
		event_time: {
			type: DataTypes.DATE,
			allowNull: false
		},
		//chosen date of event passed from mmddyyyy on front end
		event_date: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		//minimum # of players for game to occur
		min_players: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		//maximum limit of players
		max_players: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		//whether users need to bring their own equipment
		equipment_binary: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		//whether users with disabilities are able to be accomodated
		disability_binary: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		//specifies the minimum age for users to play in the event
		min_birthdate: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		//fee as a float or 0.00 if no game fee
		game_fee: {
			type: DataTypes.DECIMAL(10,2),
			allowNull: false
		},
		//identifies whether the min limit has been reached to control external contact functions
		game_on_boolean: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		//city where the event will take place
		city: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		//state passed from an array dropdown on the front-end
		state: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		//five digit zip code
		zip: {
			type: DataTypes.STRING(5),
			allowNull: false
		},
		//gender passed from an array dropdown on the front-end
		gender_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		//sport type passed from an array dropdown on the front-end
		sport_type_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		//skill level passed from an array dropdown on the front-end
		skill_level_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	});

	//event must be tied to a user_id
	Event.associate = function(models) {
		Event.belongsTo(models.User, {
			foreignKey: {
				allowNull: false
			}
		});
	};

	return Event;

};