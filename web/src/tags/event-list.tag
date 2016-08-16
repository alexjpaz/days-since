<event-list>
  <div each={e in eventKeys} class='row'>
    <div class='col s12'>
      <event-card id={events[e].name} name={events[e].name} days={events[e].days} date='{events[e].date}'></event-card>
    </div>
  </div>
  <a href='#/' class='btn btn-link'>Clear Filters</a>
  <script>
    var tag = this;

    tag.events = [];
    tag.mixin('store');

    tag.nameFilter = null;

    tag.store.on('dataFetched', function(events) {
      tag.events = events;
      tag.filterEvents(tag.nameFilter);
      tag.update();
    });

    tag.filterEvents = function(name) {
      tag.eventKeys = Object.keys(tag.events);
      if(!name) {
        return;
      }
      var keys = tag.eventKeys.filter(function(k) {
        return name === tag.events[k].name;
      });

      if(keys.length > 0) {
        tag.eventKeys = keys;
      }
    };

    var subRoute = riot.route.create();
    subRoute("/..", function(d) {
      tag.nameFilter = decodeURIComponent(riot.route.query().name);
      tag.filterEvents(tag.nameFilter);
      tag.update();
    });
  </script>
</event-list>
