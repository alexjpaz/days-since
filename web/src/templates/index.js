var partials = {};

function registerTemplate(name) {
  partials[name] = require('./'+name+'.html');
};

registerTemplate('main');
registerTemplate('test');
registerTemplate('test2');


function Templates() {
  this.render = function(name, model) {
    return partials[name].r(model, partials);
  };
}

module.exports = new Templates();
