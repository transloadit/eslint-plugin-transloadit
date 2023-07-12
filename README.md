# eslint-plugin-transloadit

Transloadit ESLint custom rules.

## Installing

```sh
yarn add --dev eslint-plugin-transloadit
```

Then in your `.eslintrc`, you can have:

```json
{
  "extends": ["plugin:transloadit/config"],
  "plugin": {
    "transloadit"
  },
  "rules": {
    "transloadit/no-useless-iife": "error"
  }
}
```
