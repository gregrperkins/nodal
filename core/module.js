module.exports = {
  Application: require('./required/application.js'),
  Controller: require('./required/controller.js'),
  Model: require('./required/model.js'),
  Database: require('./required/db/database.js'),
  Migration: require('./required/db/migration.js'),
  require: function(filename) {
    return require(process.cwd() + '/' + filename);
  }
};
