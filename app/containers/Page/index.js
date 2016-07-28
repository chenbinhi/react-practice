import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'
import { createSelector } from 'reselect'

//import { browserHistory as history } from 'react-router' 
//import history from './history'

import styles from './styles.css'

import { CLICK } from 'containers/App/constants'
import { selectGlobal, selectSum } from 'containers/App/selectors'

import A from 'components/A'

const Page = (props, context) => {
    return (
        <div className={styles.container}>
            <div className={styles.test16} >test</div>
            <div className={styles.test15} ><img src='https://weflow.io/img/logo-icon.png'/></div>
            <div className={styles.content}>
            {/*
            <div className={styles.test}> <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=50&h=50" /> </div>
            <div className={styles.test1} />
            <div className={styles.test2} />
            <div className={styles.test3} />
            <div className={styles.test4} />
            <div className={styles.test5} />
            <div className={styles.test6} />
            <div className={styles.test7} />
            <div className={styles.test8} />
            <div className={styles.test9} />
            <div className={styles.test10} > test </div>
            <div className={styles.test11} />
            <div className={styles.test13} > test </div>
            <div className={styles.test14} > test </div>
            <div className={styles.test14} ><img src='https://weflow.io/img/logo-icon.png'/></div>
            <div className={styles.test15} > test </div>
            <div className={styles.test16} ><img src='https://weflow.io/img/logo-icon.png'/></div>

            */}
            { /*console.log(props)*/ }
            <A p={parseInt(props.s)} onClick={props.onClick}/>
            <div>props.sum: {JSON.stringify(props.sum)}</div>
            { /* <div onClick={() => { history.push('/about')}}>go to About(history)</div> */ }
            <a href='#' onClick={() => { props.go('/about')}}>go to About(redux)</a>
        </div>
        </div>
    );
};

Page.propTypes = {
    p: PropTypes.string,
};

Page.contextTypes = {
    theme: PropTypes.string,
}


// function mapStateToProps(state, ownProps) {
//     return {
//         s: state.global.s
//     }
// }

function mapDispatchToProps(dispatch) {
    return {
        onClick: (e) => dispatch({ type: CLICK, data: 1}),
        go: (url) => dispatch(push(url))
    }
}
//export default connect(mapStateToProps, mapDispatchToProps)(Page);

export default connect(createSelector(
    selectGlobal,
    selectSum,
    (g, sum) => ({ s: g.s, sum: sum })
), mapDispatchToProps)(Page);
