import React from 'react';

import styles from './styles.css'

const Layout = () => {
    return (
        <div>
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
        </div>
    );
};

export default Layout;