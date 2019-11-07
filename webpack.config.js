var path = require('path');

module.exports = [
	{
		mode: 'production',
		entry: './src/uiComp/basicInput/buttons/Button.js',
		output: {
			path: path.resolve('uiComp/basicInput/buttons'),
			filename: 'Button.js',
			libraryTarget: 'commonjs2'
		},
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /(node_modules)/,
					use: 'babel-loader'
				},
				{
					test: /\.(s*)css$/,
                    use: [ 
                        'style-loader',
                        'css-loader',
                    ]
				}
			]
		}
	},
	{
		mode: 'production',
		entry: './src/uiComp/basicInput/buttons/DropDown.js',
		output: {
			path: path.resolve('uiComp/basicInput/buttons'),
			filename: 'DropDown.js',
			libraryTarget: 'commonjs2'
		},
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /(node_modules)/,
					use: 'babel-loader'
				},
				{
					test: /\.(s*)css$/,
                    use: [ 
                        'style-loader',
                        'css-loader',
                    ]
				}
			]
		}
	},
	{
		mode: 'production',
		entry: './src/uiComp/basicInput/buttons/Split.js',
		output: {
			path: path.resolve('uiComp/basicInput/buttons'),
			filename: 'Split.js',
			libraryTarget: 'commonjs2'
		},
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /(node_modules)/,
					use: 'babel-loader'
				},
				{
					test: /\.(s*)css$/,
                    use: [ 
                        'style-loader',
                        'css-loader',
                    ]
				}
			]
		}
	},
	{
		mode: 'production',
		entry: './src/uiComp/basicInput/buttons/Flip.js',
		output: {
			path: path.resolve('uiComp/basicInput/buttons'),
			filename: 'Flip.js',
			libraryTarget: 'commonjs2'
		},
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /(node_modules)/,
					use: 'babel-loader'
				},
				{
					test: /\.(s*)css$/,
                    use: [ 
                        'style-loader',
                        'css-loader',
                    ]
				}
			]
		}
	},
	{
		mode: 'production',
		entry: './src/uiComp/basicInput/hyperLink/HyperLink.js',
		output: {
			path: path.resolve('uiComp/basicInput/hyperLink/HyperLink.js'),
			filename: 'HyperLink.js',
			libraryTarget: 'commonjs2'
		},
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /(node_modules)/,
					use: 'babel-loader'
				},
				{
					test: /\.(s*)css$/,
                    use: [ 
                        'style-loader',
                        'css-loader',
                    ]
				}
			]
		}
	},
	{
		mode: 'production',
		entry: './src/uiComp/basicInput/text/Text.js',
		output: {
			path: path.resolve('uiComp/basicInput/text/Text.js'),
			filename: 'Text.js',
			libraryTarget: 'commonjs2'
		},
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /(node_modules)/,
					use: 'babel-loader'
				},
				{
					test: /\.(s*)css$/,
                    use: [ 
                        'style-loader',
                        'css-loader',
                    ]
				}
			]
		}
	},
	{
		mode: 'production',
		entry: './src/uiComp/basicInput/selectors/CheckBox.js',
		output: {
			path: path.resolve('uiComp/basicInput/selectors/CheckBox.js'),
			filename: 'CheckBox.js',
			libraryTarget: 'commonjs2'
		},
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /(node_modules)/,
					use: 'babel-loader'
				},
				{
					test: /\.(s*)css$/,
                    use: [ 
                        'style-loader',
                        'css-loader',
                    ]
				}
			]
		}
	},
	{
		mode: 'production',
		entry: './src/uiComp/basicInput/selectors/RadioButton.js',
		output: {
			path: path.resolve('uiComp/basicInput/selectors/RadioButton.js'),
			filename: 'RadioButton.js',
			libraryTarget: 'commonjs2'
		},
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /(node_modules)/,
					use: 'babel-loader'
				},
				{
					test: /\.(s*)css$/,
                    use: [ 
                        'style-loader',
                        'css-loader',
                    ]
				}
			]
		}
	}

];
