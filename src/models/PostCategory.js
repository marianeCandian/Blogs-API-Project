module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
  'PostCategory',
  {
    postId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'posts_categories',
  },
);

PostCategory.associate = ({Category, BlogPost}) => {
  Category.belongsToMany(BlogPost, {
    as: 'categories',
    through: PostCategory,
    foreignKey: 'categoryId',
    otherKey: 'postId',
  });
  BlogPost.belongsToMany(Category, {
    as: 'blogposts',
    through: PostCategory,
    foreignKey: 'postId',
    otherKey: 'categoryId'
  })
};

  return PostCategory;
};