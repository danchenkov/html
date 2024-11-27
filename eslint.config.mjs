import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
})

export default [...compat.extends('standard'), {
    languageOptions: {
        globals: {
            ...globals.browser
        },

        ecmaVersion: 2022,
        sourceType: 'module',

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
                modules: true,
                experimentalObjectRestSpread: true
            }
        }
    },

    rules: {
        'array-element-newline': ['error', 'never'],

        'space-before-function-paren': [
            'error', {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always'
            }
        ],
        indent: ['error', 4, {
            SwitchCase: 1
        }],

        semi: ['error', 'never']
    }
}]
