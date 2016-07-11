<event-list>
  <div each={e in eventsKeys} class='row'>
    <div class='col s12'>
      <event-card id={events[e].name} name={events[e].name} days={events[e].days} date='{events[e].date}'></event-card>
    </div>
  </div>
  <script>
    var tag = this;
    tag.events = [];
    tag.mixin('store');

    tag.eventKeys = [];

    tag.store.on('dataFetched', function(events) {
      tag.events = events;
      tag.eventsKeys = Object.keys(events);
      tag.update();
    });

    var subRoute = riot.route.create();
    subRoute("/?name=(.*)", function(d) {
      console.log(d);
    });
  </script>
</event-list>
