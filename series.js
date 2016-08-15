function _series(tasks, callback, err, result) {
  if (err) {
    return callback(err, result);
  }
  if (tasks.length === 0) {
    return callback(null, result);
  }
  const firstTask = tasks.shift()
  firstTask(function(err, data) {
    if (err) return _series([], callback, err, result);
    result.push(data);
    _series(tasks, callback, null, result);
  })
}

module.exports = function series(tasks, callback) {
  _series(tasks, callback, null, []);
}