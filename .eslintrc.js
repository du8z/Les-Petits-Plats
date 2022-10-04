module.exports = {
	'env': {
		'browser': true,
		'commonjs': true,
		'es2021': true
	},
	'extends': 'eslint:recommended',
	'overrides': [
	],
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module',
		'allowImportExportEverywhere': true
	},
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': 0 

		,
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		]
		
  
	}
}
