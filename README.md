# TAP, Tape, Faucet & Testling

__Playing around with testing tool chain__

- @see http://substack.net/how_I_write_tests_for_node_and_the_browser
- @see http://www.macwright.org/2014/03/11/tape-is-cool.html
- @see https://ci.testling.com/guide/tape

## Building Dist

`$ mkdir dist`
`$ node_modules/.bin/browserify -t babelify tests/*.js > dist/bundle.js`

## Running Tests

You can run these tests with out globally installed packages by referencing the CLI tools in `node_modules/.bin/`

- TAP: `node_modules/.bin/tap tests/*.js`
- Tape: `node_modules/.bin/tape tests/*.js`
- Faucet: `node_modules/.bin/tape tests/*.js | node_modules/.bin/faucet`

// @TODO I'm writing ES6 syntax, need to transpile to test in browser with testling

Testling: ``


## Code Coverage

Using `coverify` we can check for code coverage.

`$npm run coverage`