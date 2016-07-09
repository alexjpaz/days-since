module.exports = {
  init: function() {
    var daysSinceKey = location.hash.replace('#','');
    var app = {};
    app.render = function(id, text) {
      var node = document.getElementById(id);
      if(node) {
        node.innerHTML = text;
      }
    };

    app.renderList = function(id, array) {
      var text = "";
      array.forEach(function(e) {
        text += "<li><a href='#__E__'>__E__</a></li>".replace(/__E__/g, e);
      });
      app.render(id, text);
    };

    function updateModel(model) {
      var daysSinceKey = location.hash.replace('#','');

      if(!daysSinceKey || daysSinceKey === '')  {
        return;
      }

      var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
      var lastTime = new Date(model.daysSince[daysSinceKey].lastTime);
      var today = new Date();

      var diffDays = Math.floor(Math.abs((lastTime.getTime() - today.getTime())/(oneDay)));

      app.render('days', diffDays);
      app.render('date', lastTime.toString());
      app.renderList('other-events', Object.keys(model.daysSince));
    }

    function fetchData() {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', './data.json?_='+new Date().getTime());
      xhr.onload = function() {
        var json = JSON.parse(this.responseText);

        updateModel(json);
      };
      xhr.send();
    }

    fetchData();
    setInterval(fetchData, 1000);


    (function() {
      var apiKey = localStorage.getItem('daysSince.apiKey');

      var node = document.getElementById('reset');
      if(node) {
        if(apiKey) {
          node.style.display = '';
        }
        node.addEventListener('click', function(e) {
          e.preventDefault();
          var newDate = new Date();
          newDate.setHours(0,0,0,0);

          var xhr = new XMLHttpRequest();
          xhr.open('POST', 'https://5wfplwbug8.execute-api.us-east-1.amazonaws.com/prod/days-since')
          xhr.setRequestHeader("x-api-key", apiKey);
          xhr.send(JSON.stringify({
            key: daysSinceKey,
            dateString: newDate.toString()
          }));
        }, false);
      }
    })();
  }
};
