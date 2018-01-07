module.exports = function(sequelize, DataTypes) {

	var Users = sequelize.define("Users", {
		first_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 30]
			}
		},
		last_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 30]
			}
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 80],
				isEmail: true
			}
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [5, 50]
			}
		},
		cell_phone: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [10, 10]
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
		}
	});

	return Users

};

