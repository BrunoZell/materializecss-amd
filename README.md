# materializecss-amd
This gulp-task builds [materialize-css](https://github.com/Dogfalo/materialize) for requirejs.

## Usage
```
npm install
npm start
```

Will download `materialize-css` version `0.100.1` and generate both uglified and non-uglified amd versions in the `./dist` directory.

This will not work with version `0.100.2` or above since there was a breaking change regarding the import of velocity. **Pull request welcome!**

## Credits
Based on [this comment](https://github.com/Dogfalo/materialize/issues/634#issuecomment-113213629) and
[this repository](https://github.com/noodny/materializecss-amd) from [noodny](https://github.com/noodny)
