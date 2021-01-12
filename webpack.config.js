module.exports = {
    entry: './app/index.js',
    module: {
        rules: [
            {
                test: /\.scss/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                            importLoaders: 2
                        }
                    },
                    {
                        loader: "sass-loader",
                    },
                ],
            },
        ],
    },
    target: ["web", "es5"],
};
