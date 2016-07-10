var api = require('../api');
<event-list>
    <div each={e in events} class='row'>
      <div class='col s12'>
        <event-card id={e.name} name={e.name} days={e.days}></event-card>
      </div>
  </div>
  <script>
    var tag = this;
    tag.events = [];

     function calculateDays(lastDate) {
       var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
       var today = new Date();

       var diffDays = Math.floor(Math.abs((lastDate.getTime() - today.getTime())/(oneDay)));
       return diffDays;
     }

     function fetch() {
      api.fetch(function(data) {
        tag.events = Object.keys(data.daysSince).map(function(k) {
          return {
            name: k,
            days: calculateDays(new Date(data.daysSince[k].lastTime))
          };
        });
        tag.update();
      });
    }

    fetch();
    setInterval(fetch, 1000);
  </script>
</event-list>
