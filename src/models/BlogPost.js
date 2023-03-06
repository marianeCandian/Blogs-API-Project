module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define(
  'BlogPost',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  {
    underscored: true,
    tableName: 'blog_posts',
  },
);

BlogPost.associate = (models) => {
  BlogPost.belongsTo(models.User, {
    foreignKey: 'userId',
    as: 'user',
  });
};

  return BlogPost;
};