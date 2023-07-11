const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// CREATE Post model
class Post extends Model {

  // NOT instance method, but a model method
  // PASS in vote body and models object
  static upvote(body, models) {

    // PASS Vote model as an argument from post-routes.js
    return models.Vote.create({
      user_id: body.user_id,
      post_id: body.post_id,
    }).then(() => {
      return Post.findOne({
        where: {
          id: body.post_id,
        },
        include: [
            {
              model: models.Comment,
              attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
              include: {
                model: models.User,
                attributes: ['username']
              }
            }
          ]
      });
    });
  }
}

// CREATE fields/columns for Post model
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // foreign key to User's id column
    user_id: {
      type: DataTypes.INTEGER,

      // ESTABLISH association between post and user by connecting
      // primary key (id)
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    // DEFINE column names to have underscore naming convention
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;