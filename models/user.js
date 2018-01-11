module.exports = function(sequelize, DataTypes) {

	var Users = sequelize.define("Users", {
		first_name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		last_name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		},
		cell_phone: {
			type: DataTypes.STRING,
			allowNull: false
		},
		birthdate: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		city: {
			type: DataTypes.STRING,
			allowNull: false
		},
		state: {
			type: DataTypes.STRING,
			allowNull: false
		},
		zip: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	});

	return Users

};

