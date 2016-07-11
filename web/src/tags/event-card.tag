<event-card>
  <div class="card">
    <div class="card-content">
      <a href='#{opts.name}' ><span class="card-title">{ opts.name }</span></a>
      <p class='jumbo'>{ opts.days }</p>
    </div>
    <div class="card-action" if={store.apiKey}>
      <a href onclick={resetEvent} >Reset</a>
    </div>
  </div>
  <style scope>
    .jumbo {
      font-size: 4em;
    }

    a {
      padding-top: 100px;
    }
  </style>
  <script>
    var tag = this;
    tag.mixin('store');
    tag.resetEvent = function(e) {
      e.preventDefault();
      tag.store.resetEvent(tag.opts.name);
    };
  </script>
</event-card>
