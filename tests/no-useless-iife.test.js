const { RuleTester } = require('eslint');
const rule = require('../rules/no-useless-iife');

new RuleTester({
	parserOptions: { ecmaVersion: 2021 },
	rules: {
		'no-restricted-syntax': [
			'error',
			{
				selector:
					'ExpressionStatement CallExpression>ArrowFunctionExpression[body.body.length=0]',
				message: 'Remove the empty IIFE',
			},
			{
				selector:
					'ExpressionStatement CallExpression>ArrowFunctionExpression[body.body.length=1]',
				message:
					'Do not use IIFE for just one instruction, call the instruction directly',
			},
		],
	},
}).run('no-restricted-syntax', rule, {
	valid: [
		'const noop = () => {}',
		'const noop = (() => {})',
		'new Promise(() => {})',
		'someFunction(() => {})',
		`(() => {
        oneInstruction
        anotherInstruction
      })()`,
		`(() => {
      if (condition)
          someInstruction
      })()`,
		`(() => {
        try {
          someInstruction
        } catch {}
      })()`,
		`(() => {
        while(true);
      })()`,
		`(() => {
        for(;;) { someInstruction }
      })()`,
	],
	invalid: [
		{
			code: '(async () => { await promise })()',
			errors: [{ message: /IIFE/ }],
		},
		{
			code: `(() => {
        oneInstruction
        // a comment
      })()`,
			errors: [{ message: /IIFE/ }],
		},
		{
			code: '(async () => { await promise })().catch(console.error)',
			errors: [{ message: /IIFE/ }],
		},
		{
			code: '(async () => {})().catch(console.error)',
			errors: [{ message: /IIFE/ }],
		},
		{
			code: '(() => {})()',
			errors: [{ message: /IIFE/ }],
		},
	],
});
