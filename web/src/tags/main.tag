<app>
<header class='deep-orange white-text z-depth-1'>
  <form class="col s12">
    <div class="row">
      <div class='col s6'>
        <strong>Days Since</strong>
      </div>
      <div class='col s6'>
      </div>
    </div>
  </form>
</header>
<main>
  <div class='container'>
    <event-list></event-list>
  </div>
</main>
<style>
    body {
      width: 100%;
      margin: 0 auto;
    }
    main {
      padding-top: 49px;
      padding-bottom: 36px;
    }
    main > .collection {
      margin-top: 0;
    }

    header {
      z-index: 100;
      width: 100%;
      position: fixed;
      top: 0;
      padding: 14px 14px;
    }
    header .row {
      margin-bottom: 0;
    }
    footer .row {
      margin: 0;
    }
</style>
<script>
  var tag = this;
  tag.mixin('store');
  tag.store.on('foo', function() {
    console.log('o')
  });



</script>
</app>
