const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//CREATE comment model
class Comment extends Model {}

// CREATE fields/columns for comment model
Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    comment_text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user', // Reference to the 'user' model
        key: 'id' // The primary key of the 'user' model
      }
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'post', // Reference to the 'post' model
        key: 'id' // The primary key of the 'post' model
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
  }
);

// EXPORT comment model
module.exports = Comment;
