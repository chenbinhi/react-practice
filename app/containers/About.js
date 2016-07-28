import React, {Component, PropTypes} from 'react';

class About extends Component {
    render() {
        return (
            <div>
                About pages
            </div>
        );
    }

    test() {
        console.log('called with ref test!')
    }
}

About.propTypes = {

};

export default About;