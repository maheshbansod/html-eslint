# html-eslint

## Table of Contents

- [Installation](#Installation)
- [Configuration](#Configuration)
- [Rules](#Rules)
  - [SEO](#SEO)
  - [Accessibility](#Accessibility)

## Installation

```
$ npm install --save-dev eslint @html-eslint/parser @html-eslint/eslint-plugin
```

## Configuration

```js
module.exports = {
  //...
  plugins: ["@html-eslint"],
  overrides: [
    {
      files: ["*.html"],
      parser: "@html-eslint/parser",
      extends: ["@html-eslint/recommended"],
    },
  ],
};
```

## Rules

- 🔧 - Meaning the rule can fix problems aotomatically
- ⭐ - Meaning the rule is recommended.

| rule                                                                     | description                        |       |
| :----------------------------------------------------------------------- | :--------------------------------- | :---- |
| [require-doctype](/packages/eslint-plugin/docs/rules/require-doctype.md) | Enforce to use `<!DOCTYPE HTML>`.  | ⭐ 🔧 |
| [require-lang](/packages/eslint-plugin/docs/rules/require-lang.md)       | Enforce to use `lang` in `<html>`. | ⭐    |
| [require-img-alt](/packages/eslint-plugin/docs/rules/require-img-alt.md) | Enforce to use `alt` in `<img>`.   | ⭐    |
