'use strict'

module.exports = (function () {
	
	let _foo = function () {
		return true
	}

	let _bar = function () {
		return false
	}

	return {
		success: _foo,
		fail: _bar
	}

})()