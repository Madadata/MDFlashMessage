import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import styles from './MDFlashMessage.css';

class MDFlashMessage extends Component {

  constructor() {
    super();
    this.state = {
      hidden: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleTimeout = this.handleTimeout.bind(this);
    this.messageTypes = ['default', 'info', 'success', 'warning', 'error'];
  }

  componentDidMount() {
    const { timeout } = this.props;
    if (!!timeout) {
      setTimeout(this.handleTimeout, timeout);
    }
  }

  getMessageJSX() {
    const { type, message } = this.props;
    const messageType = type || 'default';
    const { hidden } = this.state;

    if (!hidden && this.messageTypes.indexOf(messageType) >= 0) {
      return (
        <div className={classNames(styles.message, styles[type] || styles.default)}>
          <div
            className={classNames(styles.close, styles[type] || styles.default)}
            onClick={this.handleClick}
          >
            x
          </div>
          <div className={styles.content}>
            {message}
          </div>
        </div>
      );
    }
    return null;
  }

  handleTimeout() {
    this.setState({
      hidden: true,
    });
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      hidden: true,
    });
  }

  render() {
    return this.getMessageJSX();
  }

}

MDFlashMessage.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
  timeout: PropTypes.number,
};

export default MDFlashMessage;
