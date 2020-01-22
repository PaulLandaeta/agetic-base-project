'use strict';
module.exports = (sequelize, DataTypes) => {
  let user = sequelize.define('user', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    token: DataTypes.STRING,
  },
  { freezeTableName: true , timestamps: false}
  );
  
  user.findAll().then(user => {
    console.log("All authors:", JSON.stringify(user, null, 4));
  });
  
  /*console.log(User)
  user.associate = function(models) {
    models.user.hasMany(models.Task);
  };*/

  return user;
};