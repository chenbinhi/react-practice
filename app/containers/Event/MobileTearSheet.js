import React, {Component, PropTypes} from 'react';
import 'assets/bottom-tear.svg'

class MobileTearSheet extends Component {


  render() {
    const {
      prepareStyles,
    } = this.context.muiTheme;

    const styles = {
      root: {
        marginTop: 24,
        marginBottom: 24,
        marginRight: 24,
        marginLeft: 24,
        maxWidth: 360,
        width: '100%',
      },
      container: {
        border: 'solid 1px #d9d9d9',
        borderBottom: 'none',
        height: this.props.height,
        overflow: 'hidden',
      },
      bottomTear: {
        display: 'block',
        position: 'relative',
        marginTop: -10,
        maxWidth: 360,
      },
    };

    return (
      <div style={prepareStyles(styles.root)}>
        <div style={prepareStyles(styles.container)}>
          {this.props.children}
        </div>
        <img style={prepareStyles(styles.bottomTear)} src="/assets/bottom-tear.svg" />
      </div>
    );
  }
}

  MobileTearSheet.propTypes = {
    children: PropTypes.node,
    height: PropTypes.number.isRequired,
  };

  MobileTearSheet.defaultProps = {
    height: 500,
  };

  MobileTearSheet.contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };


export default MobileTearSheet;
