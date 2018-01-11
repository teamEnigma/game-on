module.exports = function(sequelize, DataTypes) {
	//establish the User table in the MySQL database w/ Sequelize
	const User = sequelize.define("User", {
		//primary identifier
		user_id: {
		 	type: DataTypes.INTEGER,
		 	primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		//first name
		first_name: {
			type: DataTypes.STRING(30),
			allowNull: false
		},
		//last name
		last_name: {
			type: DataTypes.STRING(30),
			allowNull: false
		},
		//user gender from a dropdown array
		user_gender: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		//email address verified on front-end
		email: {
			type: DataTypes.STRING(80),
			allowNull: false
		},
		//password
		password: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		//10 character mobile number
		mobile_number: {
			type: DataTypes.STRING(10),
			allowNull: false
		},
		//birthdate passed from mmddyyyy in front-end
		birthdate: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		//city where the user is located
		city: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		//state chosen from array-based dropdown
		state: {
			type: DataTypes.CHAR(2),
			allowNull: false
		},
		//five digit zip code
		zip: { 
			type: DataTypes.STRING(5),
			allowNull: false
		}
	});

	return User

};
