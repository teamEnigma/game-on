module.exports = function(sequelize, DataTypes) {
	
	const User = sequelize.define("User", {
		user_id: {
			type: DataTypes.INTEGER,
			primaryKey: true
		},
		first_name: {
			type: DataTypes.STRING(30),
			allowNull: false
		},
		last_name: {
			type: DataTypes.STRING(30),
			allowNull: false
		},
		email: {
			type: DataTypes.STRING(80),
			allowNull: false
		},
		password: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		mobile_number: {
			type: DataTypes.STRING(10),
			allowNull: false
		},
		birthdate: {
			type: DataTypes.DATEONLY,
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
		}
	});

	return User

};
