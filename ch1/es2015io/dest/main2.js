'use strict';

var _calctest = require('./calctest.js');

var ct = _interopRequireWildcard(_calctest);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// 읽어들인 함수 사용
console.log(ct.add(2, 3)); // calctest.js 모듈 읽기

console.log(ct.mul(2, 3));