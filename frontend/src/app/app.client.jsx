import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import Store from 'Controllers/store';
import Main from 'Commons/client/Main.jsx';
import HomePage from 'Partials/client/HomePage/HomePage.jsx';
import DetailPage from 'Partials/client/DetailPage/DetailPage.jsx';

import MainCSS from 'style-loader!css-loader!../assets/css/client/main.css';
import StyleCSS from 'style-loader!css-loader!../assets/css/client/style.css';
import CustomStyleSCSS from 'style-loader!css-loader!sass-loader!../assets/scss/client/custom-style.scss' 
import imagesLoaded from 'imagesloaded';

const history = syncHistoryWithStore(hashHistory, Store);

const $ = jQuery.noConflict();
imagesLoaded.makeJQueryPlugin($);

ReactDOM.render(
    <Provider store={Store}>
        <Router history={history}>
            <Router path="/" component={Main}>
                <IndexRoute component={HomePage} />
                <Route path="detail" component={DetailPage}/>
            </Router>
        </Router>
    </Provider>,
    document.getElementById('root')
);

