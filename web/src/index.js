require('file?name=[name].[ext]!./manifest.json')

var Store = require('./store');

require('./tags/main.tag');
require('./tags/event-list.tag');
require('./tags/event-card.tag');
require('./tags/add-event-card.tag');
require('./tags/route.tag');

riot.mixin('store', {
  store: new Store()
});

riot.route.start(true);
riot.mount('*');
riot.route.exec();

