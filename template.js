import React from 'react';
import { renderToString } from 'react-dom/server';
import './src/styles/index.scss';
import App from './src/components/App';

const content = renderToString(<App />);

const jsPath = 'bundle.js';

const template = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="/styles/index.css">
            <title>My Universal React App</title>
    </head>
    <body>
        <div id="app">${content}</div>
        <script type="text/javascript" src="${jsPath}"></script>
    </body>
</html>
`;

module.exports = template;
