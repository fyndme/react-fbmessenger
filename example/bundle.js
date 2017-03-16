/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = __webpack_require__(0);
var Button = (function (_super) {
    __extends(Button, _super);
    function Button(props) {
        _super.call(this, props);
        this.clickHandler = this.clickHandler.bind(this);
    }
    Button.prototype.clickHandler = function (e) {
        this.props.postbackCallback(this.props.payload, this.props.title);
        e.preventDefault();
    };
    Button.prototype.render = function () {
        if (this.props.type === 'web_url') {
            return (React.createElement("span", null, 
                React.createElement("a", {href: this.props.url, target: "_blank"}, this.props.title)
            ));
        }
        else if (this.props.type === 'postback') {
            return (React.createElement("span", {onClick: this.clickHandler}, 
                React.createElement("a", {href: "#"}, this.props.title)
            ));
        }
        return (React.createElement("div", null));
    };
    return Button;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Button;
//# sourceMappingURL=button.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function hash(aString) {
    var hash = 0;
    var i, chr;
    var len = aString.length;
    for (i = 0; i < len; i++) {
        chr = aString.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash.toString();
}
exports.hash = hash;
//# sourceMappingURL=hash.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var React = __webpack_require__(0);
// require('./scss/conversation.scss');
var generic_template_1 = __webpack_require__(9);
var button_template_1 = __webpack_require__(7);
var text_message_1 = __webpack_require__(16);
var quick_replies_1 = __webpack_require__(14);
var sender_actions_1 = __webpack_require__(15);
var image_template_1 = __webpack_require__(10);
var video_template_1 = __webpack_require__(18);
var audio_template_1 = __webpack_require__(6);
var hash_1 = __webpack_require__(2);
function TemplateMessage(props) {
    switch (props.message.attachment.payload.template_type) {
        case 'generic':
            return React.createElement(generic_template_1.default, __assign({postbackCallback: props.postbackCallback}, props.message.attachment.payload));
        case 'button':
            return React.createElement(button_template_1.default, __assign({postbackCallback: props.postbackCallback}, props.message.attachment.payload));
        default:
            return (React.createElement("div", {className: "error"}));
    }
}
exports.TemplateMessage = TemplateMessage;
function AttachementMessage(props) {
    switch (props.message.attachment.type) {
        case 'template':
            return React.createElement(TemplateMessage, __assign({postbackCallback: props.postbackCallback}, props));
        case 'image':
            return React.createElement(image_template_1.default, __assign({}, props.message.attachment));
        case 'video':
            return React.createElement(video_template_1.default, __assign({}, props.message.attachment));
        case 'audio':
            return React.createElement(audio_template_1.default, __assign({}, props.message.attachment));
        default:
            return (React.createElement("div", {className: "error"}));
    }
}
exports.AttachementMessage = AttachementMessage;
function Bubble(props) {
    if (props.sender_action) {
        return React.createElement("span", null);
    }
    if (props.notification) {
        return React.createElement("div", {className: "notification"}, props.notification.text);
    }
    if (props.message && props.message.text) {
        // text message
        return React.createElement(text_message_1.default, __assign({}, props.message));
    }
    if (props.message && props.message.attachment) {
        return React.createElement(AttachementMessage, __assign({postbackCallback: props.postbackCallback}, props));
    }
    return (React.createElement("div", {className: "error"}));
}
exports.Bubble = Bubble;
function addUniqueMid(conversation) {
    for (var i = 0; i < conversation.length; i++) {
        var message = conversation[i];
        // console.log(message.toString());
        if (message.sender_action) {
            continue;
        }
        if (message.notification) {
            message.message = { mid: "mid." + message.notification.text };
            continue;
        }
        if (!message.message.mid) {
            message.message.mid = hash_1.hash(JSON.stringify(message));
            conversation[i] = message;
        }
    }
    return conversation;
}
function filterConversation(conversation) {
    return conversation.filter(function (line) {
        if (line.sender_action) {
            if (line.sender_action === 'typing_on') {
                return true;
            }
            return false;
        }
        if (line.message) {
            return true;
        }
        if (line.notification) {
            return true;
        }
        return false;
    });
}
var Conversation = (function (_super) {
    __extends(Conversation, _super);
    function Conversation() {
        _super.apply(this, arguments);
    }
    Conversation.prototype.render = function () {
        var _this = this;
        // split into an array of arrays.
        // inside array is user's or bot's' bubbles
        var filteredConversation = filterConversation(this.props.conversation);
        addUniqueMid(filteredConversation);
        if (filteredConversation.length < 1) {
            return (React.createElement("div", {className: "empty"}));
        }
        var masterArray = [];
        var bubbleArray = [filteredConversation[0]];
        for (var i = 1; i < filteredConversation.length; i++) {
            var lastMessage_1 = bubbleArray[bubbleArray.length - 1];
            var currentMessage = filteredConversation[i];
            if (lastMessage_1.recipient.id !== currentMessage.recipient.id) {
                masterArray.push(bubbleArray);
                bubbleArray = [];
            }
            bubbleArray.push(currentMessage);
        }
        masterArray.push(bubbleArray);
        var bubbles = masterArray.map(function (setOfMessages, index) { return (React.createElement("div", {key: index + "-" + hash_1.hash(JSON.stringify(setOfMessages)), className: "bubble " + (_this.props.page_id === setOfMessages[0].recipient.id ? 'user' : setOfMessages[0].recipient.id === '@system' ? 'notification' : 'self')}, 
            React.createElement("div", {className: "multi"}, setOfMessages
                .filter(function (payload) { return payload.message; }) // display only messages
                .map(function (payload) {
                return React.createElement(Bubble, __assign({key: payload.message.mid, postbackCallback: _this.props.postbackCallback}, payload));
            }))
        )); });
        var lastMessage = bubbleArray[bubbleArray.length - 1];
        var quickReplies = lastMessage.message && lastMessage.message.quick_replies ? React.createElement(quick_replies_1.default, __assign({}, lastMessage.message, {postbackCallback: this.props.postbackCallback})) : null; // eslint-disable-line
        var senderActions = lastMessage.sender_action ? (React.createElement("div", {className: 'bubble self'}, 
            React.createElement("div", {className: 'multi'}, 
                React.createElement(sender_actions_1.default, {sender_action: lastMessage.sender_action})
            )
        )) : null;
        return (React.createElement("div", {className: "conversation"}, 
            bubbles, 
            quickReplies, 
            senderActions));
    };
    return Conversation;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Conversation;
//# sourceMappingURL=conversation.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var container_1 = __webpack_require__(8);
exports.Container = container_1.default;
var conversation_1 = __webpack_require__(4);
exports.Conversation = conversation_1.default;
var Types = __webpack_require__(17);
exports.Types = Types;
//# sourceMappingURL=index.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var React = __webpack_require__(0);
function AudioAttachment(props) {
    return (React.createElement("div", {className: "template audio-template button-template"}, 
        React.createElement("audio", {controls: true}, 
            React.createElement("source", {src: props.payload.url, type: "audio/mpeg"})
        )
    ));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AudioAttachment;
//# sourceMappingURL=audio-template.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var React = __webpack_require__(0);
var hash_1 = __webpack_require__(2);
var button_1 = __webpack_require__(1);
function ButtonTemplate(props) {
    return (React.createElement("div", {className: "template button-template"}, 
        React.createElement("div", {className: "description"}, 
            React.createElement("p", null, props.text)
        ), 
        React.createElement("div", {className: "ctas"}, props.buttons.map(function (button, index) { return React.createElement(button_1.default, __assign({key: index + "-" + hash_1.hash(JSON.stringify(button)), postbackCallback: props.postbackCallback}, button)); }))));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ButtonTemplate;
//# sourceMappingURL=button-template.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(3);
var conversation_1 = __webpack_require__(4);
exports.Conversation = conversation_1.default;
var persistent_menu_1 = __webpack_require__(13);
var persistent_menu_button_1 = __webpack_require__(12);
var defaults = __webpack_require__(19);
var input_1 = __webpack_require__(11);
var Container = (function (_super) {
    __extends(Container, _super);
    function Container(props) {
        _super.call(this, props);
        this.state = {
            showMenu: false,
        };
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
    }
    Container.prototype.componentDidMount = function () {
        var div = ReactDOM.findDOMNode(this.refs['chat']);
        div.scrollTop = div.scrollHeight;
    };
    Container.prototype.componentDidUpdate = function () {
        var div = ReactDOM.findDOMNode(this.refs['chat']);
        div.scrollTop = div.scrollHeight;
    };
    Container.prototype.handleMenuClick = function (event) {
        this.setState({ showMenu: !this.state.showMenu });
    };
    Container.prototype.handleFocus = function () {
        this.setState({ showMenu: false });
        if (this.props.textFocusCallback) {
            this.props.textFocusCallback();
        }
    };
    Container.prototype.render = function () {
        var menu = this.state.showMenu ? React.createElement(persistent_menu_1.default, {postbackCallback: this.props.postbackCallback, items: this.props.persistentMenu}) : null;
        var menuButon = this.props.persistentMenu === null ? null : React.createElement(persistent_menu_button_1.default, {isMenuOpen: this.state.showMenu, onClick: this.handleMenuClick});
        return (React.createElement("div", {className: "chatbox"}, 
            React.createElement(conversation_1.default, __assign({ref: "chat"}, this.props)), 
            React.createElement("div", {className: "text-field"}, 
                React.createElement(input_1.default, {userTextCallback: this.props.userTextCallback, textFocusCallback: this.handleFocus, textBlurCallback: this.props.textBlurCallback}, menuButon)
            ), 
            menu));
    };
    Container.defaultProps = {
        persistentMenu: null,
        conversation: [],
        page_id: 'page_id',
        postbackCallback: defaults.defaultPostbackCallback,
        userTextCallback: defaults.defualTextCallback,
        textFocusCallback: defaults.defaultFocusCallback,
        textBlurCallback: defaults.defaultBlurCallback,
    };
    return Container;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Container;
//# sourceMappingURL=container.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var React = __webpack_require__(0);
var hash_1 = __webpack_require__(2);
var button_1 = __webpack_require__(1);
function Element(props) {
    var img = props.image_url ? (React.createElement("img", {src: props.image_url})) : (React.createElement("div", {className: "img-holder"}));
    var buttons = props.buttons.map(function (button, index) { return (React.createElement(button_1.default, __assign({key: index + "-" + hash_1.hash(JSON.stringify(button)), postbackCallback: props.postbackCallback}, button))); });
    return (React.createElement("div", {className: "item"}, 
        img, 
        React.createElement("div", {className: "description"}, 
            React.createElement("h4", null, props.title), 
            React.createElement("p", null, props.subtitle)), 
        React.createElement("div", {className: "ctas"}, buttons)));
}
exports.Element = Element;
function GenericTemplate(props) {
    var items = props.elements.map(function (element, index) { return (React.createElement(Element, __assign({key: index + "-" + hash_1.hash(JSON.stringify(element)), postbackCallback: props.postbackCallback}, element))); });
    return (React.createElement("div", {className: "template generic-template"}, items));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GenericTemplate;
//# sourceMappingURL=generic-template.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var React = __webpack_require__(0);
function ImageAttachment(props) {
    return (React.createElement("div", {className: "template image-template button-template"}, 
        React.createElement("img", {src: props.payload.url})
    ));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ImageAttachment;
//# sourceMappingURL=image-template.js.map

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/* eslint-disable max-len */
var React = __webpack_require__(0);
var TextInput = (function (_super) {
    __extends(TextInput, _super);
    function TextInput(props) {
        _super.call(this, props);
        this.clickHandler = this.clickHandler.bind(this);
        this.getFocus = this.getFocus.bind(this);
        this.loseFocus = this.loseFocus.bind(this);
    }
    TextInput.prototype.getFocus = function () {
        if (this.props.textFocusCallback) {
            this.props.textFocusCallback();
        }
    };
    TextInput.prototype.loseFocus = function () {
        if (this.props.textBlurCallback) {
            this.props.textBlurCallback();
        }
    };
    TextInput.prototype.clickHandler = function (e) {
        e.preventDefault();
        this.props.userTextCallback(this.refs['textbox'].value);
        this.refs['textbox'].value = '';
    };
    TextInput.prototype.render = function () {
        return (React.createElement("form", {onSubmit: this.clickHandler}, 
            this.props.children, 
            React.createElement("input", {type: "text", ref: "textbox", id: "fyndme-textbox", name: "chattext", placeholder: "Type a message...", onFocus: this.getFocus, onBlur: this.loseFocus, autoComplete: "off"}), 
            React.createElement("input", {type: "submit", value: "Send"})));
    };
    return TextInput;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TextInput;
//# sourceMappingURL=input.js.map

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var React = __webpack_require__(0);
function PersistentMenuButton(props) {
    return (React.createElement("div", {className: "persistent-menu-button " + (props.isMenuOpen ? 'open' : 'closed'), onClick: props.onClick}, 
        React.createElement("span", null), 
        React.createElement("span", null), 
        React.createElement("span", null), 
        React.createElement("span", null)));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PersistentMenuButton;
//# sourceMappingURL=persistent-menu-button.js.map

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var React = __webpack_require__(0);
var button_1 = __webpack_require__(1);
function PersistentMenu(props) {
    return (React.createElement("div", {className: "persistent-menu"}, 
        React.createElement("div", {key: "menu-top", className: "menu-item menu-top"}, 
            React.createElement("span", null, "Menu")
        ), 
        props.items.call_to_actions.map(function (item, index) { return (React.createElement("div", {key: index + "-" + item.title, className: "menu-item"}, 
            React.createElement(button_1.default, __assign({}, props, item))
        )); })));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PersistentMenu;
//# sourceMappingURL=persistent-menu.js.map

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var React = __webpack_require__(0);
var button_1 = __webpack_require__(1);
function QuickReplies(props) {
    return (React.createElement("div", {className: "quick-replies"}, props.quick_replies.map(function (quickReply, index) { return (React.createElement("div", {key: quickReply.title + "-" + index, className: "reply"}, 
        React.createElement("p", null, 
            React.createElement(button_1.default, {type: "postback", title: quickReply.title, payload: quickReply.payload, postbackCallback: props.postbackCallback})
        )
    )); })));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = QuickReplies;
//# sourceMappingURL=quick-replies.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var React = __webpack_require__(0);
function TypingOn() {
    return (React.createElement("p", {className: "jumping-dots"}, 
        React.createElement("span", {className: "dot dot-1"}, "."), 
        React.createElement("span", {className: "dot dot-2"}, "."), 
        React.createElement("span", {className: "dot dot-3"}, ".")));
}
function SenderActions(props) {
    switch (props.sender_action) {
        case 'typing_on':
            return React.createElement(TypingOn, null);
        default:
            return null;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SenderActions;
//# sourceMappingURL=sender-actions.js.map

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var React = __webpack_require__(0);
function TextMessage(props) {
    return (React.createElement("p", null, props.text));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TextMessage;
//# sourceMappingURL=text-message.js.map

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# sourceMappingURL=types.js.map

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var React = __webpack_require__(0);
function VideoAttachment(props) {
    return (React.createElement("div", {className: "template video-template button-template"}, 
        React.createElement("video", {controls: true}, 
            React.createElement("source", {src: props.payload.url, type: "video/mp4"})
        )
    ));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = VideoAttachment;
//# sourceMappingURL=video-template.js.map

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.defaultPostbackCallback = function (payload, text) { return null; };
exports.defualTextCallback = function (text) { return null; };
exports.defaultFocusCallback = function () { return null; };
exports.defaultBlurCallback = function () { return null; };
//# sourceMappingURL=defaultFunctions.js.map

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(3);

var ReactMessenger = __webpack_require__(5);
var conversation = [
{
"recipient":{
	"id":"1"
},
"message":{
	"text":"text"
}
},
{
	"recipient":{
		"id":"USER_ID"
	},
	"message":{
		"text":"hello, world!"
	}
},
{
	"recipient":{
		"id":"@system"
	},
	"notification":{
		"text":"Notification from the server"
	}
},
{
	"recipient":{
		"id":"@system"
	},
	"notification":{
		"text":"Chained notifciations"
	}
},
{
	"recipient":{
		"id":"1"
	},
	"message":{
		"text":"image"
	}
},
{
  "recipient":{
    "id":"USER_ID"
  },
  "message":{
    "attachment":{
      "type":"image",
      "payload":{
        "url":"http://images.fynd.fashion/w764-h400-cpad/Nordstrom_4405258_11_12823711.jpg"
      }
    }
  }
},
{
	"recipient":{
		"id":"1"
	},
	"message":{
		"text":"audio"
	}
},
{
  "recipient":{
    "id":"USER_ID"
  },
  "message":{
    "attachment":{
      "type":"audio",
      "payload":{
        "url":"https://petersapparel.com/bin/clip.mp3"
      }
    }
  }
},
{
	"recipient":{
		"id":"1"
	},
	"message":{
		"text":"video"
	}
},
{
  "recipient":{
    "id":"USER_ID"
  },
  "message":{
    "attachment":{
      "type":"video",
      "payload":{
        "url":"http://www.sample-videos.com/video/mp4/480/big_buck_bunny_480p_1mb.mp4"
      }
    }
  }
},
{
	"recipient":{
		"id":"1"
	},
	"message":{
		"text":"file"
	}
},
{
  "recipient":{
    "id":"USER_ID"
  },
  "message":{
    "attachment":{
      "type":"file",
      "payload":{
        "url":"https://petersapparel.com/bin/receipt.pdf"
      }
    }
  }
},
{
	"recipient":{
		"id":"1"
	},
	"message":{
		"text":"generic template with 1 element"
	}
},
{
  "recipient":{
    "id":"USER_ID"
  },
  "message":{
    "attachment":{
      "type":"template",
      "payload":{
        "template_type":"generic",
        "elements":[
          {
            "title":"Welcome to Peter\'s Hats",
            "item_url":"https://petersfancybrownhats.com",
            "image_url":"http://images.fynd.fashion/w764-h400-cpad/Nordstrom_4405258_11_12823711.jpg",
            "subtitle":"We\'ve got the right hat for everyone.",
            "buttons":[
              {
                "type":"web_url",
                "url":"https://petersfancybrownhats.com",
                "title":"View Website"
              },
              {
                "type":"postback",
                "title":"Start Chatting",
                "payload":"DEVELOPER_DEFINED_PAYLOAD"
              }              
            ]
          }
        ]
      }
    }
  }
},
{
	"recipient":{
		"id":"1"
	},
	"message":{
		"text":"button template"
	}
},
{
  "recipient":{
    "id":"USER_ID"
  },
  "message":{
    "attachment":{
      "type":"template",
      "payload":{
        "template_type":"button",
        "text":"What's next?",
        "buttons":[
          {
            "type":"web_url",
            "url":"https://petersapparel.parseapp.com",
            "title":"Show Website"
          },
          {
            "type":"postback",
            "title":"Start Chatting",
            "payload":"USER_DEFINED_PAYLOAD"
          }
        ]
      }
    }
  }
},
{
	"recipient":{
		"id":"1"
	},
	"message":{
		"text":"Quick Replies"
	}
},
{
  "recipient":{
    "id":"USER_ID"
  },
  "message":{
    "text":"Pick a color:",
    "quick_replies":[
      {
        "content_type":"text",
        "title":"Red",
        "payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_RED"
      },
      {
        "content_type":"text",
        "title":"Green",
        "payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_GREEN"
      }
    ]
  }
},
{
	"recipient":{
		"id":"1"
	},
	"message":{
		"text":"generic template with 2 elements"
	}
},
{
  "recipient":{
    "id":"USER_ID"
  },
  "message":{
    "attachment":{
      "type":"template",
      "payload":{
        "template_type":"generic",
        "elements":[
          {
            "title":"Welcome to Peter\'s Hats",
            "item_url":"https://petersfancybrownhats.com",
            "image_url":"http://images.fynd.fashion/w764-h400-cpad/Nordstrom_4405258_11_12823711.jpg",
            "subtitle":"We\'ve got the right hat for everyone.",
            "buttons":[
              {
                "type":"web_url",
                "url":"https://petersfancybrownhats.com",
                "title":"View Website"
              },
              {
                "type":"postback",
                "title":"Start Chatting",
                "payload":"DEVELOPER_DEFINED_PAYLOAD"
              }              
            ]
          },
          {
            "title":"Welcome to Peter\'s Hats",
            "item_url":"https://petersfancybrownhats.com",
            "image_url":"http://images.fynd.fashion/w764-h400-cpad/Nordstrom_4405258_11_12823711.jpg",
            "subtitle":"We\'ve got the right hat for everyone.",
            "buttons":[
              {
                "type":"web_url",
                "url":"https://petersfancybrownhats.com",
                "title":"View Website"
              },
              {
                "type":"postback",
                "title":"Start Chatting",
                "payload":"DEVELOPER_DEFINED_PAYLOAD"
              }              
            ]
          }
        ]
      }
    }
  }
},
{
	"recipient":{
		"id":"1"
	},
	"message":{
		"text":"generic template with 8 elements"
	}
},
{
  "recipient":{
    "id":"USER_ID"
  },
  "message":{
    "attachment":{
      "type":"template",
      "payload":{
        "template_type":"generic",
        "elements":[
          {
            "title":"Welcome to Peter\'s Hats",
            "item_url":"https://petersfancybrownhats.com",
            "image_url":"http://images.fynd.fashion/w764-h400-cpad/Nordstrom_4405258_11_12823711.jpg",
            "subtitle":"We\'ve got the right hat for everyone.",
            "buttons":[
              {
                "type":"web_url",
                "url":"https://petersfancybrownhats.com",
                "title":"View Website"
              },
              {
                "type":"postback",
                "title":"Start Chatting",
                "payload":"DEVELOPER_DEFINED_PAYLOAD"
              }              
            ]
          },
          {
            "title":"Welcome to Peter\'s Hats",
            "item_url":"https://petersfancybrownhats.com",
            "image_url":"http://images.fynd.fashion/w764-h400-cpad/Nordstrom_4405258_11_12823711.jpg",
            "subtitle":"We\'ve got the right hat for everyone.",
            "buttons":[
              {
                "type":"web_url",
                "url":"https://petersfancybrownhats.com",
                "title":"View Website"
              },
              {
                "type":"postback",
                "title":"Start Chatting",
                "payload":"DEVELOPER_DEFINED_PAYLOAD"
              }              
            ]
          },
          {
            "title":"Welcome to Peter\'s Hats",
            "item_url":"https://petersfancybrownhats.com",
            "image_url":"http://images.fynd.fashion/w764-h400-cpad/Nordstrom_4405258_11_12823711.jpg",
            "subtitle":"We\'ve got the right hat for everyone.",
            "buttons":[
              {
                "type":"web_url",
                "url":"https://petersfancybrownhats.com",
                "title":"View Website"
              },
              {
                "type":"postback",
                "title":"Start Chatting",
                "payload":"DEVELOPER_DEFINED_PAYLOAD"
              }              
            ]
          },
          {
            "title":"Welcome to Peter\'s Hats",
            "item_url":"https://petersfancybrownhats.com",
            "image_url":"http://images.fynd.fashion/w764-h400-cpad/Nordstrom_4405258_11_12823711.jpg",
            "subtitle":"We\'ve got the right hat for everyone.",
            "buttons":[
              {
                "type":"web_url",
                "url":"https://petersfancybrownhats.com",
                "title":"View Website"
              },
              {
                "type":"postback",
                "title":"Start Chatting",
                "payload":"DEVELOPER_DEFINED_PAYLOAD"
              }              
            ]
          },
          {
            "title":"Welcome to Peter\'s Hats",
            "item_url":"https://petersfancybrownhats.com",
            "image_url":"http://images.fynd.fashion/w764-h400-cpad/Nordstrom_4405258_11_12823711.jpg",
            "subtitle":"We\'ve got the right hat for everyone.",
            "buttons":[
              {
                "type":"web_url",
                "url":"https://petersfancybrownhats.com",
                "title":"View Website"
              },
              {
                "type":"postback",
                "title":"Start Chatting",
                "payload":"DEVELOPER_DEFINED_PAYLOAD"
              }              
            ]
          },
          {
            "title":"Welcome to Peter\'s Hats",
            "item_url":"https://petersfancybrownhats.com",
            "image_url":"http://images.fynd.fashion/w764-h400-cpad/Nordstrom_4405258_11_12823711.jpg",
            "subtitle":"We\'ve got the right hat for everyone.",
            "buttons":[
              {
                "type":"web_url",
                "url":"https://petersfancybrownhats.com",
                "title":"View Website"
              },
              {
                "type":"postback",
                "title":"Start Chatting",
                "payload":"DEVELOPER_DEFINED_PAYLOAD"
              }              
            ]
          },
          {
            "title":"Welcome to Peter\'s Hats",
            "item_url":"https://petersfancybrownhats.com",
            "image_url":"http://images.fynd.fashion/w764-h400-cpad/Nordstrom_4405258_11_12823711.jpg",
            "subtitle":"We\'ve got the right hat for everyone.",
            "buttons":[
              {
                "type":"web_url",
                "url":"https://petersfancybrownhats.com",
                "title":"View Website"
              },
              {
                "type":"postback",
                "title":"Start Chatting",
                "payload":"DEVELOPER_DEFINED_PAYLOAD"
              }              
            ]
          },
          {
            "title":"Welcome to Peter\'s Hats",
            "item_url":"https://petersfancybrownhats.com",
            "image_url":"http://images.fynd.fashion/w764-h400-cpad/Nordstrom_4405258_11_12823711.jpg",
            "subtitle":"We\'ve got the right hat for everyone.",
            "buttons":[
              {
                "type":"web_url",
                "url":"https://petersfancybrownhats.com",
                "title":"View Website"
              },
              {
                "type":"postback",
                "title":"Start Chatting",
                "payload":"DEVELOPER_DEFINED_PAYLOAD"
              }              
            ]
          }
        ]
      }
    }
  }
},
{
	"recipient":{
		"id":"1"
	},
	"message":{
		"text":"generic template with 1 element & top text"
	}
},
{
	"recipient":{
		"id":"USER_ID"
	},
	"message":{
		"text":"Just 1 element"
	}
},
{
  "recipient":{
    "id":"USER_ID"
  },
  "message":{
    "attachment":{
      "type":"template",
      "payload":{
        "template_type":"generic",
        "elements":[
          {
            "title":"Welcome to Peter\'s Hats",
            "item_url":"https://petersfancybrownhats.com",
            "image_url":"http://images.fynd.fashion/w764-h400-cpad/Nordstrom_4405258_11_12823711.jpg",
            "subtitle":"We\'ve got the right hat for everyone.",
            "buttons":[
              {
                "type":"web_url",
                "url":"https://petersfancybrownhats.com",
                "title":"View Website"
              },
              {
                "type":"postback",
                "title":"Start Chatting",
                "payload":"DEVELOPER_DEFINED_PAYLOAD"
              }              
            ]
          }
        ]
      }
    }
  }
},
{
	"recipient":{
		"id":"1"
	},
	"message":{
		"text":"generic template with 1 element, top text, bottom text"
	}
},
{
	"recipient":{
		"id":"USER_ID"
	},
	"message":{
		"text":"On top"
	}
},
{
  "recipient":{
    "id":"USER_ID"
  },
  "message":{
    "attachment":{
      "type":"template",
      "payload":{
        "template_type":"generic",
        "elements":[
          {
            "title":"Welcome to Peter\'s Hats",
            "item_url":"https://petersfancybrownhats.com",
            "image_url":"http://images.fynd.fashion/w764-h400-cpad/Nordstrom_4405258_11_12823711.jpg",
            "subtitle":"We\'ve got the right hat for everyone.",
            "buttons":[
              {
                "type":"web_url",
                "url":"https://petersfancybrownhats.com",
                "title":"View Website"
              },
              {
                "type":"postback",
                "title":"Start Chatting",
                "payload":"DEVELOPER_DEFINED_PAYLOAD"
              }              
            ]
          },
          {
            "title":"Welcome to Peter\'s Hats",
            "item_url":"https://petersfancybrownhats.com",
            "image_url":"http://images.fynd.fashion/w764-h400-cpad/Nordstrom_4405258_11_12823711.jpg",
            "subtitle":"We\'ve got the right hat for everyone.",
            "buttons":[
              {
                "type":"web_url",
                "url":"https://petersfancybrownhats.com",
                "title":"View Website"
              },
              {
                "type":"postback",
                "title":"Start Chatting",
                "payload":"DEVELOPER_DEFINED_PAYLOAD"
              }              
            ]
          }
        ]
      }
    }
  }
},
{
	"recipient":{
		"id":"USER_ID"
	},
	"message":{
		"text":"On bottom"
	}
},
{
	"recipient":{
		"id":"1"
	},
	"message":{
		"text":"line 1"
	}
},
{
	"recipient":{
		"id":"1"
	},
	"message":{
		"text":"This is a very long lone following a shorter line."
	}
},
{
  "recipient":{
    "id":"USER_ID"
  },
  "message":{
    "attachment":{
      "type":"template",
      "payload":{
        "template_type":"button",
        "text":"This is a very long button prompt for the user to answer to. It should nicely wrap around to multiple lines.",
        "buttons":[
          {
            "type":"web_url",
            "url":"https://petersapparel.parseapp.com",
            "title":"Show Website"
          },
          {
            "type":"postback",
            "title":"Start Chatting",
            "payload":"USER_DEFINED_PAYLOAD"
          }
        ]
      }
    }
  }
},
{
	"recipient":{
		"id":"1"
	},
	"message":{
		"text":"image with header"
	}
},
{
	"recipient":{
		"id":"USER_ID"
	},
	"message":{
		"text":"This is a long header for the image below..."
	}
},
{
  "recipient":{
    "id":"USER_ID"
  },
  "message":{
    "attachment":{
      "type":"image",
      "payload":{
        "url":"http://images.fynd.fashion/w764-h400-cpad/Nordstrom_4405258_11_12823711.jpg"
      }
    }
  }
},
{
  "recipient":{
    "id":"USER_ID"
  },
  "sender_action": "typing_on",
},
];
ReactDOM.render(
	React.createElement(ReactMessenger.Conversation, {conversation: conversation, page_id: '1'}), 
	document.getElementById('root')
);

/***/ })
/******/ ]);