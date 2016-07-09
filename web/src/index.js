require('file?name=[name].[ext]!./manifest.json')

var tick = require('./tick');

var Templates = require('./templates/index');

document.addEventListener('DOMContentLoaded', function() {
  var node = document.createElement('div');
  node.innerHTML = Templates.render('main');
  document.body.appendChild(node);

  //tick.init();

});
