Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/components/ModalContent.js';var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');var _ModalContext=require('./ModalContext');var _ModalContext2=_interopRequireDefault(_ModalContext);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var babelPluginFlowReactPropTypes_proptype_ModalContentProps=require('../type').babelPluginFlowReactPropTypes_proptype_ModalContentProps||require('prop-types').any;var styles=_reactNative.StyleSheet.create({content:{paddingVertical:24,paddingHorizontal:18},noPaddingTop:{paddingTop:0}});var ModalContent=function ModalContent(_ref){var style=_ref.style,children=_ref.children;return _react2.default.createElement(_ModalContext2.default.Consumer,{__source:{fileName:_jsxFileName,lineNumber:22}},function(_ref2){var hasTitle=_ref2.hasTitle;return _react2.default.createElement(_reactNative.View,{style:[styles.content,style,hasTitle&&styles.noPaddingTop],__source:{fileName:_jsxFileName,lineNumber:24}},children);});};ModalContent.propTypes=babelPluginFlowReactPropTypes_proptype_ModalContentProps===require('prop-types').any?{}:babelPluginFlowReactPropTypes_proptype_ModalContentProps;exports.default=ModalContent;