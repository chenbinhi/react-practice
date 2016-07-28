import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { Link, IndexLink } from 'react-router'
import fetch from 'isomorphic-fetch'
import 'react-datetime/css/react-datetime.css'
import Datetime from 'react-datetime'

//import 'normalize.css'
//import 'sanitize.css/sanitize.css'

import styles from './styles.css'

import { createFetchAction } from 'actions'
import { selectSum } from 'selectors'

import { LogA } from 'components/A'
import Input from 'components/Input'
import UnctrlInput from 'components/UnctrlInput'
import About from 'containers/About'
import EventForm from 'containers/EventForm'
import Board from 'containers/Board'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            s: props.p || 0,
            data: props.data || "",
            //ctrlInput: 'defaultInput'
        }
        this.click = this.click.bind(this);
        this.ctrlInput = this.ctrlInput.bind(this);
        this.unctrlInput = this.unctrlInput.bind(this);
        this.fetchData = this.fetchData.bind(this);
        this.error = this.error.bind(this);
    }

    getChildContext() {
        return {
            theme: 'blue',
        }
    }
    
    error(m) {
        console.log("App Error:", m)
        setTimeout(() => {
            this.fetching = false
        }, 5000);
    }

    fetchData(d) {
        this.setState( { data: d } );
        setTimeout(() => {
            this.fetching = false
        }, 5000);
    }

    ctrlInput(e) {
        this.setState({ ctrlInput: e.target.value })
    }

    unctrlInput(e) {
        this.setState({ unctrlInput: e.target.value })
    }

    click() {
        let { s } = this.state
        this.setState( { s: s-1 } );
        if (!this.fetching) {
            this.fetching = true
            fetch('/api?testarg=1').then(
                (r) =>
                    r.json().then(this.fetchData, this.error),
                this.error)
            this.props.fetch("/fetchAPI")
        } else {
            console.log('fetching....')
        }
    }
    
    componentWillMount() {
        
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {
        //return nextProps !== this.props
        return true
    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className={styles.app}>
                <div className={styles.nav}>
                <div className='empty'>
                <IndexLink to='/' activeClassName={styles.active}>Home</IndexLink>
                </div>
                <div className='empty'>
                <Link to='/page/1' activeClassName={styles.active} >Page1</Link>
                </div>
                <div className='empty'>
                <Link to='/page/2' activeClassName={styles.active}  >Page2</Link>
                </div>
                <div className='empty'>
                <Link to='/about' activeClassName='active' >Aboutttttttttttttttttttttttttttttttttttttttttt</Link>
                </div>
                </div>
                <div className={styles.debug}>
                <ul>
                <li>context: { JSON.stringify(this.context) }</li>
                <li>location: {JSON.stringify(this.props.location)}</li>
                <li>params: {JSON.stringify(this.props.params)}</li>
                <li>route: {JSON.stringify(this.props.route)}</li>
                <li>router: {JSON.stringify(this.context.router)}</li>
                </ul>
                </div>
                <div className={styles.header} ref={ ref => this.appRef = ref } onClick={this.click}>
                <a href="#">This is an App</a>
                <div>state: {JSON.stringify(this.state)}</div>
                </div>
                {this.props.children}
                <Input value={ this.state.input || 'Controlled Input' } onInput={ this.ctrlInput } />
                <UnctrlInput defaultValue='Uncontrolled Input' onInput={ this.unctrlInput } />
                <LogA s='LogA' onClick={ () => alert('LogA clicked!') } />
                <EventForm onSubmit={(e) => console.log('form submited', e)}/>
                <Board />
                <Datetime />
            </div>
        );
    }
}

App.propTypes = {
    p: PropTypes.number,
};

App.childContextTypes = {
    theme: PropTypes.string,
}

export default connect(
    () => ({}),
    {
        fetch: createFetchAction,
        // fetch(url) {
        //     //return { type: "FETCH", url}
        //     return (dispatch) => {
        //         console.log('FETCH action')
        //         dispatch(createFetchAction(url))
        //     }
        // }
    }
)(App);