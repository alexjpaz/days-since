require('file?name=[name].[ext]!./manifest.json')

var Store = require('./store');

require('./tags/main.tag');
require('./tags/event-list.tag');
require('./tags/event-card.tag');

riot.mixin('store', {
  store: new Store()
});

riot.mount('*');
