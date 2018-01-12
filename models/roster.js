module.exports = function(sequelize, DataTypes) {
	//blank table [if this doesn't work will input a roster id]
	const Roster = sequelize.define("Roster", {

	});

	Roster.associate = function(models) {
		//event_id as the first column of the Roster
		Roster.belongsTo(models.Event, {
			event_id: {
				allowNull: false,
				primaryKey: true
			}
		});
		//user_id as the second column of the Roster
		Roster.belongsTo(models.User, {
			user_id: {
				allowNull: false,
				primaryKey: true
			}
		});
	};

	return Roster

};