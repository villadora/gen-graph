"use strict";
var Multimap = require('multimap');

var EDGE_KEYS = ['dependencies', 'asyncDependencies'];



module.exports = function(trees, options) {
  var map = new Multimap();

}



function isIsomorphism(a, b) {
  if (a.name == b.name && a.version == b.version) {
    EDGE_KEYS.forEach(function(depName) {
      var da = a[depName],
        db = b[depName];

      if (da && db && da.length == db.length) {

      }

    });
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