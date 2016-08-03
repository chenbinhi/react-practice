import React, {Component, PropTypes} from 'react';

class About extends Component {
    constructor(props) {
        super(props)

        this.i = 'init info'
        this.handleClick = this.handleClick.bind(this)
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                About pages {this.info}
            </div>
        );
    }

    test() {
        console.log('called with ref test!', this.info)
    }

    handleClick(e) {
        this.info = this.i + '_'
        console.log(About.count, this.i, this.info)
        About.staticMethod()
        About.staticMethodIn()
    }

    static staticMethodIn() {
        console.assert(this === About)
        console.log(this.count++)
    }
    get info() {
        return 'hi.' + this.i
    }

    set info(i) {
        this.i = i
    }
}

About.count = 10
About.staticMethod = function() {
    console.assert(this === About)
    console.log(this.count++)
}

About.propTypes = {

};

export default About;