"use strict";
var Multimap = require('multimap');

var EDGE_KEYS = ['dependencies', 'asyncDependencies'];



module.exports = function(trees, options) {
  var map = new Multimap();

}



function isIsomorphism(a, b, path) {
  path = path || [];
  var aid = a.name + '@' + a.version;
  var bid = b.name + '@' + b.version;
  if (aid == bid) {

    if (~path.indexOf(aid)) {
      return true;
    }

    path.push(aid);
    var compare = true;
    EDGE_KEYS.forEach(function(depName) {
      var da = a[depName],
        db = b[depName];
      if (!compare)
        return;

      if (da && db) {

      } else {
        compare = false;
      }
    });

    path.pop();

    return compare;
  }

  return false;
}

isIsomorphism.cache = new Multimap();

function travel(root, keys, path) {
  var id = root.name + '@' + root.version;

  if (~path.indexOf(id)) {
    // cycle
  }

}





function gid(object) {
  if (object.__id) {
    return object.__id;
  }

  id.__id__++;
  return object.__id = id.__id__;
}

id.__id__ = 0;