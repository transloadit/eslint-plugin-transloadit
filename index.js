'use strict';

const config = require('eslint-config-transloadit');

module.exports = {
	meta: {
		name: 'eslint-plugin-transloadit',
		// x-release-please-start-version
		version: '0.1.2',
		// x-release-please-end
	},
	configs: {
		config: {
			...config,
			rules: {
				...config.rules,
				'transloadit/no-useless-iife': 'error',
			},
		},
	},
	rules: {
		'no-useless-iife': require('./rules/no-useless-iife'),
	},
};
