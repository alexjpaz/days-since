<add-event-card>
<div class="row">
  <form class="col s12" id='resetForm'>
    <div class="row">
      <div class="input-field col s3">
        <input id="name" type="text" class="validate">
        <label for="name">name</label>
      </div>
      <div class="input-field col s3">
        <input type="date" class="datepicker" name='date' onchange={setResetDate}>
      </div>
      <div class="input-field col s3">
        <a class="waves-effect waves-light btn" onclick={resetEvent} href>Reset</a>
      </div>
    </div>
  </form>
</div>
<script>
    var tag = this;
    tag.mixin('store');

    tag.setResetDate = function(e) {
      tag.resetDate = new Date(tag.resetForm.date.value);
      tag.resetDate.setDate(tag.resetDate.getDate() + 1);
      tag.resetDate.setHours(0,0,0,0);
    };

    tag.resetEvent = function(e) {
      e.preventDefault();
      tag.store.trigger('resetEvent', tag.resetForm.name.value, tag.resetDate);
    };
</script>
</add-event-card>
