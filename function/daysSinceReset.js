var AWS = require('aws-sdk');
var s3 = new AWS.S3();

exports.module = function(event, context, callback) {
    s3.getObject({
      Bucket: 'alexjpaz.com',
      Key: 'days-since/data.json',
    }, function(err, data) {
      if(err) {
        callback(err, data);
        return;
      }

      var dataJson = {};

      if(!!data.Body && data.Body.length > 0) {
        dataJson = JSON.parse(data.Body);
      }

      dataJson.daysSince = dataJson.daysSince || {};
      dataJson.daysSince[event.key] = dataJson.daysSince[event.key] || {};
      dataJson.daysSince[event.key].lastTime = event.dateString;

      s3.putObject({
        Bucket: 'alexjpaz.com',
        Key: 'days-since/data.json',
        ContentType: "application/javascript",
        Body: jsString,
        CacheControl: "max-age=0"
      }, function(err, data) {
        callback(err, data);
      });
   });
};
