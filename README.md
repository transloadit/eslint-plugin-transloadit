# eslint-plugin-transloadit

> Warning. This repo is deprecated as Transloadit has switched to using Biome

Transloadit ESLint custom rules.

## Installing

```sh
yarn add --dev eslint-plugin-transloadit
```

Then in your `.eslintrc`, you can have:

```json
{
  "plugin": {
    "transloadit"
  },
  "rules": {
    "transloadit/no-useless-iife": "error"
  }
}
```
