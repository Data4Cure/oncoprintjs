const path = require('path');
const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = env => {
    let minimize, externals, entryFile;
    if (env && env.DEV) {
        minimize = false;
        entryFile = 'src/js/main.dev.js';
    } else {
        minimize = true;
        externals = {
            "jquery": "jQuery"
        };
        entryFile = 'src/js/main.js';
    }

    return {
        entry: path.resolve(__dirname, entryFile),
        module: {
            rules: [
                {
                    test: /\.(png|jp(e*)g|svg)$/,
                    use: [{
                        loader: 'url-loader',
                    }]
                },
                {
                    test: /src\/js\/workers\/*/,
                    use:[{
                        loader: 'worker-loader',
                        options: { inline:true, fallback: false }
                    }]
                },
                {
                    test: /src\/js\/.+\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        },
        externals: externals,
        plugins: [
            new WebpackShellPlugin({onBuildStart:['mkdir -p '+path.resolve(__dirname, 'dist')]})
        ],
        resolve: {
            extensions: [ '.tsx', '.ts', '.js' ]
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'oncoprint-bundle.js',
        },
        optimization: {
            minimize: minimize
        }
    }
};
