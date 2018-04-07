# browserify-babel-async-await-example 

A minimal demo of async/await working in a browser in April 2018.

## Usage

Run the browserify build and start a simple file server:

```sh
npm i
npm start
```

Then open your browser:

```
open "http://localhost:8080"
```

See `package.json` and `.babelrc` for configuration details.

## Dev Dependencies

- [babel-core](https://github.com/babel/babel/tree/master/packages): Babel compiler core.
- [babel-plugin-transform-async-to-generator](https://github.com/babel/babel/tree/master/packages): Turn async functions into ES2015 generators
- [babel-plugin-transform-runtime](https://github.com/babel/babel/tree/master/packages): Externalise references to helpers and builtins, automatically polyfilling your code without polluting globals
- [babel-preset-env](https://github.com/babel/babel-preset-env): A Babel preset for each environment.
- [babelify](https://github.com/babel/babelify): Babel browserify transform
- [browserify](https://github.com/browserify/browserify): browser-side require() the node way
- [http-server](https://github.com/indexzero/http-server): A simple zero-configuration command-line http server


## License

MIT
