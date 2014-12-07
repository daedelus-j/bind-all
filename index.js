

module.exports = function bindAll(obj) {
  var funcs = [].slice.call(arguments, 1);

  if (funcs.length === 0) {
      throw new Error('bindAll must be passed function names');
    }

  [].forEach.call(funcs, function(f) {
      obj[f] = Function.prototype.bind.call(obj[f], obj);
    });

  return obj;
};

