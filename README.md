# react-ts

React con Typescript
```
> npm init --yes
> npm i react react-dom
> npm i -D typescript webpack webpack-dev-server webpack-cli awesome-typescript-loader html-webpack-plugin css-loader mini-css-extract-plugin node-sass sass-loader @types/react @types/react-dom source-map-loader
```
Crear Carpetas
```
src -> components -> styles
```
```
tsc --init
"jsx": "react"
"sourceMap": true
"outDir": "./build/"
"removeComments": true
"noImplicitAny": true
```
```
//*********
// Cofiguracion de Webpack
//*********

const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename:  'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: 'src/index.html'
        }),
        new MiniCssExtractPlugin('style.css')
    ],
    devtool: 'source-map'
}
```
```
//===========
// Hola mundo con React
// index.tsx
//===========
import * as React from 'react'
import * as ReactDOM from 'react-dom'

const app = document.getElementById('app');

ReactDOM.render(<h1>Hola Mundo!</h1>, app)
```
