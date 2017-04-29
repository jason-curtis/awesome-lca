require('core-js/es5');

// require all test modules
const testsContext = require.context('.', true, /.+\.test\.js$/);
testsContext.keys().forEach(testsContext);
