'use strict'

let test = require('tape')
let myModule = require('../src/myModule')

test('myModule', function (t) {
	
	// Example of test pass
	t.ok(myModule.success(), 'success returns true')
	
	// Example of test failure
	t.ok(myModule.fail(), 'fail returns true')
	
	t.end()
})