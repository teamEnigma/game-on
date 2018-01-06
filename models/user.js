module.exports = function(sequelize, DataTypes) {

	var Users = sequelize.define("Users", {
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				length: [1, 80],
				isEmail: true
			}
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				length: [5, 50]
			}
		},
		mobile: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				length: [10, 10]
			}
		},
		first_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				length: [1, 30]
			}
		},
		last_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				length: [1, 30]
			}
		},
		birthdate: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		city: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				length: [1, 45]
			}
		},
		state: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				length: [2, 2]
			}
		},
		zip: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				length: [5, 5]
			}
		}
	});

	return Users

};

