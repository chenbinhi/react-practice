import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { Link, IndexLink } from 'react-router'
import fetch from 'isomorphic-fetch'
import Media from 'react-media'

import Cleave from 'cleave.js/dist/cleave-react'

//import 'react-datetime/css/react-datetime.css'  // FIXME: 引起sourceMap错乱
//import Datetime from 'react-datetime'

//import 'normalize.css'
//import 'sanitize.css/sanitize.css'

import styles from './styles.css'

import { createFetchAction } from './actions'
import { selectSum } from './selectors'

import { LogA } from 'components/A'
import Input from 'components/Input'
import UnctrlInput from 'components/UnctrlInput'
import LazyImg from 'components/LazyImg'


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
                        <Link to={ { pathname: '/page/2', state: 'urlstate'} } activeClassName={styles.active}  >Page2</Link>
                    </div>
                    <div className='empty'>
                        <Link to='/board' activeClassName='active' >Board</Link>
                    </div>
                    <div className='empty'>
                        <Link to='/form' activeClassName='active' >Form</Link>
                    </div>
                    <div className='empty'>
                        <Link to='/layout' activeClassName='active' >Layout</Link>
                    </div>
                    <div className='empty'>
                        <Link to='/virtual' activeClassName='active' >Virtual</Link>
                    </div>
                    <div className='empty'>
                        <Link to='/scrolllist' activeClassName='active' >ScrollList</Link>
                    </div>
                     <div className='empty'>
                        <Link to='/about' activeClassName='active' >About</Link>
                    </div>
                </div>
            {/*
                <div className={styles.debug}>
                    <ul>
                        <li>context: { JSON.stringify(this.context) }</li>
                        <li>location: {JSON.stringify(this.props.location)}</li>
                        <li>params: {JSON.stringify(this.props.params)}</li>
                        <li>route: {JSON.stringify(this.props.route)}</li>
                        <li>Media Query: <Media query="(max-width: 599px)"><p>The document is less than 600px wide.</p></Media></li>
                    </ul>
                </div>
                <div className={styles.header} ref={ ref => this.appRef = ref } onClick={this.click}>
                    <a href="#" >This is an App</a>
                    <div>app state: {JSON.stringify(this.state)}</div>
                </div>
            */}
                {this.props.children}
            {/*
                <Cleave placeholder='Cleave: YYYY/MM/DD' options={{date: true, datePattern: ['Y', 'm', 'd']}} />
                <Input value={ this.state.input || 'Controlled Input' } onInput={ this.ctrlInput } />
                <UnctrlInput defaultValue='Uncontrolled Input' onInput={ this.unctrlInput } />
                <LogA s='LogA' onClick={ () => alert('LogA clicked!') } />
                <Datetime />
                <LazyImg src='https://weflow.io/img/logo-icon.png' />
            */}
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
    null,
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