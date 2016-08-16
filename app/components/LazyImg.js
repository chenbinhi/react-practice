import React, {Component, PropTypes} from 'react';

import { isInVisiableSection } from 'utils'

import 'assets/load.jpg'

class LazyImg extends Component {
    constructor(props) {
        super(props);
        this.state = { src: props.default || '/assets/load.jpg', default: props.default, lazySrc: props.src };
        this.handleVisible = this.handleVisible.bind(this)
    }

    componentWillMount() {

    }

    handleVisible() {
        if (this.state.src != this.state.lazySrc && isInVisiableSection(this.ref))
            this.setState({ src: this.state.lazySrc })
    }

    componentDidMount() {
        this.handleVisible()
        window.addEventListener('scroll', this.handleVisible)
    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {
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
            <img ref={r => this.ref = r} src={this.state.src} className={this.props.className} width={this.props.width || '50px'} height={this.props.height || '50px'} />
        );
    }
}

LazyImg.propTypes = {
    default: PropTypes.string,
    src: PropTypes.string.isRequired,
};

export default LazyImg;
