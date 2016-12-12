import React from 'react'
import { Router, Route, IndexRedirect, IndexRoute } from 'react-router';
import Dashboard from 'containers/Dashboard'
import App from 'containers/App'
import Page from 'containers/Page'
import About from 'containers/About'

//import EventForm from 'containers/EventForm'
//                 <Route path='form' component={EventForm} />
import Board from 'containers/Board'
import Layout from 'containers/Layout'
import Virtual from 'containers/Virtual'
import ScrollList from 'containers/ScrollList'
import EventPage from 'containers/Event'
import CreateEventPage from 'containers/Event/createEvent'
import SettingEventPage from 'containers/Event/settings'
import ScheduleEventPage from 'containers/Event/schedule'
import ControlEventPage from 'containers/Event/control'
import ResultPage from 'containers/Event/result'


export default (<Route path='/' component={App}>
                {/*<IndexRedirect to='page/1' />*/}
                <IndexRoute component={Dashboard} />
                <Route path='page/:id' component={Page} />
                 <Route path='event' component={EventPage} >
                    <IndexRoute component={CreateEventPage} />
                    <Route path='create' component={CreateEventPage} />
                    <Route path='settings' component={SettingEventPage} />
                    <Route path='schedule' component={ScheduleEventPage} />
                    <Route path='control' component={ControlEventPage} />
                    <Route path='result' component={ResultPage} />
                 </Route>
                <Route path='board' component={Board} />
                <Route path='layout' component={Layout} />
                <Route path='virtual' component={Virtual} />
                <Route path='scrolllist' component={ScrollList} />
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
