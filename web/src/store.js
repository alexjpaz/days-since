var api = require('./api');

function Store() {
  var self = this;
  riot.observable(this);

  this.apiKey = localStorage.getItem('daysSince.apiKey');

  this.on('resetEvent', function(eventName, resetDate) {
    api.resetEvent(eventName, resetDate);
  });

  setInterval(function() {
  }, 100);

     function calculateDays(lastDate) {
       var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
       var today = new Date();

       var diffDays = Math.floor(Math.abs((lastDate.getTime() - today.getTime())/(oneDay)));
       return diffDays;
     }

     function fetch() {
      api.fetch(function(data) {
        var events = Object.keys(data.daysSince).map(function(k) {
          return {
            name: k,
            date: new Date(data.daysSince[k].lastTime),
            days: calculateDays(new Date(data.daysSince[k].lastTime))
          };
        });
        self.trigger('dataFetched', events);
      });
    }

    fetch();
    setInterval(fetch, 1000);

}

module.exports = Store;
