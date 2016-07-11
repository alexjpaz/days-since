<event-list>
    <div each={e in events} class='row'>
      <div class='col s12'>
        <event-card id={e.name} name={e.name} days={e.days}></event-card>
      </div>
  </div>
  <script>
    var tag = this;
    tag.events = [];
    tag.mixin('store');
    tag.store.on('dataFetched', function(events) {
      tag.events = events;
      tag.update();
    });
  </script>
</event-list>
