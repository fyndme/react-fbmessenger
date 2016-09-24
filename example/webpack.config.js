module.exports = {
    entry: "./app.js",
    output: {
        filename: "bundle.js"
    },
    externals: {
      react: "React",
      "react-dom": "ReactDOM"
    }
};