import React from 'react'
import { Router, Route, IndexRedirect, IndexRoute } from 'react-router';
import Dashboard from 'containers/Dashboard'
import App from 'containers/App'
import Page from 'containers/Page'
import About from 'containers/About'

export default (<Route path='/' component={App}>
                {/*<IndexRedirect to='page/1' />*/}
                <IndexRoute component={Dashboard} />
                <Route path='page/:id' component={Page} />
                <Route path='about' component={About} />
            </Route>)

/*
let routes =  {
    component: App,
    childRoutes: [  // getChildRoutes
        {
            path: '/',
            getComponent(nextState, cb) {
             
            },

        }
        
    ]
}
export default routes
*/
