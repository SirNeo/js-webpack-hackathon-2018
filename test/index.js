// require all modules ending in ".spec" from the
// current directory and all subdirectories
const testsContext = require.context(".", true, /.spec.js$/);
testsContext.keys().forEach(testsContext);

/*const components = require.context('../src', true, /.js$/);
components.keys().forEach(components);*/