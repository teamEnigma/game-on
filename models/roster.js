module.exports = function(sequelize, DataTypes) {
	//blank table [if this doesn't work will input a roster id]
	const Roster = sequelize.define("Roster", {

	});

	Roster.associate = function(models) {
		//event_id as the first column of the Roster
		Roster.belongsTo(models.Event, {
			foreignKey: {
				allowNull: false,
				primaryKey: true
			}
		});
		//user_id as the second column of the Roster
		Roster.belongsTo(models.User, {
			foreignKey: {
				allowNull: false,
				primaryKey: true
			}
		});
	};

	return Roster

};