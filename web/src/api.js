var apiKey = localStorage.getItem('daysSince.apiKey');

module.exports = {
  fetch: function(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './data.json?_='+new Date().getTime());
    xhr.onload = function() {
      var json = JSON.parse(this.responseText);
      callback(json);
    };
    xhr.send();

  },
  resetEvent: function(eventName) {
    apiKey = localStorage.getItem('daysSince.apiKey');

    var newDate = new Date();
    newDate.setHours(0,0,0,0);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://5wfplwbug8.execute-api.us-east-1.amazonaws.com/prod/days-since')
    xhr.setRequestHeader("x-api-key", apiKey);
    xhr.send(JSON.stringify({
      key: eventName,
      dateString: newDate.toString()
    }));
  }
};
