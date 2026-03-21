/*
  @license
	Rollup.js v4.59.1
	Sat, 21 Mar 2026 06:45:31 GMT - commit 0cba9e079e1d6e56882558827b37557f36c52966

	https://github.com/rollup/rollup

	Released under the MIT License.
*/
export { version as VERSION, defineConfig, rollup, watch } from './shared/node-entry.js';
import './shared/parseAst.js';
import '../native.js';
import 'node:path';
import 'path';
import 'node:process';
import 'node:perf_hooks';
import 'node:fs/promises';
