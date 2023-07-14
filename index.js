'use strict';

module.exports = {
	meta: {
		name: 'eslint-plugin-transloadit',
		// x-release-please-start-version
		version: '0.1.2',
		// x-release-please-end
	},
	rules: {
		'no-useless-iife': require('./rules/no-useless-iife'),
	},
};
