module.exports = {
    "parser": "@babel/eslint-parser",
    "parserOptions": {
        "requireConfigFile": false,
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "env": {
        "es6": true,
        "browser": true,
        "node": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"]
}