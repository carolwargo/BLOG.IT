// IMPORT Model class and Datatypes obj from sequelize
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

// CREATE User model
class User extends Model {

  // METHOD to run instance data per user to check pw
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

// CREATE fields/columns for User model
User.init(
  {
    // TABLE COLUMN DEFINITIONS GO HERE
    // DEFINE ID column
    id: {
      // USE Sequelize DataTypes object to provide data type
      type: DataTypes.INTEGER,
      allowNull: false, // equiv to SQL's "NOT NULL" option
      primaryKey: true, // instruct that this is Primary Key
      autoIncrement: true, // turn on auto increment
    },
    // DEFINE username column
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // DEFINE email column
    email: {
      type: DataTypes.STRING,
      allowNull: false,

      // REFUSES duplicate email values in table
      unique: true,

      //  VALIDATE email address <string>@<string>.<string>
      validate: {
        isEmail: true,
      },
    },
    // DEFINE password column
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4],
      },
    },
  },
  {
    hooks: {
      // SET UP beforeCreate lifecycle hook
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },

      // SET UP beforeUpdate lifecycle hook
      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
    },


    // PASS in imported sequelize connection (direct connection to db)
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

// EXPORT User model
module.exports = User;