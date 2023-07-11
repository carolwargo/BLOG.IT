// IMPORT all sequelize models
const Post = require("./Post");
const User = require("./User");
const Comment = require("./Comment");

// CREATE associations
// One to many relationship
User.hasMany(Post, {
    foreignKey: "user_id"
});

// One to one relationship
Post.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "SET NULL"
});

// Many to many relationship
Comment.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "SET NULL"
});

// Many to many relationship
Comment.belongsTo(Post, {
    foreignKey: "post_id",
    onDelete: "SET NULL"
});

// One to many relationship
User.hasMany(Comment, {
    foreignKey: "user_id",
    onDelete: "SET NULL"
});

// One to many relationship
Post.hasMany(Comment, {
    foreignKey: "post_id"
});

// EXPORT modules
module.exports = { User, Post, Comment };