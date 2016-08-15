const series = require('./series');

function inc(n, callback) {
  setTimeout(function() {
    callback(null, n + 1);
  }, 100);
}

function err(n, callback) {
  setTimeout(function() {
    callback('my-err', null);
  }, 100);
}

series([
  function(cb) {inc(3, cb); },
  function(cb) {inc(8, cb); },
  function(cb) {inc(2, cb); }
], function(err, results) {
  console.log('err: ', err);
  console.log('results: ', results);
});

series([
  function(cb) {inc(3, cb); },
  function(cb) {err(8, cb); },
  function(cb) {inc(2, cb); }
], function(err, results) {
  console.log('err: ', err);
  console.log('results: ', results);
});