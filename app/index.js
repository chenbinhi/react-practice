import "babel-polyfill"
import 'vconsole'

import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, useRouterHistory, IndexRedirect, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import createBrowserHistory from 'history/lib/createBrowserHistory'

import reducers from './reducers'
import createStore from './store'
import routes from './routes'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()


//import DevTools from './DevTools'


const browserHistory = useRouterHistory(createBrowserHistory)({
  basename: PUBLICPATH,
})
let store = createStore(browserHistory, reducers)
const history = syncHistoryWithStore(browserHistory, store)

ReactDom.render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme()} >
            <div>
                <Router history={history} routes={routes} />
                { /*<DevTools />*/ }
            </div>
        </MuiThemeProvider>
    </Provider>
    , document.getElementById('App'))



