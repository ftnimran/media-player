/*
  @license
	Rollup.js v4.59.1
	Sat, 21 Mar 2026 06:45:31 GMT - commit 0cba9e079e1d6e56882558827b37557f36c52966

	https://github.com/rollup/rollup

	Released under the MIT License.
*/
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

require('node:fs/promises');
require('node:path');
require('node:process');
require('node:url');
require('./shared/rollup.js');
require('./shared/parseAst.js');
const loadConfigFile_js = require('./shared/loadConfigFile.js');
require('path');
require('./native.js');
require('node:perf_hooks');
require('./getLogFilter.js');



exports.loadConfigFile = loadConfigFile_js.loadConfigFile;
//# sourceMappingURL=loadConfigFile.js.map
