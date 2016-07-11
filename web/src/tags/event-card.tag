<event-card>
  <div class="card" id={opts.name}>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">{ opts.name }<i class="material-icons right">more_vert</i></span>
      <p class='jumbo'>{ opts.days }</p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">{ opts.name }<i class="material-icons right">close</i></span>
      <p>
        <form id='resetForm'>
          <input type="date" class="datepicker" name='date' onchange={setResetDate}>
          <a class="waves-effect waves-light btn" onclick={resetEvent} href>Set Date</a>
        </form>
      </p>
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

    this.on('update', function () {
      if(!tag.resetDate) {
        tag.resetDate = tag.opts.date || new Date();
        tag.resetDate.setHours(0,0,0,0);
        tag.resetForm.date.value = tag.resetDate.toISOString().slice(0,10);
      }
    });

    tag.setResetDate = function(e) {
      tag.resetDate = new Date(tag.resetForm.date.value);
      tag.resetDate.setDate(tag.resetDate.getDate() + 1);
      tag.resetDate.setHours(0,0,0,0);
    };

    tag.resetEvent = function(e) {
      e.preventDefault();
      tag.store.trigger('resetEvent', tag.opts.name, tag.resetDate);
    };
  </script>
</event-card>
