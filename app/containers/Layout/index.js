import React from 'react';

import ReactGridLayout from 'react-grid-layout'
import styles from './styles.css'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

const Layout = () => {
    return (
        <div className={styles.page}>
            <div className={styles.header}>
                Header
            </div>
            <div className={styles.container}>
                <div className={styles.main}>
                    main word-break: break-all; word-wrap: break-word;content content content content 我是中文，我是中文 
                </div>
                <div className={styles.left}>left</div>
                <div className={styles.right}>right</div>
            </div>
            <div className={styles.container}>
                <div className={styles.main1}>
                    <div className={styles.content}>
                        main
                        word-break: break-all; content content content content 我是中文，我是中文 
                    </div>
                </div>
                <div className={styles.left}>left</div>
                <div className={styles.right}>right</div>
            </div>
            <div className={styles.container}>
                <div className={styles.float_left}>left</div>
                <div className={styles.float_right}>right</div>
                <div className={styles.float_main}>
                    main word-wrap: break-word; content content content content content 我是中文，我是中文 
                </div>
            </div>
            <div className={styles.footer}>
                Footer
            </div>

            <ReactGridLayout  className="layout" cols={12} rowHeight={30} width={1200}>
                <div key="a" data-grid={{x: 0, y: 0, w: 1, h: 2, static: true}}>a</div>
                <div key="b" data-grid={{x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4}}>b</div>
                <div key="c" data-grid={{x: 4, y: 0, w: 1, h: 2}}>c</div>
            </ReactGridLayout>
        </div>
    );
};

export default Layout;