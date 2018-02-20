import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import Store from 'Controllers/store';
import Main from 'Commons/dashboard/Main.jsx';
import HomePage from 'Partials/dashboard/HomePage/HomePage.jsx';
import ContentModeratorPage from 'Partials/dashboard/ContentModeratorPage/ContentModeratorPage.jsx';

import BootstrapCSS from 'style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css';
import FontAwesomeCSS from 'style-loader!css-loader!font-awesome/css/font-awesome.min.css';
import JQueryUICSS from 'style-loader!css-loader!../assets/css/dashboard/jquery-ui.custom.min.css';
import FontsGoogleCSS from 'style-loader!css-loader!../assets/css/dashboard/fonts.googleapis.com.css';
import AceCSS from 'style-loader!css-loader!../assets/css/dashboard/ace.min.css';
import AceSkinsCSS from 'style-loader!css-loader!../assets/css/dashboard/ace-skins.min.css';
import AceRTLCSS from 'style-loader!css-loader!../assets/css/dashboard/ace-rtl.min.css';

const history = syncHistoryWithStore(browserHistory, Store);

ReactDOM.render(
    <Provider store={Store}>
        <Router history={history}>
            <Router path="admin" component={Main}>
                <IndexRoute component={HomePage} />
                <Route path="content-moderator" component={ContentModeratorPage} />
            </Router>
        </Router>
    </Provider>,
    document.getElementById('root')
);

