module.exports = {
  //  presets: ["@babel/preset-env"],
  plugins: [
    "@babel/plugin-transform-arrow-functions",
    "@babel/plugin-transform-object-assign",
    "@babel/plugin-transform-block-scoping",
    "@babel/plugin-transform-parameters",
    "@babel/plugin-transform-shorthand-properties",
    "@babel/plugin-transform-spread",
    "@babel/plugin-transform-destructuring",
    [
      "module-resolver",
      {
        root: ["./src"],
      },
    ],
  ],
  env: {
    test: {
      presets: ["@babel/preset-env"],
      plugins: [
        "@babel/plugin-transform-modules-commonjs",
        // "@babel/plugin-proposal-class-properties",
        // "transform-es2015-modules-commonjs",
        // "babel-plugin-dynamic-import-node"
      ],
    },
  },
}
