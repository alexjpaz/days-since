var daysSinceReset = require('./daysSinceReset');

exports.handler = function(event, context, callback) {
  daysSinceReset(event, context, callback);
};
