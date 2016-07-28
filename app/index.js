import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, useRouterHistory, IndexRedirect, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import createBrowserHistory from 'history/lib/createBrowserHistory'

import reducers from './reducers'
import createStore from './store'
import routes from './routes'

//import DevTools from './DevTools'


const browserHistory = useRouterHistory(createBrowserHistory)({
  basename: '/dist/'
})
let store = createStore(browserHistory, reducers)
const history = syncHistoryWithStore(browserHistory, store)

ReactDom.render(
    <Provider store={store}>
    <div>
        <Router history={history} routes={routes} />
        { /*<DevTools />*/ }
    </div>
    </Provider>
    , document.getElementById('App'))



