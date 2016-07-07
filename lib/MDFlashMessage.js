'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _MDFlashMessage = require('./MDFlashMessage.css');

var _MDFlashMessage2 = _interopRequireDefault(_MDFlashMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MDFlashMessage = function (_Component) {
  _inherits(MDFlashMessage, _Component);

  function MDFlashMessage() {
    _classCallCheck(this, MDFlashMessage);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MDFlashMessage).call(this));

    _this.state = {
      hidden: false
    };
    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleTimeout = _this.handleTimeout.bind(_this);
    _this.messageTypes = ['default', 'info', 'success', 'warning', 'error'];
    return _this;
  }

  _createClass(MDFlashMessage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var timeout = this.props.timeout;

      if (!!timeout) {
        setTimeout(this.handleTimeout, timeout);
      }
    }
  }, {
    key: 'getMessageJSX',
    value: function getMessageJSX() {
      var _props = this.props;
      var type = _props.type;
      var message = _props.message;

      var messageType = type || 'default';
      var hidden = this.state.hidden;


      if (!hidden && this.messageTypes.indexOf(messageType) >= 0) {
        return _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)(_MDFlashMessage2.default.message, _MDFlashMessage2.default[type] || _MDFlashMessage2.default.default) },
          _react2.default.createElement(
            'div',
            {
              className: (0, _classnames2.default)(_MDFlashMessage2.default.close, _MDFlashMessage2.default[type] || _MDFlashMessage2.default.default),
              onClick: this.handleClick
            },
            'x'
          ),
          _react2.default.createElement(
            'div',
            { className: _MDFlashMessage2.default.content },
            message
          )
        );
      }
      return null;
    }
  }, {
    key: 'handleTimeout',
    value: function handleTimeout() {
      this.setState({
        hidden: true
      });
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      e.preventDefault();
      this.setState({
        hidden: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return this.getMessageJSX();
    }
  }]);

  return MDFlashMessage;
}(_react.Component);

MDFlashMessage.propTypes = {
  type: _react.PropTypes.string,
  message: _react.PropTypes.string,
  timeout: _react.PropTypes.number
};

exports.default = MDFlashMessage;