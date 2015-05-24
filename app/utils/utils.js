var _util = {};

_util.pad = function (n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
};

_util.toDateString = function (date) {
  var y = date.getFullYear();
  var d = _util.pad(date.getDate(), 2);
  var m = _util.pad(date.getMonth() + 1, 2);
  return y + '-' + m + '-' + d;
};

export default _util;