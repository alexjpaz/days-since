require('file?name=[name].[ext]!./manifest.json')

require('./tags/main.tag');
require('./tags/event-list.tag');
require('./tags/event-card.tag');

riot.mount('*');
