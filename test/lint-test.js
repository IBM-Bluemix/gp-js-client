/*
 * Copyright IBM Corp. 2015-2017
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const mochaEslint = require('mocha-eslint');
// run lint as part of tests

const paths = [
  'lib',
  'test',
  'util',
  'bin'
];

const options = {
  formatter: 'compact',
  alwaysWarn: true,
  // timeout: 5000,
  strict: false
};

// run the linter
mochaEslint(paths, options);
