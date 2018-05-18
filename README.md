# Deprecation Warning: `materialize-css 1.0.0-alpha.x` have natively AMD compatible

# materialize-css AMD-module

- Builds AMD module for [materialize-css](https://github.com/Dogfalo/materialize)
- Fully compatible with RequireJs
- `jquery` dependency is _optional_
- Creates both uglified and non-uglified modules

## Usage
In project directory:
```
npm install
npm start
```

This will download the `materialize-css` npm package of version `1.0.0-alpha.4`. From it the amd modules are generated and put in the `./dist` directory.

## Note on jquery dependency

With the alpha versions of `1.0.0` materialze-css dropped `jquery` as a dependency. Nevertheless various jquery plugins for initializing some components are still present. If you plan to use the jquery extensions in you project, make sure the jquery module is loaded before the meterialize-css module is.

When using RequireJs this can be ensured with the following configuration:

```javascript
require.config({
    baseUrl: "../wwwroot/",
    paths: {
        "jquery": "/js/jquery.min",
        "materialize-css": "/js/materialize.amd.min"
    },
    shim: {
        "materialize-css":  ["jquery"]
    }
});

```

## Credits
Originally based on [this comment](https://github.com/Dogfalo/materialize/issues/634#issuecomment-113213629) and
[this repository](https://github.com/noodny/materializecss-amd) from [noodny](https://github.com/noodny)
