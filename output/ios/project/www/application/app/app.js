var require = meteorInstall({"imports":{"ui":{"layouts":{"Navigation":{"MainNav.jsx":["react","meteor/meteor",function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/layouts/Navigation/MainNav.jsx                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.__esModule = true;                                                                                             //
                                                                                                                       //
var _react = require('react');                                                                                         // 1
                                                                                                                       //
var _react2 = _interopRequireDefault(_react);                                                                          //
                                                                                                                       //
var _meteor = require('meteor/meteor');                                                                                // 2
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                      //
                                                                                                                       //
var MainNav = _react2['default'].createClass({                                                                         // 4
  displayName: 'MainNav',                                                                                              //
                                                                                                                       //
  componentDidMount: function () {                                                                                     // 5
    function componentDidMount() {                                                                                     // 5
      $('.dropdown-button').dropdown({                                                                                 // 6
        hover: true, // Activate on hover                                                                              // 7
        belowOrigin: true // Displays dropdown below the button                                                        // 8
      });                                                                                                              // 6
                                                                                                                       //
      $('.button-collapse').sideNav({                                                                                  // 11
        menuWidth: 240, // Default is 240                                                                              // 12
        edge: 'left', // Choose the horizontal origin                                                                  // 13
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor                                 // 14
      });                                                                                                              // 11
    }                                                                                                                  //
                                                                                                                       //
    return componentDidMount;                                                                                          //
  }(),                                                                                                                 //
                                                                                                                       //
  handleLogout: function () {                                                                                          // 18
    function handleLogout() {                                                                                          // 18
      if (confirm("Are you sure you want to logout?")) {                                                               // 19
        _meteor.Meteor.logout(function () {                                                                            // 20
          FlowRouter.go("home");                                                                                       // 21
        });                                                                                                            //
      }                                                                                                                //
    }                                                                                                                  //
                                                                                                                       //
    return handleLogout;                                                                                               //
  }(),                                                                                                                 //
  render: function () {                                                                                                // 25
    function render() {                                                                                                //
      console.log(_meteor.Meteor.user());                                                                              // 26
      return _react2['default'].createElement(                                                                         // 27
        'nav',                                                                                                         //
        { className: 'blue darken-2' },                                                                                //
        _react2['default'].createElement(                                                                              //
          'ul',                                                                                                        //
          { id: 'userDropdown', className: 'dropdown-content' },                                                       //
          _react2['default'].createElement(                                                                            //
            'li',                                                                                                      //
            null,                                                                                                      //
            _react2['default'].createElement(                                                                          //
              'a',                                                                                                     //
              { onClick: this.handleLogout },                                                                          //
              'Logout'                                                                                                 //
            )                                                                                                          //
          )                                                                                                            //
        ),                                                                                                             //
        _react2['default'].createElement(                                                                              //
          'ul',                                                                                                        //
          { id: 'userDropdown1', className: 'dropdown-content' },                                                      //
          _react2['default'].createElement(                                                                            //
            'li',                                                                                                      //
            null,                                                                                                      //
            _react2['default'].createElement(                                                                          //
              'a',                                                                                                     //
              { onClick: this.handleLogout },                                                                          //
              'Logout'                                                                                                 //
            )                                                                                                          //
          )                                                                                                            //
        ),                                                                                                             //
        _react2['default'].createElement(                                                                              //
          'div',                                                                                                       //
          { className: 'nav-wrapper gradient-navbar container' },                                                      //
          _react2['default'].createElement(                                                                            //
            'a',                                                                                                       //
            { href: FlowRouter.path("index"), className: 'brand-logo' },                                               //
            'GoMosque Events'                                                                                          //
          ),                                                                                                           //
          _react2['default'].createElement(                                                                            //
            'a',                                                                                                       //
            { href: '#', 'data-activates': 'mobile-demo', className: 'button-collapse' },                              //
            _react2['default'].createElement(                                                                          //
              'i',                                                                                                     //
              { className: 'material-icons' },                                                                         //
              'menu'                                                                                                   //
            )                                                                                                          //
          ),                                                                                                           //
          _react2['default'].createElement(                                                                            //
            'ul',                                                                                                      //
            { className: 'right hide-on-med-and-down' },                                                               //
            _react2['default'].createElement(                                                                          //
              'li',                                                                                                    //
              null,                                                                                                    //
              _react2['default'].createElement(                                                                        //
                'a',                                                                                                   //
                { href: FlowRouter.path("eventsView") },                                                               //
                'Events'                                                                                               //
              )                                                                                                        //
            ),                                                                                                         //
            _react2['default'].createElement(                                                                          //
              'li',                                                                                                    //
              null,                                                                                                    //
              _react2['default'].createElement(                                                                        //
                'a',                                                                                                   //
                { href: FlowRouter.path("dashboard") },                                                                //
                'Dashboard'                                                                                            //
              )                                                                                                        //
            ),                                                                                                         //
            _react2['default'].createElement(                                                                          //
              'li',                                                                                                    //
              null,                                                                                                    //
              _react2['default'].createElement(                                                                        //
                'a',                                                                                                   //
                { className: 'dropdown-button', 'data-activates': 'userDropdown' },                                    //
                _meteor.Meteor.user().emails[0].address                                                                //
              )                                                                                                        //
            )                                                                                                          //
          ),                                                                                                           //
          _react2['default'].createElement(                                                                            //
            'ul',                                                                                                      //
            { className: 'side-nav', id: 'mobile-demo' },                                                              //
            _react2['default'].createElement(                                                                          //
              'li',                                                                                                    //
              null,                                                                                                    //
              _react2['default'].createElement(                                                                        //
                'a',                                                                                                   //
                { href: FlowRouter.path("eventsView") },                                                               //
                'Events'                                                                                               //
              )                                                                                                        //
            ),                                                                                                         //
            _react2['default'].createElement(                                                                          //
              'li',                                                                                                    //
              null,                                                                                                    //
              _react2['default'].createElement(                                                                        //
                'a',                                                                                                   //
                { href: FlowRouter.path("dashboard") },                                                                //
                'Dashboard'                                                                                            //
              )                                                                                                        //
            ),                                                                                                         //
            _react2['default'].createElement(                                                                          //
              'li',                                                                                                    //
              null,                                                                                                    //
              _react2['default'].createElement(                                                                        //
                'a',                                                                                                   //
                { className: 'dropdown-button', 'data-activates': 'userDropdown1' },                                   //
                _meteor.Meteor.user().emails[0].address                                                                //
              )                                                                                                        //
            )                                                                                                          //
          )                                                                                                            //
        )                                                                                                              //
      );                                                                                                               //
    }                                                                                                                  //
                                                                                                                       //
    return render;                                                                                                     //
  }()                                                                                                                  //
});                                                                                                                    //
                                                                                                                       //
exports['default'] = MainNav;                                                                                          //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"MosqueMainNav.jsx":["react","meteor/meteor",function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/layouts/Navigation/MosqueMainNav.jsx                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.__esModule = true;                                                                                             //
                                                                                                                       //
var _react = require('react');                                                                                         // 1
                                                                                                                       //
var _react2 = _interopRequireDefault(_react);                                                                          //
                                                                                                                       //
var _meteor = require('meteor/meteor');                                                                                // 2
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                      //
                                                                                                                       //
var MosqueMainNav = _react2['default'].createClass({                                                                   // 4
  displayName: 'MosqueMainNav',                                                                                        //
                                                                                                                       //
  componentDidMount: function () {                                                                                     // 5
    function componentDidMount() {                                                                                     // 5
      $('.dropdown-button').dropdown({                                                                                 // 6
        hover: true, // Activate on hover                                                                              // 7
        belowOrigin: true // Displays dropdown below the button                                                        // 8
      });                                                                                                              // 6
                                                                                                                       //
      $('.button-collapse').sideNav({                                                                                  // 11
        menuWidth: 240, // Default is 240                                                                              // 12
        edge: 'left', // Choose the horizontal origin                                                                  // 13
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor                                 // 14
      });                                                                                                              // 11
    }                                                                                                                  //
                                                                                                                       //
    return componentDidMount;                                                                                          //
  }(),                                                                                                                 //
                                                                                                                       //
  handleLogout: function () {                                                                                          // 18
    function handleLogout() {                                                                                          // 18
      if (confirm("Are you sure you want to logout?")) {                                                               // 19
        _meteor.Meteor.logout(function () {                                                                            // 20
          FlowRouter.go("mosqueLogin");                                                                                // 21
        });                                                                                                            //
      }                                                                                                                //
    }                                                                                                                  //
                                                                                                                       //
    return handleLogout;                                                                                               //
  }(),                                                                                                                 //
  render: function () {                                                                                                // 25
    function render() {                                                                                                //
      console.log(_meteor.Meteor.user());                                                                              // 26
      return _react2['default'].createElement(                                                                         // 27
        'nav',                                                                                                         //
        { className: 'green darken-2' },                                                                               //
        _react2['default'].createElement(                                                                              //
          'div',                                                                                                       //
          { className: 'container' },                                                                                  //
          _react2['default'].createElement(                                                                            //
            'ul',                                                                                                      //
            { id: 'userDropdown', className: 'dropdown-content' },                                                     //
            _react2['default'].createElement(                                                                          //
              'li',                                                                                                    //
              null,                                                                                                    //
              _react2['default'].createElement(                                                                        //
                'a',                                                                                                   //
                { onClick: this.handleLogout },                                                                        //
                'Logout'                                                                                               //
              )                                                                                                        //
            )                                                                                                          //
          ),                                                                                                           //
          _react2['default'].createElement(                                                                            //
            'ul',                                                                                                      //
            { id: 'userDropdown1', className: 'dropdown-content' },                                                    //
            _react2['default'].createElement(                                                                          //
              'li',                                                                                                    //
              null,                                                                                                    //
              _react2['default'].createElement(                                                                        //
                'a',                                                                                                   //
                { onClick: this.handleLogout },                                                                        //
                'Logout'                                                                                               //
              )                                                                                                        //
            )                                                                                                          //
          ),                                                                                                           //
          _react2['default'].createElement(                                                                            //
            'div',                                                                                                     //
            { className: 'nav-wrapper gradient-navbar' },                                                              //
            _react2['default'].createElement(                                                                          //
              'a',                                                                                                     //
              { href: FlowRouter.path("index"), className: 'brand-logo' },                                             //
              'GoMosque Events'                                                                                        //
            ),                                                                                                         //
            _react2['default'].createElement(                                                                          //
              'a',                                                                                                     //
              { href: '#', 'data-activates': 'mobile-demo', className: 'button-collapse' },                            //
              _react2['default'].createElement(                                                                        //
                'i',                                                                                                   //
                { className: 'material-icons' },                                                                       //
                'menu'                                                                                                 //
              )                                                                                                        //
            ),                                                                                                         //
            _react2['default'].createElement(                                                                          //
              'ul',                                                                                                    //
              { className: 'right hide-on-med-and-down' },                                                             //
              _react2['default'].createElement(                                                                        //
                'li',                                                                                                  //
                null,                                                                                                  //
                _react2['default'].createElement(                                                                      //
                  'a',                                                                                                 //
                  { href: FlowRouter.path("mosqueDashboard") },                                                        //
                  'Upcoming'                                                                                           //
                )                                                                                                      //
              ),                                                                                                       //
              _react2['default'].createElement(                                                                        //
                'li',                                                                                                  //
                null,                                                                                                  //
                _react2['default'].createElement(                                                                      //
                  'a',                                                                                                 //
                  { href: FlowRouter.path("mosqueHistory") },                                                          //
                  'Past'                                                                                               //
                )                                                                                                      //
              ),                                                                                                       //
              _react2['default'].createElement(                                                                        //
                'li',                                                                                                  //
                null,                                                                                                  //
                _react2['default'].createElement(                                                                      //
                  'a',                                                                                                 //
                  { className: 'dropdown-button', 'data-activates': 'userDropdown' },                                  //
                  _meteor.Meteor.user().emails[0].address                                                              //
                )                                                                                                      //
              )                                                                                                        //
            ),                                                                                                         //
            _react2['default'].createElement(                                                                          //
              'ul',                                                                                                    //
              { className: 'side-nav', id: 'mobile-demo' },                                                            //
              _react2['default'].createElement(                                                                        //
                'li',                                                                                                  //
                null,                                                                                                  //
                _react2['default'].createElement(                                                                      //
                  'a',                                                                                                 //
                  { href: FlowRouter.path("mosqueDashboard") },                                                        //
                  'Upcoming'                                                                                           //
                )                                                                                                      //
              ),                                                                                                       //
              _react2['default'].createElement(                                                                        //
                'li',                                                                                                  //
                null,                                                                                                  //
                _react2['default'].createElement(                                                                      //
                  'a',                                                                                                 //
                  { href: FlowRouter.path("mosqueHistory") },                                                          //
                  'Past'                                                                                               //
                )                                                                                                      //
              ),                                                                                                       //
              _react2['default'].createElement(                                                                        //
                'li',                                                                                                  //
                null,                                                                                                  //
                _react2['default'].createElement(                                                                      //
                  'a',                                                                                                 //
                  { className: 'dropdown-button', 'data-activates': 'userDropdown1' },                                 //
                  _meteor.Meteor.user().emails[0].address                                                              //
                )                                                                                                      //
              )                                                                                                        //
            )                                                                                                          //
          )                                                                                                            //
        )                                                                                                              //
      );                                                                                                               //
    }                                                                                                                  //
                                                                                                                       //
    return render;                                                                                                     //
  }()                                                                                                                  //
});                                                                                                                    //
                                                                                                                       //
exports['default'] = MosqueMainNav;                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"MosqueNav.jsx":["react",function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/layouts/Navigation/MosqueNav.jsx                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.__esModule = true;                                                                                             //
                                                                                                                       //
var _react = require('react');                                                                                         // 1
                                                                                                                       //
var _react2 = _interopRequireDefault(_react);                                                                          //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                      //
                                                                                                                       //
var MosqueNav = _react2['default'].createClass({                                                                       // 3
  displayName: 'MosqueNav',                                                                                            //
                                                                                                                       //
  componentDidMount: function () {                                                                                     // 4
    function componentDidMount() {                                                                                     // 4
      $('.button-collapse').sideNav({                                                                                  // 5
        menuWidth: 240, // Default is 240                                                                              // 6
        edge: 'left', // Choose the horizontal origin                                                                  // 7
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor                                 // 8
      });                                                                                                              // 5
    }                                                                                                                  //
                                                                                                                       //
    return componentDidMount;                                                                                          //
  }(),                                                                                                                 //
  render: function () {                                                                                                // 11
    function render() {                                                                                                //
      return _react2['default'].createElement(                                                                         // 12
        'nav',                                                                                                         //
        { className: 'green darken-2' },                                                                               //
        _react2['default'].createElement(                                                                              //
          'div',                                                                                                       //
          { className: 'container' },                                                                                  //
          _react2['default'].createElement(                                                                            //
            'div',                                                                                                     //
            { className: 'nav-wrapper gradient-navbar' },                                                              //
            _react2['default'].createElement(                                                                          //
              'a',                                                                                                     //
              { href: FlowRouter.path("index"), className: 'brand-logo' },                                             //
              'GoMosque Events'                                                                                        //
            ),                                                                                                         //
            _react2['default'].createElement(                                                                          //
              'a',                                                                                                     //
              { href: '#', 'data-activates': 'mobile-demo', className: 'button-collapse' },                            //
              _react2['default'].createElement(                                                                        //
                'i',                                                                                                   //
                { className: 'material-icons' },                                                                       //
                'menu'                                                                                                 //
              )                                                                                                        //
            ),                                                                                                         //
            _react2['default'].createElement(                                                                          //
              'ul',                                                                                                    //
              { className: 'right hide-on-med-and-down' },                                                             //
              _react2['default'].createElement(                                                                        //
                'li',                                                                                                  //
                null,                                                                                                  //
                _react2['default'].createElement(                                                                      //
                  'a',                                                                                                 //
                  { href: FlowRouter.path("mosqueLogin") },                                                            //
                  'Login'                                                                                              //
                )                                                                                                      //
              ),                                                                                                       //
              _react2['default'].createElement(                                                                        //
                'li',                                                                                                  //
                null,                                                                                                  //
                _react2['default'].createElement(                                                                      //
                  'a',                                                                                                 //
                  { href: FlowRouter.path("mosqueRegister") },                                                         //
                  'Register'                                                                                           //
                )                                                                                                      //
              )                                                                                                        //
            ),                                                                                                         //
            _react2['default'].createElement(                                                                          //
              'ul',                                                                                                    //
              { className: 'side-nav', id: 'mobile-demo' },                                                            //
              _react2['default'].createElement(                                                                        //
                'li',                                                                                                  //
                null,                                                                                                  //
                _react2['default'].createElement(                                                                      //
                  'a',                                                                                                 //
                  { href: FlowRouter.path("mosqueLogin") },                                                            //
                  'Login'                                                                                              //
                )                                                                                                      //
              ),                                                                                                       //
              _react2['default'].createElement(                                                                        //
                'li',                                                                                                  //
                null,                                                                                                  //
                _react2['default'].createElement(                                                                      //
                  'a',                                                                                                 //
                  { href: FlowRouter.path("mosqueRegister") },                                                         //
                  'Register'                                                                                           //
                )                                                                                                      //
              )                                                                                                        //
            )                                                                                                          //
          )                                                                                                            //
        )                                                                                                              //
      );                                                                                                               //
    }                                                                                                                  //
                                                                                                                       //
    return render;                                                                                                     //
  }()                                                                                                                  //
});                                                                                                                    //
                                                                                                                       //
exports['default'] = MosqueNav;                                                                                        //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"Nav.jsx":["react",function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/layouts/Navigation/Nav.jsx                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.__esModule = true;                                                                                             //
                                                                                                                       //
var _react = require('react');                                                                                         // 1
                                                                                                                       //
var _react2 = _interopRequireDefault(_react);                                                                          //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                      //
                                                                                                                       //
var Nav = _react2['default'].createClass({                                                                             // 3
  displayName: 'Nav',                                                                                                  //
                                                                                                                       //
  componentDidMount: function () {                                                                                     // 4
    function componentDidMount() {                                                                                     // 4
      $('.button-collapse').sideNav({                                                                                  // 5
        menuWidth: 240, // Default is 240                                                                              // 6
        edge: 'left', // Choose the horizontal origin                                                                  // 7
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor                                 // 8
      });                                                                                                              // 5
    }                                                                                                                  //
                                                                                                                       //
    return componentDidMount;                                                                                          //
  }(),                                                                                                                 //
  render: function () {                                                                                                // 11
    function render() {                                                                                                //
      return _react2['default'].createElement(                                                                         // 12
        'nav',                                                                                                         //
        { className: 'blue darken-2' },                                                                                //
        _react2['default'].createElement(                                                                              //
          'div',                                                                                                       //
          { className: 'container' },                                                                                  //
          _react2['default'].createElement(                                                                            //
            'div',                                                                                                     //
            { className: 'nav-wrapper gradient-navbar' },                                                              //
            _react2['default'].createElement(                                                                          //
              'a',                                                                                                     //
              { href: FlowRouter.path("index"), className: 'brand-logo' },                                             //
              'GoMosque Events'                                                                                        //
            ),                                                                                                         //
            _react2['default'].createElement(                                                                          //
              'a',                                                                                                     //
              { href: '#', 'data-activates': 'mobile-demo', className: 'button-collapse' },                            //
              _react2['default'].createElement(                                                                        //
                'i',                                                                                                   //
                { className: 'material-icons' },                                                                       //
                'menu'                                                                                                 //
              )                                                                                                        //
            ),                                                                                                         //
            _react2['default'].createElement(                                                                          //
              'ul',                                                                                                    //
              { className: 'right hide-on-med-and-down' },                                                             //
              _react2['default'].createElement(                                                                        //
                'li',                                                                                                  //
                null,                                                                                                  //
                _react2['default'].createElement(                                                                      //
                  'a',                                                                                                 //
                  { href: FlowRouter.path("login") },                                                                  //
                  'Login'                                                                                              //
                )                                                                                                      //
              ),                                                                                                       //
              _react2['default'].createElement(                                                                        //
                'li',                                                                                                  //
                null,                                                                                                  //
                _react2['default'].createElement(                                                                      //
                  'a',                                                                                                 //
                  { href: FlowRouter.path("register") },                                                               //
                  'Register'                                                                                           //
                )                                                                                                      //
              )                                                                                                        //
            ),                                                                                                         //
            _react2['default'].createElement(                                                                          //
              'ul',                                                                                                    //
              { className: 'side-nav', id: 'mobile-demo' },                                                            //
              _react2['default'].createElement(                                                                        //
                'li',                                                                                                  //
                null,                                                                                                  //
                _react2['default'].createElement(                                                                      //
                  'a',                                                                                                 //
                  { href: FlowRouter.path("login") },                                                                  //
                  'Login'                                                                                              //
                )                                                                                                      //
              ),                                                                                                       //
              _react2['default'].createElement(                                                                        //
                'li',                                                                                                  //
                null,                                                                                                  //
                _react2['default'].createElement(                                                                      //
                  'a',                                                                                                 //
                  { href: FlowRouter.path("register") },                                                               //
                  'Register'                                                                                           //
                )                                                                                                      //
              )                                                                                                        //
            )                                                                                                          //
          )                                                                                                            //
        )                                                                                                              //
      );                                                                                                               //
    }                                                                                                                  //
                                                                                                                       //
    return render;                                                                                                     //
  }()                                                                                                                  //
});                                                                                                                    //
                                                                                                                       //
exports['default'] = Nav;                                                                                              //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"Layout.jsx":["react","./Navigation/Nav.jsx",function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/layouts/Layout.jsx                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.__esModule = true;                                                                                             //
                                                                                                                       //
var _react = require('react');                                                                                         // 1
                                                                                                                       //
var _react2 = _interopRequireDefault(_react);                                                                          //
                                                                                                                       //
var _Nav = require('./Navigation/Nav.jsx');                                                                            // 2
                                                                                                                       //
var _Nav2 = _interopRequireDefault(_Nav);                                                                              //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                      //
                                                                                                                       //
var Layout = function Layout(_ref) {                                                                                   // 4
  var content = _ref.content;                                                                                          //
  return _react2['default'].createElement(                                                                             //
    'div',                                                                                                             //
    { className: 'blue lighten-5 fullHeight' },                                                                        //
    _react2['default'].createElement(_Nav2['default'], null),                                                          //
    _react2['default'].createElement(                                                                                  //
      'div',                                                                                                           //
      { className: 'container bottomGap' },                                                                            //
      content()                                                                                                        //
    )                                                                                                                  //
  );                                                                                                                   //
};                                                                                                                     //
                                                                                                                       //
exports['default'] = Layout;                                                                                           //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"MainLayout.jsx":["react","./Navigation/MainNav.jsx",function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/layouts/MainLayout.jsx                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.__esModule = true;                                                                                             //
                                                                                                                       //
var _react = require('react');                                                                                         // 1
                                                                                                                       //
var _react2 = _interopRequireDefault(_react);                                                                          //
                                                                                                                       //
var _MainNav = require('./Navigation/MainNav.jsx');                                                                    // 2
                                                                                                                       //
var _MainNav2 = _interopRequireDefault(_MainNav);                                                                      //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                      //
                                                                                                                       //
var MainLayout = function MainLayout(_ref) {                                                                           // 4
  var content = _ref.content;                                                                                          //
  return _react2['default'].createElement(                                                                             //
    'div',                                                                                                             //
    { className: 'main-wrapper blue lighten-5 fullHeight' },                                                           //
    _react2['default'].createElement(_MainNav2['default'], null),                                                      //
    _react2['default'].createElement(                                                                                  //
      'div',                                                                                                           //
      { className: 'container' },                                                                                      //
      content()                                                                                                        //
    )                                                                                                                  //
  );                                                                                                                   //
};                                                                                                                     //
                                                                                                                       //
exports['default'] = MainLayout;                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"MosqueLayout.jsx":["react","./Navigation/MosqueNav.jsx",function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/layouts/MosqueLayout.jsx                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.__esModule = true;                                                                                             //
                                                                                                                       //
var _react = require('react');                                                                                         // 1
                                                                                                                       //
var _react2 = _interopRequireDefault(_react);                                                                          //
                                                                                                                       //
var _MosqueNav = require('./Navigation/MosqueNav.jsx');                                                                // 2
                                                                                                                       //
var _MosqueNav2 = _interopRequireDefault(_MosqueNav);                                                                  //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                      //
                                                                                                                       //
var MosqueLayout = function MosqueLayout(_ref) {                                                                       // 4
  var content = _ref.content;                                                                                          //
  return _react2['default'].createElement(                                                                             //
    'div',                                                                                                             //
    { className: 'green lighten-5 fullHeight' },                                                                       //
    _react2['default'].createElement(_MosqueNav2['default'], null),                                                    //
    _react2['default'].createElement(                                                                                  //
      'div',                                                                                                           //
      { className: 'container' },                                                                                      //
      content()                                                                                                        //
    )                                                                                                                  //
  );                                                                                                                   //
};                                                                                                                     //
                                                                                                                       //
exports['default'] = MosqueLayout;                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"MosqueMainLayout.jsx":["react","./Navigation/MosqueMainNav.jsx",function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/layouts/MosqueMainLayout.jsx                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.__esModule = true;                                                                                             //
                                                                                                                       //
var _react = require('react');                                                                                         // 1
                                                                                                                       //
var _react2 = _interopRequireDefault(_react);                                                                          //
                                                                                                                       //
var _MosqueMainNav = require('./Navigation/MosqueMainNav.jsx');                                                        // 2
                                                                                                                       //
var _MosqueMainNav2 = _interopRequireDefault(_MosqueMainNav);                                                          //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                      //
                                                                                                                       //
var MainLayout = function MainLayout(_ref) {                                                                           // 4
  var content = _ref.content;                                                                                          //
  return _react2['default'].createElement(                                                                             //
    'div',                                                                                                             //
    { className: 'green lighten-5 fullHeight' },                                                                       //
    _react2['default'].createElement(_MosqueMainNav2['default'], null),                                                //
    _react2['default'].createElement(                                                                                  //
      'div',                                                                                                           //
      { className: 'container' },                                                                                      //
      content()                                                                                                        //
    )                                                                                                                  //
  );                                                                                                                   //
};                                                                                                                     //
                                                                                                                       //
exports['default'] = MainLayout;                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"Dashboard":{"SingleEvent.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/Dashboard/SingleEvent.jsx                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.__esModule = true;                                                                                             //
                                                                                                                       //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                                //
                                                                                                                       //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                       //
                                                                                                                       //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                          //
                                                                                                                       //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                 //
                                                                                                                       //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                            //
                                                                                                                       //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                   //
                                                                                                                       //
var _react = require("react");                                                                                         // 1
                                                                                                                       //
var _react2 = _interopRequireDefault(_react);                                                                          //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                      //
                                                                                                                       //
var SingleEvent = function (_Component) {                                                                              //
  (0, _inherits3["default"])(SingleEvent, _Component);                                                                 //
                                                                                                                       //
  function SingleEvent() {                                                                                             //
    (0, _classCallCheck3["default"])(this, SingleEvent);                                                               //
    return (0, _possibleConstructorReturn3["default"])(this, _Component.apply(this, arguments));                       //
  }                                                                                                                    //
                                                                                                                       //
  SingleEvent.prototype.render = function () {                                                                         //
    function render() {                                                                                                //
      var singleEvent = this.props.singleEvent;                                                                        // 5
                                                                                                                       //
      needParticipants = singleEvent.needParticipants ? _react2["default"].createElement(                              // 7
        "span",                                                                                                        //
        { className: "lessEmphasis" },                                                                                 //
        _react2["default"].createElement(                                                                              //
          "i",                                                                                                         //
          { className: "material-icons iconAlign" },                                                                   //
          "perm_identity"                                                                                              //
        ),                                                                                                             //
        " ",                                                                                                           //
        _react2["default"].createElement(                                                                              //
          "span",                                                                                                      //
          null,                                                                                                        //
          " Participants Needed "                                                                                      //
        ),                                                                                                             //
        " "                                                                                                            //
      ) : _react2["default"].createElement("span", null);                                                              //
      needVolunteers = singleEvent.needVolunteers ? _react2["default"].createElement(                                  // 8
        "span",                                                                                                        //
        { className: "lessEmphasis" },                                                                                 //
        _react2["default"].createElement(                                                                              //
          "i",                                                                                                         //
          { className: "material-icons iconAlign" },                                                                   //
          "assignment_ind"                                                                                             //
        ),                                                                                                             //
        " ",                                                                                                           //
        _react2["default"].createElement(                                                                              //
          "span",                                                                                                      //
          null,                                                                                                        //
          " Volunteers Needed "                                                                                        //
        ),                                                                                                             //
        "  "                                                                                                           //
      ) : _react2["default"].createElement("span", null);                                                              //
      gender = singleEvent.gender == "f" ? _react2["default"].createElement(                                           // 9
        "span",                                                                                                        //
        { className: "lessEmphasis female" },                                                                          //
        _react2["default"].createElement(                                                                              //
          "i",                                                                                                         //
          { className: "material-icons iconAlign" },                                                                   //
          "person"                                                                                                     //
        ),                                                                                                             //
        " ",                                                                                                           //
        _react2["default"].createElement(                                                                              //
          "span",                                                                                                      //
          { className: "" },                                                                                           //
          " Female Only"                                                                                               //
        ),                                                                                                             //
        " "                                                                                                            //
      ) : singleEvent.gender == "m" ? _react2["default"].createElement(                                                //
        "span",                                                                                                        //
        { className: "lessEmphasis male" },                                                                            //
        _react2["default"].createElement(                                                                              //
          "i",                                                                                                         //
          { className: "material-icons iconAlign" },                                                                   //
          "person"                                                                                                     //
        ),                                                                                                             //
        " ",                                                                                                           //
        _react2["default"].createElement(                                                                              //
          "span",                                                                                                      //
          { className: "" },                                                                                           //
          " Male Only "                                                                                                //
        ),                                                                                                             //
        " "                                                                                                            //
      ) : _react2["default"].createElement(                                                                            //
        "span",                                                                                                        //
        { className: "lessEmphasis" },                                                                                 //
        _react2["default"].createElement(                                                                              //
          "i",                                                                                                         //
          { className: "material-icons iconAlign" },                                                                   //
          "person"                                                                                                     //
        ),                                                                                                             //
        " ",                                                                                                           //
        _react2["default"].createElement(                                                                              //
          "span",                                                                                                      //
          { className: "" },                                                                                           //
          " Any Genders "                                                                                              //
        ),                                                                                                             //
        " "                                                                                                            //
      );                                                                                                               //
                                                                                                                       //
      return _react2["default"].createElement(                                                                         // 11
        "div",                                                                                                         //
        null,                                                                                                          //
        _react2["default"].createElement(                                                                              //
          "div",                                                                                                       //
          { className: "col s12 m6 " },                                                                                //
          _react2["default"].createElement(                                                                            //
            "div",                                                                                                     //
            { className: "card hoverable" },                                                                           //
            _react2["default"].createElement(                                                                          //
              "div",                                                                                                   //
              { className: "card-content black-text" },                                                                //
              _react2["default"].createElement(                                                                        //
                "span",                                                                                                //
                { className: "card-title truncate" },                                                                  //
                _react2["default"].createElement(                                                                      //
                  "strong",                                                                                            //
                  null,                                                                                                //
                  singleEvent.name                                                                                     //
                )                                                                                                      //
              ),                                                                                                       //
              _react2["default"].createElement(                                                                        //
                "p",                                                                                                   //
                null,                                                                                                  //
                singleEvent.theDate,                                                                                   //
                ", ",                                                                                                  //
                singleEvent.start,                                                                                     //
                " - ",                                                                                                 //
                singleEvent.end,                                                                                       //
                " @ ",                                                                                                 //
                singleEvent.mosqueName,                                                                                //
                " Mosque "                                                                                             //
              ),                                                                                                       //
              _react2["default"].createElement("br", null),                                                            //
              _react2["default"].createElement(                                                                        //
                "p",                                                                                                   //
                null,                                                                                                  //
                gender                                                                                                 //
              ),                                                                                                       //
              _react2["default"].createElement(                                                                        //
                "p",                                                                                                   //
                null,                                                                                                  //
                needParticipants,                                                                                      //
                "   ",                                                                                                 //
                needVolunteers                                                                                         //
              )                                                                                                        //
            ),                                                                                                         //
            _react2["default"].createElement(                                                                          //
              "div",                                                                                                   //
              { className: "card-action" },                                                                            //
              _react2["default"].createElement(                                                                        //
                "a",                                                                                                   //
                { href: "/eventDetails/" + singleEvent._id, className: "blue-text text-darken-2" },                    //
                "View Details"                                                                                         //
              )                                                                                                        //
            )                                                                                                          //
          )                                                                                                            //
        )                                                                                                              //
      );                                                                                                               //
    }                                                                                                                  //
                                                                                                                       //
    return render;                                                                                                     //
  }();                                                                                                                 //
                                                                                                                       //
  return SingleEvent;                                                                                                  //
}(_react.Component);                                                                                                   //
/*                                                                                                                     //
<div>                                                                                                                  //
    <div className="col s12 m6 ">                                                                                      //
      <div className="card hoverable">                                                                                 //
        <div className="card-content black-text">                                                                      //
          <span className="card-title truncate"><strong>{event.name}</strong></span>                                   //
          <p>{event.theDate}, {event.start} - {event.end} </p>                                                         //
          <br/>                                                                                                        //
          <p>{gender}</p>                                                                                              //
          <p>{needParticipants} &nbsp; {needVolunteers}</p>                                                            //
        </div>                                                                                                         //
        <div className="card-action">                                                                                  //
          <a href={`/MosqueEventDetails/${event._id}`} className="green-text text-lighten-2">View Details</a>          //
        </div>                                                                                                         //
      </div>                                                                                                           //
    </div>                                                                                                             //
</div>                                                                                                                 //
*/                                                                                                                     //
                                                                                                                       //
                                                                                                                       //
exports["default"] = SingleEvent;                                                                                      //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"EventsView":{"EventAll.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","./EventSingle.jsx",function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/EventsView/EventAll.jsx                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.__esModule = true;                                                                                             //
                                                                                                                       //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                                //
                                                                                                                       //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                       //
                                                                                                                       //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                          //
                                                                                                                       //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                 //
                                                                                                                       //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                            //
                                                                                                                       //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                   //
                                                                                                                       //
var _react = require('react');                                                                                         // 1
                                                                                                                       //
var _react2 = _interopRequireDefault(_react);                                                                          //
                                                                                                                       //
var _EventSingle = require('./EventSingle.jsx');                                                                       // 2
                                                                                                                       //
var _EventSingle2 = _interopRequireDefault(_EventSingle);                                                              //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                      //
                                                                                                                       //
var EventAll = function (_React$Component) {                                                                           //
  (0, _inherits3['default'])(EventAll, _React$Component);                                                              //
                                                                                                                       //
  function EventAll() {                                                                                                //
    (0, _classCallCheck3['default'])(this, EventAll);                                                                  //
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));                 //
  }                                                                                                                    //
                                                                                                                       //
  //filter                                                                                                             //
                                                                                                                       //
  EventAll.prototype.filter = function () {                                                                            //
    function filter(type) {}                                                                                           //
                                                                                                                       //
    return filter;                                                                                                     //
  }();                                                                                                                 //
                                                                                                                       //
  EventAll.prototype.componentDidMount = function () {                                                                 // 4
    function componentDidMount() {                                                                                     //
      document.title = "Mosque Events | Events";                                                                       // 10
    }                                                                                                                  //
                                                                                                                       //
    return componentDidMount;                                                                                          //
  }();                                                                                                                 //
                                                                                                                       //
  EventAll.prototype.render = function () {                                                                            // 4
    function render() {                                                                                                //
      events = this.props.events;                                                                                      // 14
      if (!events) return _react2['default'].createElement(                                                            // 15
        'span',                                                                                                        //
        null,                                                                                                          //
        ' loading '                                                                                                    //
      );                                                                                                               //
                                                                                                                       //
      return _react2['default'].createElement(                                                                         // 18
        'div',                                                                                                         //
        { className: 'row' },                                                                                          //
        events.map(function (event) {                                                                                  //
          return _react2['default'].createElement(_EventSingle2['default'], { key: event._id, event: event });         // 21
        })                                                                                                             //
      );                                                                                                               //
    }                                                                                                                  //
                                                                                                                       //
    return render;                                                                                                     //
  }();                                                                                                                 //
                                                                                                                       //
  return EventAll;                                                                                                     //
}(_react2['default'].Component);                                                                                       //
                                                                                                                       //
exports['default'] = EventAll;                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"EventSingle.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/EventsView/EventSingle.jsx                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.__esModule = true;                                                                                             //
                                                                                                                       //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                                //
                                                                                                                       //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                       //
                                                                                                                       //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                          //
                                                                                                                       //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                 //
                                                                                                                       //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                            //
                                                                                                                       //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                   //
                                                                                                                       //
var _react = require("react");                                                                                         // 1
                                                                                                                       //
var _react2 = _interopRequireDefault(_react);                                                                          //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                      //
                                                                                                                       //
var EventSingle = function (_React$Component) {                                                                        //
  (0, _inherits3["default"])(EventSingle, _React$Component);                                                           //
                                                                                                                       //
  function EventSingle() {                                                                                             //
    (0, _classCallCheck3["default"])(this, EventSingle);                                                               //
    return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));                 //
  }                                                                                                                    //
                                                                                                                       //
  EventSingle.prototype.componentDidMount = function () {                                                              //
    function componentDidMount() {                                                                                     //
      document.title = "Mosque Events | Events";                                                                       // 6
    }                                                                                                                  //
                                                                                                                       //
    return componentDidMount;                                                                                          //
  }();                                                                                                                 //
                                                                                                                       //
  EventSingle.prototype.render = function () {                                                                         // 3
    function render() {                                                                                                //
      event = this.props.event;                                                                                        // 10
                                                                                                                       //
      needParticipants = event.needParticipants ? _react2["default"].createElement(                                    // 12
        "span",                                                                                                        //
        { className: "lessEmphasis" },                                                                                 //
        _react2["default"].createElement(                                                                              //
          "i",                                                                                                         //
          { className: "material-icons iconAlign" },                                                                   //
          "perm_identity"                                                                                              //
        ),                                                                                                             //
        " ",                                                                                                           //
        _react2["default"].createElement(                                                                              //
          "span",                                                                                                      //
          null,                                                                                                        //
          " Participants Needed "                                                                                      //
        ),                                                                                                             //
        " "                                                                                                            //
      ) : _react2["default"].createElement("span", null);                                                              //
      needVolunteers = event.needVolunteers ? _react2["default"].createElement(                                        // 13
        "span",                                                                                                        //
        { className: "lessEmphasis" },                                                                                 //
        _react2["default"].createElement(                                                                              //
          "i",                                                                                                         //
          { className: "material-icons iconAlign" },                                                                   //
          "assignment_ind"                                                                                             //
        ),                                                                                                             //
        " ",                                                                                                           //
        _react2["default"].createElement(                                                                              //
          "span",                                                                                                      //
          null,                                                                                                        //
          " Volunteers Needed "                                                                                        //
        ),                                                                                                             //
        "  "                                                                                                           //
      ) : _react2["default"].createElement("span", null);                                                              //
      gender = event.gender == "f" ? _react2["default"].createElement(                                                 // 14
        "span",                                                                                                        //
        { className: "lessEmphasis female" },                                                                          //
        _react2["default"].createElement(                                                                              //
          "i",                                                                                                         //
          { className: "material-icons iconAlign" },                                                                   //
          "person"                                                                                                     //
        ),                                                                                                             //
        " ",                                                                                                           //
        _react2["default"].createElement(                                                                              //
          "span",                                                                                                      //
          { className: "" },                                                                                           //
          " Female Only"                                                                                               //
        ),                                                                                                             //
        " "                                                                                                            //
      ) : event.gender == "m" ? _react2["default"].createElement(                                                      //
        "span",                                                                                                        //
        { className: "lessEmphasis male" },                                                                            //
        _react2["default"].createElement(                                                                              //
          "i",                                                                                                         //
          { className: "material-icons iconAlign" },                                                                   //
          "person"                                                                                                     //
        ),                                                                                                             //
        " ",                                                                                                           //
        _react2["default"].createElement(                                                                              //
          "span",                                                                                                      //
          { className: "" },                                                                                           //
          " Male Only "                                                                                                //
        ),                                                                                                             //
        " "                                                                                                            //
      ) : _react2["default"].createElement(                                                                            //
        "span",                                                                                                        //
        { className: "lessEmphasis" },                                                                                 //
        _react2["default"].createElement(                                                                              //
          "i",                                                                                                         //
          { className: "material-icons iconAlign" },                                                                   //
          "person"                                                                                                     //
        ),                                                                                                             //
        " ",                                                                                                           //
        _react2["default"].createElement(                                                                              //
          "span",                                                                                                      //
          { className: "" },                                                                                           //
          " Any Genders "                                                                                              //
        ),                                                                                                             //
        " "                                                                                                            //
      );                                                                                                               //
                                                                                                                       //
      //console.log(event)                                                                                             //
                                                                                                                       //
      return _react2["default"].createElement(                                                                         // 9
        "div",                                                                                                         //
        null,                                                                                                          //
        _react2["default"].createElement(                                                                              //
          "div",                                                                                                       //
          { className: "col s12 m6 " },                                                                                //
          _react2["default"].createElement(                                                                            //
            "div",                                                                                                     //
            { className: "card hoverable" },                                                                           //
            _react2["default"].createElement(                                                                          //
              "div",                                                                                                   //
              { className: "card-content black-text" },                                                                //
              _react2["default"].createElement(                                                                        //
                "span",                                                                                                //
                { className: "card-title truncate" },                                                                  //
                _react2["default"].createElement(                                                                      //
                  "strong",                                                                                            //
                  null,                                                                                                //
                  event.name                                                                                           //
                )                                                                                                      //
              ),                                                                                                       //
              _react2["default"].createElement(                                                                        //
                "p",                                                                                                   //
                null,                                                                                                  //
                event.theDate,                                                                                         //
                ", ",                                                                                                  //
                event.start,                                                                                           //
                " - ",                                                                                                 //
                event.end,                                                                                             //
                _react2["default"].createElement(                                                                      //
                  "span",                                                                                              //
                  { className: "" },                                                                                   //
                  _react2["default"].createElement(                                                                    //
                    "span",                                                                                            //
                    null,                                                                                              //
                    " @ ",                                                                                             //
                    event.mosqueName,                                                                                  //
                    " Mosque"                                                                                          //
                  )                                                                                                    //
                ),                                                                                                     //
                _react2["default"].createElement("br", null),                                                          //
                _react2["default"].createElement("br", null)                                                           //
              ),                                                                                                       //
              _react2["default"].createElement(                                                                        //
                "p",                                                                                                   //
                null,                                                                                                  //
                gender                                                                                                 //
              ),                                                                                                       //
              _react2["default"].createElement(                                                                        //
                "p",                                                                                                   //
                null,                                                                                                  //
                needParticipants,                                                                                      //
                " ",                                                                                                   //
                needVolunteers                                                                                         //
              ),                                                                                                       //
              _react2["default"].createElement("p", null)                                                              //
            ),                                                                                                         //
            _react2["default"].createElement(                                                                          //
              "div",                                                                                                   //
              { className: "card-action" },                                                                            //
              _react2["default"].createElement(                                                                        //
                "a",                                                                                                   //
                { href: "/eventDetails/" + event._id, className: "blue-text text-darken-2" },                          //
                "View Details"                                                                                         //
              )                                                                                                        //
            )                                                                                                          //
          )                                                                                                            //
        )                                                                                                              //
      );                                                                                                               //
    }                                                                                                                  //
                                                                                                                       //
    return render;                                                                                                     //
  }();                                                                                                                 //
                                                                                                                       //
  return EventSingle;                                                                                                  //
}(_react2["default"].Component);                                                                                       //
                                                                                                                       //
exports["default"] = EventSingle;                                                                                      //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"MosqueDashboard":{"MosqueEventSingle.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/MosqueDashboard/MosqueEventSingle.jsx                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.__esModule = true;                                                                                             //
                                                                                                                       //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                                //
                                                                                                                       //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                       //
                                                                                                                       //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                          //
                                                                                                                       //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                 //
                                                                                                                       //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                            //
                                                                                                                       //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                   //
                                                                                                                       //
var _react = require("react");                                                                                         // 1
                                                                                                                       //
var _react2 = _interopRequireDefault(_react);                                                                          //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                      //
                                                                                                                       //
var MosqueEventSingle = function (_React$Component) {                                                                  //
  (0, _inherits3["default"])(MosqueEventSingle, _React$Component);                                                     //
                                                                                                                       //
  function MosqueEventSingle() {                                                                                       //
    (0, _classCallCheck3["default"])(this, MosqueEventSingle);                                                         //
    return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));                 //
  }                                                                                                                    //
                                                                                                                       //
  MosqueEventSingle.prototype.componentDidMount = function () {                                                        //
    function componentDidMount() {                                                                                     //
      document.title = "Mosque Events | MosqueDashboard";                                                              // 6
    }                                                                                                                  //
                                                                                                                       //
    return componentDidMount;                                                                                          //
  }();                                                                                                                 //
                                                                                                                       //
  MosqueEventSingle.prototype.render = function () {                                                                   // 3
    function render() {                                                                                                //
      event = this.props.event;                                                                                        // 11
                                                                                                                       //
      needParticipants = event.needParticipants ? _react2["default"].createElement(                                    // 13
        "span",                                                                                                        //
        { className: "lessEmphasis" },                                                                                 //
        _react2["default"].createElement(                                                                              //
          "i",                                                                                                         //
          { className: "material-icons iconAlign" },                                                                   //
          "perm_identity"                                                                                              //
        ),                                                                                                             //
        " ",                                                                                                           //
        _react2["default"].createElement(                                                                              //
          "span",                                                                                                      //
          null,                                                                                                        //
          " Participants Needed "                                                                                      //
        ),                                                                                                             //
        " "                                                                                                            //
      ) : _react2["default"].createElement("span", null);                                                              //
      needVolunteers = event.needVolunteers ? _react2["default"].createElement(                                        // 14
        "span",                                                                                                        //
        { className: "lessEmphasis" },                                                                                 //
        _react2["default"].createElement(                                                                              //
          "i",                                                                                                         //
          { className: "material-icons iconAlign" },                                                                   //
          "assignment_ind"                                                                                             //
        ),                                                                                                             //
        " ",                                                                                                           //
        _react2["default"].createElement(                                                                              //
          "span",                                                                                                      //
          null,                                                                                                        //
          " Volunteers Needed "                                                                                        //
        ),                                                                                                             //
        "  "                                                                                                           //
      ) : _react2["default"].createElement("span", null);                                                              //
      gender = event.gender == "f" ? _react2["default"].createElement(                                                 // 15
        "span",                                                                                                        //
        { className: "lessEmphasis female" },                                                                          //
        _react2["default"].createElement(                                                                              //
          "i",                                                                                                         //
          { className: "material-icons iconAlign" },                                                                   //
          "person"                                                                                                     //
        ),                                                                                                             //
        " ",                                                                                                           //
        _react2["default"].createElement(                                                                              //
          "span",                                                                                                      //
          { className: "" },                                                                                           //
          " Female Only"                                                                                               //
        ),                                                                                                             //
        " "                                                                                                            //
      ) : event.gender == "m" ? _react2["default"].createElement(                                                      //
        "span",                                                                                                        //
        { className: "lessEmphasis male" },                                                                            //
        _react2["default"].createElement(                                                                              //
          "i",                                                                                                         //
          { className: "material-icons iconAlign" },                                                                   //
          "person"                                                                                                     //
        ),                                                                                                             //
        " ",                                                                                                           //
        _react2["default"].createElement(                                                                              //
          "span",                                                                                                      //
          { className: "" },                                                                                           //
          " Male Only "                                                                                                //
        ),                                                                                                             //
        " "                                                                                                            //
      ) : _react2["default"].createElement(                                                                            //
        "span",                                                                                                        //
        { className: "lessEmphasis" },                                                                                 //
        _react2["default"].createElement(                                                                              //
          "i",                                                                                                         //
          { className: "material-icons iconAlign" },                                                                   //
          "person"                                                                                                     //
        ),                                                                                                             //
        " ",                                                                                                           //
        _react2["default"].createElement(                                                                              //
          "span",                                                                                                      //
          { className: "" },                                                                                           //
          " Any Genders "                                                                                              //
        ),                                                                                                             //
        " "                                                                                                            //
      );                                                                                                               //
                                                                                                                       //
      console.log(event);                                                                                              // 17
                                                                                                                       //
      return _react2["default"].createElement(                                                                         // 19
        "div",                                                                                                         //
        null,                                                                                                          //
        _react2["default"].createElement(                                                                              //
          "div",                                                                                                       //
          { className: "col s12 m6 " },                                                                                //
          _react2["default"].createElement(                                                                            //
            "div",                                                                                                     //
            { className: "card hoverable" },                                                                           //
            _react2["default"].createElement(                                                                          //
              "div",                                                                                                   //
              { className: "card-content black-text" },                                                                //
              _react2["default"].createElement(                                                                        //
                "span",                                                                                                //
                { className: "card-title truncate" },                                                                  //
                _react2["default"].createElement(                                                                      //
                  "strong",                                                                                            //
                  null,                                                                                                //
                  event.name                                                                                           //
                )                                                                                                      //
              ),                                                                                                       //
              _react2["default"].createElement(                                                                        //
                "p",                                                                                                   //
                null,                                                                                                  //
                event.theDate,                                                                                         //
                ", ",                                                                                                  //
                event.start,                                                                                           //
                " - ",                                                                                                 //
                event.end,                                                                                             //
                " "                                                                                                    //
              ),                                                                                                       //
              _react2["default"].createElement("br", null),                                                            //
              _react2["default"].createElement(                                                                        //
                "p",                                                                                                   //
                null,                                                                                                  //
                gender                                                                                                 //
              ),                                                                                                       //
              _react2["default"].createElement(                                                                        //
                "p",                                                                                                   //
                null,                                                                                                  //
                needParticipants,                                                                                      //
                " ",                                                                                                   //
                needVolunteers                                                                                         //
              )                                                                                                        //
            ),                                                                                                         //
            _react2["default"].createElement(                                                                          //
              "div",                                                                                                   //
              { className: "card-action" },                                                                            //
              _react2["default"].createElement(                                                                        //
                "a",                                                                                                   //
                { href: "/MosqueEventDetails/" + event._id, className: "green-text text-lighten-2" },                  //
                "View Details"                                                                                         //
              )                                                                                                        //
            )                                                                                                          //
          )                                                                                                            //
        )                                                                                                              //
      );                                                                                                               //
    }                                                                                                                  //
                                                                                                                       //
    return render;                                                                                                     //
  }();                                                                                                                 //
                                                                                                                       //
  return MosqueEventSingle;                                                                                            //
}(_react2["default"].Component);                                                                                       //
                                                                                                                       //
exports["default"] = MosqueEventSingle;                                                                                //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"MosqueEventsAll.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","./MosqueEventSingle.jsx",function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/MosqueDashboard/MosqueEventsAll.jsx                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.__esModule = true;                                                                                             //
                                                                                                                       //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                                //
                                                                                                                       //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                       //
                                                                                                                       //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                          //
                                                                                                                       //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                 //
                                                                                                                       //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                            //
                                                                                                                       //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                   //
                                                                                                                       //
var _react = require('react');                                                                                         // 1
                                                                                                                       //
var _react2 = _interopRequireDefault(_react);                                                                          //
                                                                                                                       //
var _MosqueEventSingle = require('./MosqueEventSingle.jsx');                                                           // 2
                                                                                                                       //
var _MosqueEventSingle2 = _interopRequireDefault(_MosqueEventSingle);                                                  //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                      //
                                                                                                                       //
var MosqueEventsAll = function (_React$Component) {                                                                    //
  (0, _inherits3['default'])(MosqueEventsAll, _React$Component);                                                       //
                                                                                                                       //
  function MosqueEventsAll() {                                                                                         //
    (0, _classCallCheck3['default'])(this, MosqueEventsAll);                                                           //
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));                 //
  }                                                                                                                    //
                                                                                                                       //
  MosqueEventsAll.prototype.componentDidMount = function () {                                                          //
    function componentDidMount() {                                                                                     //
      document.title = "Mosque Events | MosqueDashboard";                                                              // 7
    }                                                                                                                  //
                                                                                                                       //
    return componentDidMount;                                                                                          //
  }();                                                                                                                 //
                                                                                                                       //
  MosqueEventsAll.prototype.render = function () {                                                                     // 4
    function render() {                                                                                                //
      events = this.props.events;                                                                                      // 12
      if (!events) return _react2['default'].createElement(                                                            // 13
        'span',                                                                                                        //
        null,                                                                                                          //
        ' loading '                                                                                                    //
      );                                                                                                               //
                                                                                                                       //
      return _react2['default'].createElement(                                                                         // 16
        'div',                                                                                                         //
        { className: 'row' },                                                                                          //
        events.map(function (event) {                                                                                  //
          return _react2['default'].createElement(_MosqueEventSingle2['default'], { key: event._id, event: event });   // 19
        })                                                                                                             //
      );                                                                                                               //
    }                                                                                                                  //
                                                                                                                       //
    return render;                                                                                                     //
  }();                                                                                                                 //
                                                                                                                       //
  return MosqueEventsAll;                                                                                              //
}(_react2['default'].Component);                                                                                       //
                                                                                                                       //
exports['default'] = MosqueEventsAll;                                                                                  //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"MosqueEventDetails":{"Participants.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","./SingleParticipant.jsx","meteor/ultimatejs:tracker-react",function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/MosqueEventDetails/Participants.jsx                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.__esModule = true;                                                                                             //
                                                                                                                       //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                                //
                                                                                                                       //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                       //
                                                                                                                       //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                          //
                                                                                                                       //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                 //
                                                                                                                       //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                            //
                                                                                                                       //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                   //
                                                                                                                       //
var _react = require('react');                                                                                         // 1
                                                                                                                       //
var _react2 = _interopRequireDefault(_react);                                                                          //
                                                                                                                       //
var _SingleParticipant = require('./SingleParticipant.jsx');                                                           // 2
                                                                                                                       //
var _SingleParticipant2 = _interopRequireDefault(_SingleParticipant);                                                  //
                                                                                                                       //
var _ultimatejsTrackerReact = require('meteor/ultimatejs:tracker-react');                                              // 4
                                                                                                                       //
var _ultimatejsTrackerReact2 = _interopRequireDefault(_ultimatejsTrackerReact);                                        //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                      //
                                                                                                                       //
var Participants = function (_TrackerReact) {                                                                          //
  (0, _inherits3['default'])(Participants, _TrackerReact);                                                             //
                                                                                                                       //
  function Participants() {                                                                                            // 7
    (0, _classCallCheck3['default'])(this, Participants);                                                              //
                                                                                                                       //
    var _this = (0, _possibleConstructorReturn3['default'])(this, _TrackerReact.call(this));                           //
                                                                                                                       //
    _this.state = {                                                                                                    // 10
      subscription: {                                                                                                  // 11
        users: Meteor.subscribe('allUsers')                                                                            // 12
                                                                                                                       //
      }                                                                                                                //
    };                                                                                                                 //
    return _this;                                                                                                      //
  }                                                                                                                    //
                                                                                                                       //
  // participantDetails(){                                                                                             //
  //   participantsId = this.props.participantsId                                                                      //
  //   participantsDetails =[]                                                                                         //
  //   {participantsId.map((participantId)=>{                                                                          //
  //                                                                                                                   //
  //      participantsDetails.push(Meteor.users.find({_id: participantId}).fetch());                                   //
  //                                                                                                                   //
  //   } )}                                                                                                            //
  //                                                                                                                   //
  //                                                                                                                   //
  //   return participantsDetails;                                                                                     //
  // }                                                                                                                 //
                                                                                                                       //
  Participants.prototype.render = function () {                                                                        // 6
    function render() {                                                                                                //
      var _this2 = this;                                                                                               //
                                                                                                                       //
      participants = this.props.participants;                                                                          // 32
      if (!participants) return _react2['default'].createElement(                                                      // 33
        'span',                                                                                                        //
        null,                                                                                                          //
        ' loading '                                                                                                    //
      );                                                                                                               //
                                                                                                                       //
      //console.log("fe", participants)                                                                                //
                                                                                                                       //
      var stringOfMail = 'mailto:';                                                                                    // 31
      return _react2['default'].createElement(                                                                         // 39
        'div',                                                                                                         //
        { className: 'row rightAbit' },                                                                                //
        participants.map(function (singleEmail) {                                                                      //
          console.log(singleEmail);                                                                                    // 43
          stringOfMail += singleEmail + ',';                                                                           // 44
          return _react2['default'].createElement(_SingleParticipant2['default'], { email: singleEmail, key: singleEmail, eventName: _this2.props.eventName });
        }),                                                                                                            //
        _react2['default'].createElement(                                                                              //
          'a',                                                                                                         //
          { href: stringOfMail, className: 'btn rightAbitSgt' },                                                       //
          'Mail All'                                                                                                   //
        )                                                                                                              //
      );                                                                                                               //
    }                                                                                                                  //
                                                                                                                       //
    return render;                                                                                                     //
  }();                                                                                                                 //
                                                                                                                       //
  return Participants;                                                                                                 //
}((0, _ultimatejsTrackerReact2['default'])(_react.Component));                                                         //
                                                                                                                       //
exports['default'] = Participants;                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"SingleParticipant.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/MosqueEventDetails/SingleParticipant.jsx                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.__esModule = true;                                                                                             //
                                                                                                                       //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                                //
                                                                                                                       //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                       //
                                                                                                                       //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                          //
                                                                                                                       //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                 //
                                                                                                                       //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                            //
                                                                                                                       //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                   //
                                                                                                                       //
var _react = require("react");                                                                                         // 1
                                                                                                                       //
var _react2 = _interopRequireDefault(_react);                                                                          //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                      //
                                                                                                                       //
var SingleParticipant = function (_Component) {                                                                        //
  (0, _inherits3["default"])(SingleParticipant, _Component);                                                           //
                                                                                                                       //
  function SingleParticipant() {                                                                                       //
    (0, _classCallCheck3["default"])(this, SingleParticipant);                                                         //
    return (0, _possibleConstructorReturn3["default"])(this, _Component.apply(this, arguments));                       //
  }                                                                                                                    //
                                                                                                                       //
  SingleParticipant.prototype.render = function () {                                                                   //
    function render() {                                                                                                //
      //var stringOfMail = "";                                                                                         //
                                                                                                                       //
      return _react2["default"].createElement(                                                                         // 7
        "div",                                                                                                         //
        { className: "row" },                                                                                          //
        _react2["default"].createElement(                                                                              //
          "a",                                                                                                         //
          { href: "mailto:" + this.props.email + "?Subject=" + this.props.eventName, className: "rightAbit" },         //
          this.props.email                                                                                             //
        )                                                                                                              //
      );                                                                                                               //
    }                                                                                                                  //
                                                                                                                       //
    return render;                                                                                                     //
  }();                                                                                                                 //
                                                                                                                       //
  return SingleParticipant;                                                                                            //
}(_react.Component);                                                                                                   //
                                                                                                                       //
exports["default"] = SingleParticipant;                                                                                //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"SingleVolunteers.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/MosqueEventDetails/SingleVolunteers.jsx                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.__esModule = true;                                                                                             //
                                                                                                                       //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                                //
                                                                                                                       //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                       //
                                                                                                                       //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                          //
                                                                                                                       //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                 //
                                                                                                                       //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                            //
                                                                                                                       //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                   //
                                                                                                                       //
var _react = require("react");                                                                                         // 1
                                                                                                                       //
var _react2 = _interopRequireDefault(_react);                                                                          //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                      //
                                                                                                                       //
var SingleVolunteers = function (_Component) {                                                                         //
  (0, _inherits3["default"])(SingleVolunteers, _Component);                                                            //
                                                                                                                       //
  function SingleVolunteers() {                                                                                        //
    (0, _classCallCheck3["default"])(this, SingleVolunteers);                                                          //
    return (0, _possibleConstructorReturn3["default"])(this, _Component.apply(this, arguments));                       //
  }                                                                                                                    //
                                                                                                                       //
  SingleVolunteers.prototype.render = function () {                                                                    //
    function render() {                                                                                                //
      //var stringOfMail = "";                                                                                         //
                                                                                                                       //
      return _react2["default"].createElement(                                                                         // 7
        "div",                                                                                                         //
        { className: "row" },                                                                                          //
        _react2["default"].createElement(                                                                              //
          "a",                                                                                                         //
          { href: "mailto:" + this.props.email + "?Subject=" + this.props.eventName, className: "rightAbit" },         //
          this.props.email                                                                                             //
        )                                                                                                              //
      );                                                                                                               //
    }                                                                                                                  //
                                                                                                                       //
    return render;                                                                                                     //
  }();                                                                                                                 //
                                                                                                                       //
  return SingleVolunteers;                                                                                             //
}(_react.Component);                                                                                                   //
                                                                                                                       //
exports["default"] = SingleVolunteers;                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"Volunteers.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","./SingleVolunteers.jsx","meteor/ultimatejs:tracker-react",function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/MosqueEventDetails/Volunteers.jsx                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.__esModule = true;                                                                                             //
                                                                                                                       //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                                //
                                                                                                                       //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                       //
                                                                                                                       //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                          //
                                                                                                                       //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                 //
                                                                                                                       //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                            //
                                                                                                                       //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                   //
                                                                                                                       //
var _react = require('react');                                                                                         // 1
                                                                                                                       //
var _react2 = _interopRequireDefault(_react);                                                                          //
                                                                                                                       //
var _SingleVolunteers = require('./SingleVolunteers.jsx');                                                             // 2
                                                                                                                       //
var _SingleVolunteers2 = _interopRequireDefault(_SingleVolunteers);                                                    //
                                                                                                                       //
var _ultimatejsTrackerReact = require('meteor/ultimatejs:tracker-react');                                              // 4
                                                                                                                       //
var _ultimatejsTrackerReact2 = _interopRequireDefault(_ultimatejsTrackerReact);                                        //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                      //
                                                                                                                       //
var Volunteers = function (_TrackerReact) {                                                                            //
  (0, _inherits3['default'])(Volunteers, _TrackerReact);                                                               //
                                                                                                                       //
  function Volunteers() {                                                                                              // 7
    (0, _classCallCheck3['default'])(this, Volunteers);                                                                //
                                                                                                                       //
    var _this = (0, _possibleConstructorReturn3['default'])(this, _TrackerReact.call(this));                           //
                                                                                                                       //
    _this.state = {                                                                                                    // 10
      subscription: {                                                                                                  // 11
        users: Meteor.subscribe('allUsers')                                                                            // 12
                                                                                                                       //
      }                                                                                                                //
    };                                                                                                                 //
    return _this;                                                                                                      //
  }                                                                                                                    //
                                                                                                                       //
  // volunteersDetails(){                                                                                              //
  //   participantsId = this.props.participantsId                                                                      //
  //   participantsDetails =[]                                                                                         //
  //   {participantsId.map((participantId)=>{                                                                          //
  //                                                                                                                   //
  //      participantsDetails.push(Meteor.users.find({_id: participantId}).fetch());                                   //
  //                                                                                                                   //
  //   } )}                                                                                                            //
  //                                                                                                                   //
  //                                                                                                                   //
  //   return participantsDetails;                                                                                     //
  // }                                                                                                                 //
                                                                                                                       //
  Volunteers.prototype.render = function () {                                                                          // 6
    function render() {                                                                                                //
      var _this2 = this;                                                                                               //
                                                                                                                       //
      volunteers = this.props.volunteers;                                                                              // 32
      if (!volunteers) return _react2['default'].createElement(                                                        // 33
        'span',                                                                                                        //
        null,                                                                                                          //
        ' loading '                                                                                                    //
      );                                                                                                               //
                                                                                                                       //
      //console.log("fe", volunteers)                                                                                  //
                                                                                                                       //
      var stringOfMail = 'mailto:';                                                                                    // 31
      return _react2['default'].createElement(                                                                         // 39
        'div',                                                                                                         //
        { className: 'row' },                                                                                          //
        volunteers.map(function (singleEmail) {                                                                        //
          console.log(singleEmail);                                                                                    // 42
          stringOfMail += singleEmail + ',';                                                                           // 43
          return _react2['default'].createElement(_SingleVolunteers2['default'], { email: singleEmail, key: singleEmail, eventName: _this2.props.eventName });
        }),                                                                                                            //
        _react2['default'].createElement(                                                                              //
          'a',                                                                                                         //
          { href: stringOfMail, className: 'btn rightAbitSgt' },                                                       //
          'Mail All'                                                                                                   //
        )                                                                                                              //
      );                                                                                                               //
    }                                                                                                                  //
                                                                                                                       //
    return render;                                                                                                     //
  }();                                                                                                                 //
                                                                                                                       //
  return Volunteers;                                                                                                   //
}((0, _ultimatejsTrackerReact2['default'])(_react.Component));                                                         //
                                                                                                                       //
exports['default'] = Volunteers;                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"pages":{"Dashboard.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/ultimatejs:tracker-react","../../api/events.js","../Dashboard/SingleEvent.jsx",function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/Dashboard.jsx                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.__esModule = true;                                                                                             //
                                                                                                                       //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                                //
                                                                                                                       //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                       //
                                                                                                                       //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                          //
                                                                                                                       //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                 //
                                                                                                                       //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                            //
                                                                                                                       //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                   //
                                                                                                                       //
var _react = require('react');                                                                                         // 1
                                                                                                                       //
var _react2 = _interopRequireDefault(_react);                                                                          //
                                                                                                                       //
var _ultimatejsTrackerReact = require('meteor/ultimatejs:tracker-react');                                              // 2
                                                                                                                       //
var _ultimatejsTrackerReact2 = _interopRequireDefault(_ultimatejsTrackerReact);                                        //
                                                                                                                       //
var _events2 = require('../../api/events.js');                                                                         // 4
                                                                                                                       //
var _SingleEvent = require('../Dashboard/SingleEvent.jsx');                                                            // 5
                                                                                                                       //
var _SingleEvent2 = _interopRequireDefault(_SingleEvent);                                                              //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                      //
                                                                                                                       //
var Dashboard = function (_TrackerReact) {                                                                             //
  (0, _inherits3['default'])(Dashboard, _TrackerReact);                                                                //
                                                                                                                       //
  function Dashboard() {                                                                                               // 9
    (0, _classCallCheck3['default'])(this, Dashboard);                                                                 //
                                                                                                                       //
    var _this = (0, _possibleConstructorReturn3['default'])(this, _TrackerReact.call(this));                           //
                                                                                                                       //
    _this.state = {                                                                                                    // 13
      subscription: {                                                                                                  // 14
        events: Meteor.subscribe("allEvents")                                                                          // 15
      },                                                                                                               //
      filter: "volunteer"                                                                                              // 17
    };                                                                                                                 //
    return _this;                                                                                                      //
  }                                                                                                                    //
                                                                                                                       //
  Dashboard.prototype.componentDidMount = function () {                                                                // 7
    function componentDidMount() {                                                                                     //
      document.title = "Mosque Events | Dashboard";                                                                    // 21
    }                                                                                                                  //
                                                                                                                       //
    return componentDidMount;                                                                                          //
  }();                                                                                                                 //
                                                                                                                       //
  Dashboard.prototype.handleFilter = function () {                                                                     // 7
    function handleFilter(e) {                                                                                         //
      e.preventDefault();                                                                                              // 25
                                                                                                                       //
      this.setState({ filter: e.target.elements.filterBy.value });                                                     // 27
    }                                                                                                                  //
                                                                                                                       //
    return handleFilter;                                                                                               //
  }();                                                                                                                 //
                                                                                                                       //
  Dashboard.prototype.events = function (_events) {                                                                    // 7
    function events() {                                                                                                //
      return _events.apply(this, arguments);                                                                           //
    }                                                                                                                  //
                                                                                                                       //
    events.toString = function () {                                                                                    //
      return _events.toString();                                                                                       //
    };                                                                                                                 //
                                                                                                                       //
    return events;                                                                                                     //
  }(function () {                                                                                                      //
    //events = Events.find({$or: [{participants: userEmail},{volunteers: userEmail}]}).fetch()                         //
                                                                                                                       //
    var filterState = this.state.filter;                                                                               // 32
                                                                                                                       //
    var userEmail = Meteor.user().emails[0].address;                                                                   // 34
                                                                                                                       //
    //		events = Events.find({mosqueId: Meteor.userId(), hasExpired: { $ne: true }}, {sort: {createdAt: -1}}).fetch();
                                                                                                                       //
    if (filterState === "history") events = _events2.Events.find({ $and: [{ $or: [{ participants: userEmail }, { volunteers: userEmail }] }, { hasExpired: true }] }, { sort: { createdAt: -1 } }).fetch();else if (filterState === "participant") events = _events2.Events.find({ participants: userEmail, hasExpired: { $ne: true } }, { sort: { createdAt: -1 } }).fetch();else if (filterState === "volunteer") events = _events2.Events.find({ volunteers: userEmail, hasExpired: { $ne: true } }, { sort: { createdAt: -1 } }).fetch();
                                                                                                                       //
    return events;                                                                                                     // 46
  });                                                                                                                  //
                                                                                                                       //
  Dashboard.prototype.getMyEvents = function () {                                                                      // 7
    function getMyEvents() {                                                                                           //
      //return an array of events that I participated/volunteered                                                      //
      //$or: [{email: 'some@mail.com'},{city: 'atlanta'}]                                                              //
      return _events2.Events.find({ $or: [{ participants: Meteor.user().emails[0].address }, { volunteers: Meteor.user().emails[0].address }] }).fetch();
    }                                                                                                                  //
                                                                                                                       //
    return getMyEvents;                                                                                                //
  }();                                                                                                                 //
                                                                                                                       //
  Dashboard.prototype.getMyEventsVolunteered = function () {                                                           // 7
    function getMyEventsVolunteered() {                                                                                //
      return _events2.Events.find({ volunteers: Meteor.user().emails[0].address }).fetch();                            // 55
    }                                                                                                                  //
                                                                                                                       //
    return getMyEventsVolunteered;                                                                                     //
  }();                                                                                                                 //
                                                                                                                       //
  Dashboard.prototype.render = function () {                                                                           // 7
    function render() {                                                                                                //
      myEvents = this.events();                                                                                        // 58
                                                                                                                       //
      if (!myEvents) return _react2['default'].createElement(                                                          // 60
        'p',                                                                                                           //
        null,                                                                                                          //
        'Loading...'                                                                                                   //
      );                                                                                                               //
                                                                                                                       //
      return _react2['default'].createElement(                                                                         // 63
        'div',                                                                                                         //
        { className: 'row topGap' },                                                                                   //
        _react2['default'].createElement(                                                                              //
          'form',                                                                                                      //
          { onSubmit: this.handleFilter.bind(this) },                                                                  //
          _react2['default'].createElement(                                                                            //
            'span',                                                                                                    //
            { className: 'header col s12 m6' },                                                                        //
            _react2['default'].createElement(                                                                          //
              'strong',                                                                                                //
              null,                                                                                                    //
              'My Events'                                                                                              //
            )                                                                                                          //
          ),                                                                                                           //
          _react2['default'].createElement(                                                                            //
            'form',                                                                                                    //
            { className: ' col s12 m6 topGapSmall', onSubmit: this.handleFilter.bind(this) },                          //
            _react2['default'].createElement(                                                                          //
              'div',                                                                                                   //
              { className: 'row' },                                                                                    //
              _react2['default'].createElement('input', { name: 'filterBy', type: 'radio', id: 'participant', value: 'participant', ref: 'filterBy' }),
              _react2['default'].createElement(                                                                        //
                'label',                                                                                               //
                { htmlFor: 'participant' },                                                                            //
                'Participating'                                                                                        //
              ),                                                                                                       //
              ' ',                                                                                                     //
              _react2['default'].createElement('input', { name: 'filterBy', type: 'radio', id: 'volunteer', value: 'volunteer', ref: 'filterBy', defaultChecked: true }),
              _react2['default'].createElement(                                                                        //
                'label',                                                                                               //
                { htmlFor: 'volunteer' },                                                                              //
                'Volunteering'                                                                                         //
              ),                                                                                                       //
              ' ',                                                                                                     //
              _react2['default'].createElement('input', { name: 'filterBy', type: 'radio', id: 'history', value: 'history', ref: 'filterBy' }),
              _react2['default'].createElement(                                                                        //
                'label',                                                                                               //
                { htmlFor: 'history' },                                                                                //
                'History'                                                                                              //
              ),                                                                                                       //
              _react2['default'].createElement(                                                                        //
                'button',                                                                                              //
                { type: 'submit', className: 'btn-flat blue-text ' },                                                  //
                _react2['default'].createElement(                                                                      //
                  'strong',                                                                                            //
                  null,                                                                                                //
                  'Filter'                                                                                             //
                )                                                                                                      //
              )                                                                                                        //
            )                                                                                                          //
          )                                                                                                            //
        ),                                                                                                             //
        myEvents.map(function (singleEvent) {                                                                          //
                                                                                                                       //
          return _react2['default'].createElement(_SingleEvent2['default'], { singleEvent: singleEvent, key: singleEvent._id });
        })                                                                                                             //
      );                                                                                                               //
    }                                                                                                                  //
                                                                                                                       //
    return render;                                                                                                     //
  }();                                                                                                                 //
                                                                                                                       //
  return Dashboard;                                                                                                    //
}((0, _ultimatejsTrackerReact2['default'])(_react.Component));                                                         //
                                                                                                                       //
exports['default'] = Dashboard;                                                                                        //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"EventDetails.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/ultimatejs:tracker-react","../../api/events.js",function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/EventDetails.jsx                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.__esModule = true;                                                                                             //
                                                                                                                       //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                                //
                                                                                                                       //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                       //
                                                                                                                       //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                          //
                                                                                                                       //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                 //
                                                                                                                       //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                            //
                                                                                                                       //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                   //
                                                                                                                       //
var _react = require('react');                                                                                         // 1
                                                                                                                       //
var _react2 = _interopRequireDefault(_react);                                                                          //
                                                                                                                       //
var _ultimatejsTrackerReact = require('meteor/ultimatejs:tracker-react');                                              // 2
                                                                                                                       //
var _ultimatejsTrackerReact2 = _interopRequireDefault(_ultimatejsTrackerReact);                                        //
                                                                                                                       //
var _events = require('../../api/events.js');                                                                          // 4
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                      //
                                                                                                                       //
var EventDetails = function (_TrackerReact) {                                                                          //
    (0, _inherits3['default'])(EventDetails, _TrackerReact);                                                           //
                                                                                                                       //
    EventDetails.prototype.componentDidMount = function () {                                                           //
        function componentDidMount() {                                                                                 //
            document.title = "GoMosque 2.0 | EventDetails";                                                            // 8
        }                                                                                                              //
                                                                                                                       //
        return componentDidMount;                                                                                      //
    }();                                                                                                               //
                                                                                                                       //
    function EventDetails(props) {                                                                                     // 11
        (0, _classCallCheck3['default'])(this, EventDetails);                                                          //
                                                                                                                       //
        var _this = (0, _possibleConstructorReturn3['default'])(this, _TrackerReact.call(this, props));                //
                                                                                                                       //
        hasParticipated = _this.hasParticipated();                                                                     // 14
        hasVolunteered = _this.hasVolunteered();                                                                       // 15
                                                                                                                       //
        _this.state = {                                                                                                // 17
            subscription: {                                                                                            // 18
                events: Meteor.subscribe("allEvents")                                                                  // 19
            },                                                                                                         //
            participate: hasParticipated,                                                                              // 21
            volunteer: hasVolunteered                                                                                  // 22
        };                                                                                                             //
        return _this;                                                                                                  //
    }                                                                                                                  //
                                                                                                                       //
    EventDetails.prototype.event = function () {                                                                       // 6
        function event() {                                                                                             //
            return _events.Events.findOne(this.props.eventId);                                                         // 27
        }                                                                                                              //
                                                                                                                       //
        return event;                                                                                                  //
    }();                                                                                                               //
                                                                                                                       //
    EventDetails.prototype.handleParticipate = function () {                                                           // 6
        function handleParticipate() {                                                                                 //
            event = this.event();                                                                                      // 31
                                                                                                                       //
            console.log(event._id);                                                                                    // 33
                                                                                                                       //
            if (this.state.participate) {                                                                              // 35
                                                                                                                       //
                Meteor.call('participateUser', event._id, function () {                                                // 37
                    console.log("SUCCESSS");                                                                           // 38
                    Materialize.toast('Participation RSVP Success!', 4000);                                            // 39
                });                                                                                                    //
                                                                                                                       //
                this.setState({ participate: false });                                                                 // 43
            } else {                                                                                                   //
                Meteor.call('cancelParticipation', event._id, function () {                                            // 46
                    console.log("SUCCESSS");                                                                           // 47
                    Materialize.toast('Participation Cancelled!', 4000);                                               // 48
                });                                                                                                    //
                this.setState({ participate: true });                                                                  // 51
            }                                                                                                          //
        }                                                                                                              //
                                                                                                                       //
        return handleParticipate;                                                                                      //
    }();                                                                                                               //
                                                                                                                       //
    EventDetails.prototype.handleVolunteer = function () {                                                             // 6
        function handleVolunteer() {                                                                                   //
            event = this.event();                                                                                      // 58
                                                                                                                       //
            console.log(event._id);                                                                                    // 60
                                                                                                                       //
            if (this.state.volunteer) {                                                                                // 62
                                                                                                                       //
                Meteor.call('volunteerUser', event._id, function () {                                                  // 64
                    console.log("SUCCESSS");                                                                           // 65
                    Materialize.toast('Volunteer RSVP Success!', 4000);                                                // 66
                });                                                                                                    //
                                                                                                                       //
                this.setState({ volunteer: false });                                                                   // 70
            } else {                                                                                                   //
                Meteor.call('cancelVolunteer', event._id, function () {                                                // 73
                    console.log("SUCCESSS");                                                                           // 74
                    Materialize.toast('Volunteer Cancelled!', 4000);                                                   // 75
                });                                                                                                    //
                this.setState({ volunteer: true });                                                                    // 78
            }                                                                                                          //
        }                                                                                                              //
                                                                                                                       //
        return handleVolunteer;                                                                                        //
    }();                                                                                                               //
                                                                                                                       //
    EventDetails.prototype.hasParticipated = function () {                                                             // 6
        function hasParticipated() {                                                                                   //
            event = this.event();                                                                                      // 84
            if (_events.Events.findOne({ _id: event._id, participants: Meteor.user().emails[0].address })) return false;else return true;
        }                                                                                                              //
                                                                                                                       //
        return hasParticipated;                                                                                        //
    }();                                                                                                               //
                                                                                                                       //
    EventDetails.prototype.hasVolunteered = function () {                                                              // 6
        function hasVolunteered() {                                                                                    //
            event = this.event();                                                                                      // 92
            if (_events.Events.findOne({ _id: event._id, volunteers: Meteor.user().emails[0].address })) return false;else return true;
        }                                                                                                              //
                                                                                                                       //
        return hasVolunteered;                                                                                         //
    }();                                                                                                               //
                                                                                                                       //
    EventDetails.prototype.render = function () {                                                                      // 6
        function render() {                                                                                            //
            event = this.event();                                                                                      // 100
                                                                                                                       //
            if (!event) return _react2['default'].createElement(                                                       // 102
                'span',                                                                                                //
                null,                                                                                                  //
                'loading'                                                                                              //
            );                                                                                                         //
                                                                                                                       //
            console.log(this.state.participate);                                                                       // 105
                                                                                                                       //
            participateBtn = this.state.participate ? _react2['default'].createElement(                                // 107
                'button',                                                                                              //
                { className: 'btn blue darken-2 fullButton', onClick: this.handleParticipate.bind(this) },             //
                _react2['default'].createElement(                                                                      //
                    'i',                                                                                               //
                    { className: 'material-icons left' },                                                              //
                    'perm_identity'                                                                                    //
                ),                                                                                                     //
                'Participate'                                                                                          //
            ) : _react2['default'].createElement(                                                                      //
                'button',                                                                                              //
                { className: 'btn grey darken-2 fullButton', onClick: this.handleParticipate.bind(this) },             //
                'Cancel Participation'                                                                                 //
            );                                                                                                         //
            volunteerBtn = this.state.volunteer ? _react2['default'].createElement(                                    // 111
                'button',                                                                                              //
                { className: 'btn blue darken-2 fullButton', onClick: this.handleVolunteer.bind(this) },               //
                _react2['default'].createElement(                                                                      //
                    'i',                                                                                               //
                    { className: 'material-icons left' },                                                              //
                    'assignment_indi'                                                                                  //
                ),                                                                                                     //
                'Volunteer'                                                                                            //
            ) : _react2['default'].createElement(                                                                      //
                'button',                                                                                              //
                { className: 'btn grey darken-2 fullButton', onClick: this.handleVolunteer.bind(this) },               //
                'Cancel Volunteer'                                                                                     //
            );                                                                                                         //
                                                                                                                       //
            needParticipants = event.needParticipants ? _react2['default'].createElement(                              // 116
                'span',                                                                                                //
                null,                                                                                                  //
                participateBtn                                                                                         //
            ) : _react2['default'].createElement('span', null);                                                        //
            needVolunteers = event.needVolunteers ? _react2['default'].createElement(                                  // 119
                'span',                                                                                                //
                null,                                                                                                  //
                volunteerBtn                                                                                           //
            ) : _react2['default'].createElement('span', null);                                                        //
                                                                                                                       //
            numberParticipants = !event.participants ? _react2['default'].createElement(                               // 123
                'span',                                                                                                //
                null,                                                                                                  //
                '0'                                                                                                    //
            ) : _react2['default'].createElement(                                                                      //
                'span',                                                                                                //
                null,                                                                                                  //
                event.participants.length                                                                              //
            );                                                                                                         //
            pLength = isNaN(event.numberParticipants) ? _react2['default'].createElement('span', null) : _react2['default'].createElement(
                'span',                                                                                                //
                null,                                                                                                  //
                '/ ',                                                                                                  //
                event.numberParticipants                                                                               //
            );                                                                                                         //
            if (needParticipants) {                                                                                    // 133
                                                                                                                       //
                if (!isNaN(event.numberParticipants)) {                                                                // 135
                    //event.numberParticipants - event.participants.length                                             //
                    vacant = event.numberParticipants;                                                                 // 137
                                                                                                                       //
                    if (event.participants) {                                                                          // 139
                        vacant -= event.participants.length;                                                           // 140
                    }                                                                                                  //
                }                                                                                                      //
                                                                                                                       //
                gender = event.gender == "f" ? _react2['default'].createElement(                                       // 144
                    'span',                                                                                            //
                    { className: 'lessEmphasis female' },                                                              //
                    _react2['default'].createElement(                                                                  //
                        'i',                                                                                           //
                        { className: 'material-icons iconAlign' },                                                     //
                        'person'                                                                                       //
                    ),                                                                                                 //
                    _react2['default'].createElement(                                                                  //
                        'span',                                                                                        //
                        { className: '' },                                                                             //
                        'Female Only'                                                                                  //
                    )                                                                                                  //
                ) : event.gender == "m" ? _react2['default'].createElement(                                            //
                    'span',                                                                                            //
                    { className: 'lessEmphasis male' },                                                                //
                    _react2['default'].createElement(                                                                  //
                        'i',                                                                                           //
                        { className: 'material-icons iconAlign' },                                                     //
                        'person'                                                                                       //
                    ),                                                                                                 //
                    _react2['default'].createElement(                                                                  //
                        'span',                                                                                        //
                        { className: '' },                                                                             //
                        'Male Only'                                                                                    //
                    )                                                                                                  //
                ) : _react2['default'].createElement(                                                                  //
                    'span',                                                                                            //
                    { className: 'lessEmphasis' },                                                                     //
                    _react2['default'].createElement(                                                                  //
                        'i',                                                                                           //
                        { className: 'material-icons iconAlign' },                                                     //
                        'person'                                                                                       //
                    ),                                                                                                 //
                    _react2['default'].createElement(                                                                  //
                        'span',                                                                                        //
                        { className: '' },                                                                             //
                        'Any Genders'                                                                                  //
                    )                                                                                                  //
                );                                                                                                     //
                                                                                                                       //
                vacantParticipant = isNaN(event.numberParticipants) ? _react2['default'].createElement(                // 164
                    'p',                                                                                               //
                    null,                                                                                              //
                    _react2['default'].createElement(                                                                  //
                        'strong',                                                                                      //
                        null,                                                                                          //
                        'No Participantion Limit'                                                                      //
                    )                                                                                                  //
                ) : _react2['default'].createElement(                                                                  //
                    'p',                                                                                               //
                    null,                                                                                              //
                    _react2['default'].createElement(                                                                  //
                        'strong',                                                                                      //
                        null,                                                                                          //
                        'Participation'                                                                                //
                    ),                                                                                                 //
                    ': ',                                                                                              //
                    vacant,                                                                                            //
                    'places left'                                                                                      //
                );                                                                                                     //
            } else {                                                                                                   //
                vacantParticipant = _react2['default'].createElement('span', null);                                    // 173
            }                                                                                                          //
                                                                                                                       //
            if (needVolunteers) {                                                                                      // 176
                                                                                                                       //
                if (!isNaN(event.numberVolunteers)) {                                                                  // 178
                    //event.numberParticipants - event.participants.length                                             //
                    vacant = event.numberVolunteers;                                                                   // 180
                                                                                                                       //
                    if (event.volunteers) {                                                                            // 182
                        vacant -= event.volunteers.length;                                                             // 183
                    }                                                                                                  //
                }                                                                                                      //
                                                                                                                       //
                gender = event.gender == "f" ? _react2['default'].createElement(                                       // 187
                    'span',                                                                                            //
                    { className: 'lessEmphasis female' },                                                              //
                    _react2['default'].createElement(                                                                  //
                        'i',                                                                                           //
                        { className: 'material-icons iconAlign' },                                                     //
                        'person'                                                                                       //
                    ),                                                                                                 //
                    _react2['default'].createElement(                                                                  //
                        'span',                                                                                        //
                        { className: '' },                                                                             //
                        'Female Only'                                                                                  //
                    )                                                                                                  //
                ) : event.gender == "m" ? _react2['default'].createElement(                                            //
                    'span',                                                                                            //
                    { className: 'lessEmphasis male' },                                                                //
                    _react2['default'].createElement(                                                                  //
                        'i',                                                                                           //
                        { className: 'material-icons iconAlign' },                                                     //
                        'person'                                                                                       //
                    ),                                                                                                 //
                    _react2['default'].createElement(                                                                  //
                        'span',                                                                                        //
                        { className: '' },                                                                             //
                        'Male Only'                                                                                    //
                    )                                                                                                  //
                ) : _react2['default'].createElement(                                                                  //
                    'span',                                                                                            //
                    { className: 'lessEmphasis' },                                                                     //
                    _react2['default'].createElement(                                                                  //
                        'i',                                                                                           //
                        { className: 'material-icons iconAlign' },                                                     //
                        'person'                                                                                       //
                    ),                                                                                                 //
                    _react2['default'].createElement(                                                                  //
                        'span',                                                                                        //
                        { className: '' },                                                                             //
                        'Any Genders'                                                                                  //
                    )                                                                                                  //
                );                                                                                                     //
                                                                                                                       //
                vacantVolunteer = isNaN(event.numberVolunteers) ? _react2['default'].createElement(                    // 207
                    'p',                                                                                               //
                    null,                                                                                              //
                    _react2['default'].createElement(                                                                  //
                        'strong',                                                                                      //
                        null,                                                                                          //
                        'No Volunteer Limit'                                                                           //
                    )                                                                                                  //
                ) : _react2['default'].createElement(                                                                  //
                    'p',                                                                                               //
                    null,                                                                                              //
                    _react2['default'].createElement(                                                                  //
                        'strong',                                                                                      //
                        null,                                                                                          //
                        'Volunteers'                                                                                   //
                    ),                                                                                                 //
                    ': ',                                                                                              //
                    vacant,                                                                                            //
                    'places left'                                                                                      //
                );                                                                                                     //
            } else {                                                                                                   //
                vacantVolunteer = _react2['default'].createElement('span', null);                                      // 216
            }                                                                                                          //
            return _react2['default'].createElement(                                                                   // 218
                'div',                                                                                                 //
                { className: 'topGap' },                                                                               //
                _react2['default'].createElement(                                                                      //
                    'div',                                                                                             //
                    { className: 'row' },                                                                              //
                    _react2['default'].createElement(                                                                  //
                        'div',                                                                                         //
                        { className: 'col s12' },                                                                      //
                        _react2['default'].createElement(                                                              //
                            'div',                                                                                     //
                            { className: 'card-panel hoverable' },                                                     //
                            _react2['default'].createElement(                                                          //
                                'h2',                                                                                  //
                                null,                                                                                  //
                                event.name                                                                             //
                            ),                                                                                         //
                            _react2['default'].createElement(                                                          //
                                'p',                                                                                   //
                                null,                                                                                  //
                                event.theDate,                                                                         //
                                ', ',                                                                                  //
                                event.start,                                                                           //
                                '- ',                                                                                  //
                                event.end                                                                              //
                            ),                                                                                         //
                            _react2['default'].createElement(                                                          //
                                'p',                                                                                   //
                                null,                                                                                  //
                                event.mosqueName,                                                                      //
                                'Mosque'                                                                               //
                            ),                                                                                         //
                            _react2['default'].createElement(                                                          //
                                'p',                                                                                   //
                                null,                                                                                  //
                                gender                                                                                 //
                            ),                                                                                         //
                            _react2['default'].createElement(                                                          //
                                'p',                                                                                   //
                                null,                                                                                  //
                                event.description                                                                      //
                            ),                                                                                         //
                            _react2['default'].createElement(                                                          //
                                'p',                                                                                   //
                                null,                                                                                  //
                                vacantParticipant                                                                      //
                            ),                                                                                         //
                            _react2['default'].createElement(                                                          //
                                'p',                                                                                   //
                                null,                                                                                  //
                                vacantVolunteer                                                                        //
                            ),                                                                                         //
                            _react2['default'].createElement(                                                          //
                                'p',                                                                                   //
                                { className: 'topGap' },                                                               //
                                needParticipants                                                                       //
                            ),                                                                                         //
                            _react2['default'].createElement(                                                          //
                                'p',                                                                                   //
                                null,                                                                                  //
                                needVolunteers                                                                         //
                            )                                                                                          //
                        )                                                                                              //
                    )                                                                                                  //
                )                                                                                                      //
            );                                                                                                         //
        }                                                                                                              //
                                                                                                                       //
        return render;                                                                                                 //
    }();                                                                                                               //
                                                                                                                       //
    return EventDetails;                                                                                               //
}((0, _ultimatejsTrackerReact2['default'])(_react2['default'].Component));                                             //
                                                                                                                       //
exports['default'] = EventDetails;                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"EventsView.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/ultimatejs:tracker-react","../../api/events.js","../EventsView/EventAll.jsx",function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/EventsView.jsx                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.__esModule = true;                                                                                             //
                                                                                                                       //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                                //
                                                                                                                       //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                       //
                                                                                                                       //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                          //
                                                                                                                       //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                 //
                                                                                                                       //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                            //
                                                                                                                       //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                   //
                                                                                                                       //
var _react = require('react');                                                                                         // 1
                                                                                                                       //
var _react2 = _interopRequireDefault(_react);                                                                          //
                                                                                                                       //
var _ultimatejsTrackerReact = require('meteor/ultimatejs:tracker-react');                                              // 2
                                                                                                                       //
var _ultimatejsTrackerReact2 = _interopRequireDefault(_ultimatejsTrackerReact);                                        //
                                                                                                                       //
var _events2 = require('../../api/events.js');                                                                         // 4
                                                                                                                       //
var _EventAll = require('../EventsView/EventAll.jsx');                                                                 // 6
                                                                                                                       //
var _EventAll2 = _interopRequireDefault(_EventAll);                                                                    //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                      //
                                                                                                                       //
var EventsView = function (_TrackerReact) {                                                                            //
    (0, _inherits3['default'])(EventsView, _TrackerReact);                                                             //
                                                                                                                       //
    EventsView.prototype.componentDidMount = function () {                                                             //
        function componentDidMount() {                                                                                 //
            document.title = "GoMosque 2.0 | Events";                                                                  // 11
        }                                                                                                              //
                                                                                                                       //
        return componentDidMount;                                                                                      //
    }();                                                                                                               //
                                                                                                                       //
    function EventsView() {                                                                                            // 13
        (0, _classCallCheck3['default'])(this, EventsView);                                                            //
                                                                                                                       //
        var _this = (0, _possibleConstructorReturn3['default'])(this, _TrackerReact.call(this));                       //
                                                                                                                       //
        _this.state = {                                                                                                // 16
            subscription: {                                                                                            // 17
                events: Meteor.subscribe("allEvents")                                                                  // 18
            },                                                                                                         //
            filter: "all"                                                                                              // 20
        };                                                                                                             //
        return _this;                                                                                                  //
    }                                                                                                                  //
                                                                                                                       //
    EventsView.prototype.handleFilter = function () {                                                                  // 8
        function handleFilter(e) {                                                                                     //
            e.preventDefault();                                                                                        // 25
                                                                                                                       //
            this.setState({ filter: e.target.elements.filterBy.value });                                               // 27
        }                                                                                                              //
                                                                                                                       //
        return handleFilter;                                                                                           //
    }();                                                                                                               //
                                                                                                                       //
    EventsView.prototype.events = function (_events) {                                                                 // 8
        function events() {                                                                                            //
            return _events.apply(this, arguments);                                                                     //
        }                                                                                                              //
                                                                                                                       //
        events.toString = function () {                                                                                //
            return _events.toString();                                                                                 //
        };                                                                                                             //
                                                                                                                       //
        return events;                                                                                                 //
    }(function () {                                                                                                    //
        var filterState = this.state.filter;                                                                           // 31
        opGender = Meteor.user().profile.gender === 'm' ? 'f' : 'm';                                                   // 32
        console.log(filterState);                                                                                      // 33
        if (filterState === "all") events = _events2.Events.find({ hasExpired: { $ne: true }, gender: { $ne: opGender } }).fetch();else if (filterState === "participant") events = _events2.Events.find({
            needParticipants: true,                                                                                    // 38
            needVolunteers: {                                                                                          // 39
                $ne: true                                                                                              // 40
            },                                                                                                         //
            hasExpired: { $ne: true },                                                                                 // 42
            gender: { $ne: opGender }                                                                                  // 43
        }).fetch();else events = _events2.Events.find({                                                                //
            needVolunteers: true,                                                                                      // 47
            needParticipants: {                                                                                        // 48
                $ne: true                                                                                              // 49
            },                                                                                                         //
            hasExpired: { $ne: true },                                                                                 // 51
            gender: { $ne: opGender }                                                                                  // 52
        }).fetch();                                                                                                    //
                                                                                                                       //
        //console.log("e " + events )                                                                                  //
        return events;                                                                                                 // 30
    });                                                                                                                //
                                                                                                                       //
    EventsView.prototype.render = function () {                                                                        // 8
        function render() {                                                                                            //
            console.log(Meteor.userId());                                                                              // 60
            events = this.events();                                                                                    // 61
                                                                                                                       //
            if (!events) return _react2['default'].createElement(                                                      // 63
                'span',                                                                                                //
                null,                                                                                                  //
                'loading'                                                                                              //
            );                                                                                                         //
                                                                                                                       //
            //console.log("events: " + events)                                                                         //
                                                                                                                       //
            return _react2['default'].createElement(                                                                   // 59
                'div',                                                                                                 //
                { className: 'bottomGap topGap' },                                                                     //
                _react2['default'].createElement(                                                                      //
                    'div',                                                                                             //
                    { className: 'row' },                                                                              //
                    _react2['default'].createElement(                                                                  //
                        'span',                                                                                        //
                        { className: 'header col s12 m6' },                                                            //
                        _react2['default'].createElement(                                                              //
                            'strong',                                                                                  //
                            null,                                                                                      //
                            'Upcoming Events'                                                                          //
                        )                                                                                              //
                    ),                                                                                                 //
                    _react2['default'].createElement(                                                                  //
                        'form',                                                                                        //
                        { className: ' col s12 m6 topGapSmall', onSubmit: this.handleFilter.bind(this) },              //
                        _react2['default'].createElement(                                                              //
                            'div',                                                                                     //
                            { className: 'row' },                                                                      //
                            _react2['default'].createElement('input', { name: 'filterBy', type: 'radio', id: 'participant', value: 'participant', ref: 'filterBy' }),
                            _react2['default'].createElement(                                                          //
                                'label',                                                                               //
                                { htmlFor: 'participant' },                                                            //
                                'Participant'                                                                          //
                            ),                                                                                         //
                            ' ',                                                                                       //
                            _react2['default'].createElement('input', { name: 'filterBy', type: 'radio', id: 'volunteer', value: 'volunteer', ref: 'filterBy' }),
                            _react2['default'].createElement(                                                          //
                                'label',                                                                               //
                                { htmlFor: 'volunteer' },                                                              //
                                'Volunteer'                                                                            //
                            ),                                                                                         //
                            ' ',                                                                                       //
                            _react2['default'].createElement('input', { name: 'filterBy', type: 'radio', id: 'all', value: 'all', ref: 'filterBy', defaultChecked: true }),
                            _react2['default'].createElement(                                                          //
                                'label',                                                                               //
                                { htmlFor: 'all' },                                                                    //
                                'All'                                                                                  //
                            ),                                                                                         //
                            _react2['default'].createElement(                                                          //
                                'button',                                                                              //
                                { type: 'submit', className: 'btn-flat blue-text text-darken-2' },                     //
                                _react2['default'].createElement(                                                      //
                                    'strong',                                                                          //
                                    null,                                                                              //
                                    'Filter'                                                                           //
                                )                                                                                      //
                            )                                                                                          //
                        )                                                                                              //
                    )                                                                                                  //
                ),                                                                                                     //
                _react2['default'].createElement(_EventAll2['default'], { events: events })                            //
            );                                                                                                         //
        }                                                                                                              //
                                                                                                                       //
        return render;                                                                                                 //
    }();                                                                                                               //
                                                                                                                       //
    return EventsView;                                                                                                 //
}((0, _ultimatejsTrackerReact2['default'])(_react2['default'].Component));                                             //
                                                                                                                       //
exports['default'] = EventsView;                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"History.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/ultimatejs:tracker-react","../../api/events.js","../MosqueDashboard/MosqueEventsAll.jsx",function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/History.jsx                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.__esModule = true;                                                                                             //
                                                                                                                       //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                                //
                                                                                                                       //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                       //
                                                                                                                       //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                          //
                                                                                                                       //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                 //
                                                                                                                       //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                            //
                                                                                                                       //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                   //
                                                                                                                       //
var _react = require('react');                                                                                         // 1
                                                                                                                       //
var _react2 = _interopRequireDefault(_react);                                                                          //
                                                                                                                       //
var _ultimatejsTrackerReact = require('meteor/ultimatejs:tracker-react');                                              // 2
                                                                                                                       //
var _ultimatejsTrackerReact2 = _interopRequireDefault(_ultimatejsTrackerReact);                                        //
                                                                                                                       //
var _events2 = require('../../api/events.js');                                                                         // 4
                                                                                                                       //
var _MosqueEventsAll = require('../MosqueDashboard/MosqueEventsAll.jsx');                                              // 6
                                                                                                                       //
var _MosqueEventsAll2 = _interopRequireDefault(_MosqueEventsAll);                                                      //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                      //
                                                                                                                       //
var MosqueDashboard = function (_TrackerReact) {                                                                       //
  (0, _inherits3['default'])(MosqueDashboard, _TrackerReact);                                                          //
                                                                                                                       //
  MosqueDashboard.prototype.componentDidMount = function () {                                                          //
    function componentDidMount() {                                                                                     //
      document.title = "GoMosque 2.0 | MY History";                                                                    // 11
    }                                                                                                                  //
                                                                                                                       //
    return componentDidMount;                                                                                          //
  }();                                                                                                                 //
                                                                                                                       //
  function MosqueDashboard() {                                                                                         // 14
    (0, _classCallCheck3['default'])(this, MosqueDashboard);                                                           //
                                                                                                                       //
    var _this = (0, _possibleConstructorReturn3['default'])(this, _TrackerReact.call(this));                           //
                                                                                                                       //
    _this.state = {                                                                                                    // 17
      subscription: {                                                                                                  // 18
        events: Meteor.subscribe("allEvents")                                                                          // 19
      }                                                                                                                //
    };                                                                                                                 //
    return _this;                                                                                                      //
  }                                                                                                                    //
                                                                                                                       //
  MosqueDashboard.prototype.events = function (_events) {                                                              // 8
    function events() {                                                                                                //
      return _events.apply(this, arguments);                                                                           //
    }                                                                                                                  //
                                                                                                                       //
    events.toString = function () {                                                                                    //
      return _events.toString();                                                                                       //
    };                                                                                                                 //
                                                                                                                       //
    return events;                                                                                                     //
  }(function () {                                                                                                      //
    //{$or: [{participants: Meteor.user().emails[0].address},{volunteers: Meteor.user().emails[0].address}]}           //
    events = _events2.Events.find({ $or: [{ participants: Meteor.user().emails[0].address }, { volunteers: Meteor.user().emails[0].address }], hasExpired: true }).fetch();
    console.log("e " + events);                                                                                        // 27
    return events;                                                                                                     // 28
  });                                                                                                                  //
                                                                                                                       //
  MosqueDashboard.prototype.render = function () {                                                                     // 8
    function render() {                                                                                                //
      console.log(Meteor.userId());                                                                                    // 33
      events = this.events();                                                                                          // 34
                                                                                                                       //
      if (!events) return _react2['default'].createElement(                                                            // 36
        'span',                                                                                                        //
        null,                                                                                                          //
        ' loading '                                                                                                    //
      );                                                                                                               //
                                                                                                                       //
      console.log("events: " + events);                                                                                // 39
                                                                                                                       //
      return _react2['default'].createElement(                                                                         // 41
        'div',                                                                                                         //
        null,                                                                                                          //
        _react2['default'].createElement(                                                                              //
          'h2',                                                                                                        //
          null,                                                                                                        //
          'Events That I\'ve Participated'                                                                             //
        ),                                                                                                             //
        _react2['default'].createElement(_MosqueEventsAll2['default'], { events: events }),                            //
        _react2['default'].createElement(                                                                              //
          'div',                                                                                                       //
          { className: 'fixed-action-btn containedFAB' },                                                              //
          _react2['default'].createElement(                                                                            //
            'a',                                                                                                       //
            { className: 'btn-floating btn-large green darken-2', href: '/mosqueEventForm' },                          //
            _react2['default'].createElement(                                                                          //
              'i',                                                                                                     //
              { className: 'large material-icons ' },                                                                  //
              'add'                                                                                                    //
            )                                                                                                          //
          )                                                                                                            //
        )                                                                                                              //
      );                                                                                                               //
    }                                                                                                                  //
                                                                                                                       //
    return render;                                                                                                     //
  }();                                                                                                                 //
                                                                                                                       //
  return MosqueDashboard;                                                                                              //
}((0, _ultimatejsTrackerReact2['default'])(_react2['default'].Component));                                             //
                                                                                                                       //
exports['default'] = MosqueDashboard;                                                                                  //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"Home.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/Home.jsx                                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.__esModule = true;                                                                                             //
                                                                                                                       //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                                //
                                                                                                                       //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                       //
                                                                                                                       //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                          //
                                                                                                                       //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                 //
                                                                                                                       //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                            //
                                                                                                                       //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                   //
                                                                                                                       //
var _react = require("react");                                                                                         // 1
                                                                                                                       //
var _react2 = _interopRequireDefault(_react);                                                                          //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                      //
                                                                                                                       //
var Home = function (_React$Component) {                                                                               //
  (0, _inherits3["default"])(Home, _React$Component);                                                                  //
                                                                                                                       //
  function Home() {                                                                                                    //
    (0, _classCallCheck3["default"])(this, Home);                                                                      //
    return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));                 //
  }                                                                                                                    //
                                                                                                                       //
  Home.prototype.componentDidMount = function () {                                                                     //
    function componentDidMount() {                                                                                     //
      document.title = "Quick Plate | Home";                                                                           // 5
    }                                                                                                                  //
                                                                                                                       //
    return componentDidMount;                                                                                          //
  }();                                                                                                                 //
                                                                                                                       //
  Home.prototype.render = function () {                                                                                // 3
    function render() {                                                                                                //
      return _react2["default"].createElement(                                                                         // 9
        "div",                                                                                                         //
        null,                                                                                                          //
        _react2["default"].createElement(                                                                              //
          "h1",                                                                                                        //
          null,                                                                                                        //
          "This is home.. Truly.. Where I know I must be...."                                                          //
        ),                                                                                                             //
        _react2["default"].createElement(                                                                              //
          "a",                                                                                                         //
          { href: "/login" },                                                                                          //
          "login"                                                                                                      //
        )                                                                                                              //
      );                                                                                                               //
    }                                                                                                                  //
                                                                                                                       //
    return render;                                                                                                     //
  }();                                                                                                                 //
                                                                                                                       //
  return Home;                                                                                                         //
}(_react2["default"].Component);                                                                                       //
                                                                                                                       //
exports["default"] = Home;                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"Login.jsx":["react","meteor/session",function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/Login.jsx                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.__esModule = true;                                                                                             //
                                                                                                                       //
var _react = require('react');                                                                                         // 1
                                                                                                                       //
var _react2 = _interopRequireDefault(_react);                                                                          //
                                                                                                                       //
var _session = require('meteor/session');                                                                              // 2
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                      //
                                                                                                                       //
var Login = _react2['default'].createClass({                                                                           // 4
  displayName: 'Login',                                                                                                //
                                                                                                                       //
  getInitialState: function () {                                                                                       // 5
    function getInitialState() {                                                                                       // 5
      return { email: '', password: '' };                                                                              // 6
    }                                                                                                                  //
                                                                                                                       //
    return getInitialState;                                                                                            //
  }(),                                                                                                                 //
  componentDidMount: function () {                                                                                     // 8
    function componentDidMount() {                                                                                     // 8
      document.title = "GoMosque 2.0 | Login";                                                                         // 9
    }                                                                                                                  //
                                                                                                                       //
    return componentDidMount;                                                                                          //
  }(),                                                                                                                 //
  handleEmailChange: function () {                                                                                     // 11
    function handleEmailChange(e) {                                                                                    // 11
      this.setState({ email: e.target.value });                                                                        // 12
    }                                                                                                                  //
                                                                                                                       //
    return handleEmailChange;                                                                                          //
  }(),                                                                                                                 //
  handlePasswordChange: function () {                                                                                  // 14
    function handlePasswordChange(e) {                                                                                 // 14
      this.setState({ password: e.target.value });                                                                     // 15
    }                                                                                                                  //
                                                                                                                       //
    return handlePasswordChange;                                                                                       //
  }(),                                                                                                                 //
  handleSubmit: function () {                                                                                          // 17
    function handleSubmit(e) {                                                                                         // 17
      e.preventDefault();                                                                                              // 18
      var email = this.state.email;                                                                                    // 19
      var password = this.state.password;                                                                              // 20
                                                                                                                       //
      if (!email || !password) {                                                                                       // 22
        return;                                                                                                        // 23
      }                                                                                                                //
      Meteor.loginWithPassword(email, password, function (err) {                                                       // 25
        if (err) {} else {                                                                                             // 26
          var back = _session.Session.get("back");                                                                     // 28
          if (back == undefined || back == "") {                                                                       // 29
            FlowRouter.go("eventsView");                                                                               // 30
          } else {                                                                                                     //
            FlowRouter.go(_session.Session.get("back"));                                                               // 32
            _session.Session.set("back", "");                                                                          // 33
          }                                                                                                            //
        }                                                                                                              //
      });                                                                                                              //
      this.setState({ email: '', password: '' });                                                                      // 38
    }                                                                                                                  //
                                                                                                                       //
    return handleSubmit;                                                                                               //
  }(),                                                                                                                 //
  render: function () {                                                                                                // 40
    function render() {                                                                                                //
      return _react2['default'].createElement(                                                                         // 41
        'div',                                                                                                         //
        { className: 'row' },                                                                                          //
        _react2['default'].createElement(                                                                              //
          'div',                                                                                                       //
          { className: 'col s12 m4 offset-m4 center' },                                                                //
          _react2['default'].createElement(                                                                            //
            'h2',                                                                                                      //
            { className: 'header ' },                                                                                  //
            'Login'                                                                                                    //
          ),                                                                                                           //
          _react2['default'].createElement(                                                                            //
            'form',                                                                                                    //
            { onSubmit: this.handleSubmit },                                                                           //
            _react2['default'].createElement(                                                                          //
              'div',                                                                                                   //
              { className: 'row' },                                                                                    //
              _react2['default'].createElement(                                                                        //
                'div',                                                                                                 //
                { className: 'input-field-user col s12 m12' },                                                         //
                _react2['default'].createElement('input', { id: 'email', type: 'email', className: 'validate', onChange: this.handleEmailChange }),
                _react2['default'].createElement(                                                                      //
                  'label',                                                                                             //
                  { htmlFor: 'email', 'data-error': 'Error!' },                                                        //
                  'Email'                                                                                              //
                )                                                                                                      //
              )                                                                                                        //
            ),                                                                                                         //
            _react2['default'].createElement(                                                                          //
              'div',                                                                                                   //
              { className: 'row' },                                                                                    //
              _react2['default'].createElement(                                                                        //
                'div',                                                                                                 //
                { className: 'input-field-user col s12 m12' },                                                         //
                _react2['default'].createElement('input', { id: 'password', type: 'password', className: 'validate', onChange: this.handlePasswordChange }),
                _react2['default'].createElement(                                                                      //
                  'label',                                                                                             //
                  { htmlFor: 'password' },                                                                             //
                  'Password'                                                                                           //
                )                                                                                                      //
              )                                                                                                        //
            ),                                                                                                         //
            _react2['default'].createElement(                                                                          //
              'div',                                                                                                   //
              { className: 'row' },                                                                                    //
              _react2['default'].createElement(                                                                        //
                'button',                                                                                              //
                { className: 'btn waves-effect waves-light -user blue darken-2', type: 'submit', name: 'action' },     //
                'Login',                                                                                               //
                _react2['default'].createElement(                                                                      //
                  'i',                                                                                                 //
                  { className: 'material-icons right' },                                                               //
                  'send'                                                                                               //
                )                                                                                                      //
              )                                                                                                        //
            )                                                                                                          //
          )                                                                                                            //
        )                                                                                                              //
      );                                                                                                               //
    }                                                                                                                  //
                                                                                                                       //
    return render;                                                                                                     //
  }()                                                                                                                  //
});                                                                                                                    //
                                                                                                                       //
exports['default'] = Login;                                                                                            //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"MosqueDashboard.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/ultimatejs:tracker-react","../../api/events.js","../MosqueDashboard/MosqueEventsAll.jsx",function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/MosqueDashboard.jsx                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.__esModule = true;                                                                                             //
                                                                                                                       //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                                //
                                                                                                                       //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                       //
                                                                                                                       //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                          //
                                                                                                                       //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                 //
                                                                                                                       //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                            //
                                                                                                                       //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                   //
                                                                                                                       //
var _react = require('react');                                                                                         // 1
                                                                                                                       //
var _react2 = _interopRequireDefault(_react);                                                                          //
                                                                                                                       //
var _ultimatejsTrackerReact = require('meteor/ultimatejs:tracker-react');                                              // 2
                                                                                                                       //
var _ultimatejsTrackerReact2 = _interopRequireDefault(_ultimatejsTrackerReact);                                        //
                                                                                                                       //
var _events2 = require('../../api/events.js');                                                                         // 4
                                                                                                                       //
var _MosqueEventsAll = require('../MosqueDashboard/MosqueEventsAll.jsx');                                              // 6
                                                                                                                       //
var _MosqueEventsAll2 = _interopRequireDefault(_MosqueEventsAll);                                                      //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                      //
                                                                                                                       //
var MosqueDashboard = function (_TrackerReact) {                                                                       //
  (0, _inherits3['default'])(MosqueDashboard, _TrackerReact);                                                          //
                                                                                                                       //
  MosqueDashboard.prototype.componentDidMount = function () {                                                          //
    function componentDidMount() {                                                                                     //
      document.title = "GoMosque 2.0 | MosqueDashboard";                                                               // 11
    }                                                                                                                  //
                                                                                                                       //
    return componentDidMount;                                                                                          //
  }();                                                                                                                 //
                                                                                                                       //
  function MosqueDashboard() {                                                                                         // 14
    (0, _classCallCheck3['default'])(this, MosqueDashboard);                                                           //
                                                                                                                       //
    var _this = (0, _possibleConstructorReturn3['default'])(this, _TrackerReact.call(this));                           //
                                                                                                                       //
    _this.state = {                                                                                                    // 17
      subscription: {                                                                                                  // 18
        events: Meteor.subscribe("allEvents")                                                                          // 19
      }                                                                                                                //
    };                                                                                                                 //
    return _this;                                                                                                      //
  }                                                                                                                    //
                                                                                                                       //
  MosqueDashboard.prototype.events = function (_events) {                                                              // 8
    function events() {                                                                                                //
      return _events.apply(this, arguments);                                                                           //
    }                                                                                                                  //
                                                                                                                       //
    events.toString = function () {                                                                                    //
      return _events.toString();                                                                                       //
    };                                                                                                                 //
                                                                                                                       //
    return events;                                                                                                     //
  }(function () {                                                                                                      //
    events = _events2.Events.find({ mosqueId: Meteor.userId(), hasExpired: { $ne: true } }, { sort: { createdAt: -1 } }).fetch();
    console.log("e " + events);                                                                                        // 26
    return events;                                                                                                     // 27
  });                                                                                                                  //
                                                                                                                       //
  MosqueDashboard.prototype.render = function () {                                                                     // 8
    function render() {                                                                                                //
      console.log(Meteor.userId());                                                                                    // 32
      events = this.events();                                                                                          // 33
                                                                                                                       //
      if (!events) return _react2['default'].createElement(                                                            // 35
        'span',                                                                                                        //
        null,                                                                                                          //
        ' loading '                                                                                                    //
      );                                                                                                               //
                                                                                                                       //
      console.log("events: " + events);                                                                                // 38
                                                                                                                       //
      return _react2['default'].createElement(                                                                         // 40
        'div',                                                                                                         //
        null,                                                                                                          //
        _react2['default'].createElement(                                                                              //
          'h3',                                                                                                        //
          null,                                                                                                        //
          'Upcoming Events'                                                                                            //
        ),                                                                                                             //
        _react2['default'].createElement(                                                                              //
          'p',                                                                                                         //
          null,                                                                                                        //
          'You are not organising any events currently. Click ',                                                       //
          _react2['default'].createElement(                                                                            //
            'a',                                                                                                       //
            { href: '/mosqueEventForm' },                                                                              //
            'here'                                                                                                     //
          ),                                                                                                           //
          ' to add an event '                                                                                          //
        ),                                                                                                             //
        _react2['default'].createElement(_MosqueEventsAll2['default'], { events: events }),                            //
        _react2['default'].createElement(                                                                              //
          'div',                                                                                                       //
          { className: 'fixed-action-btn containedFAB' },                                                              //
          _react2['default'].createElement(                                                                            //
            'a',                                                                                                       //
            { className: 'btn-floating btn-large green darken-2', href: '/mosqueEventForm' },                          //
            _react2['default'].createElement(                                                                          //
              'i',                                                                                                     //
              { className: 'large material-icons ' },                                                                  //
              'add'                                                                                                    //
            )                                                                                                          //
          )                                                                                                            //
        )                                                                                                              //
      );                                                                                                               //
    }                                                                                                                  //
                                                                                                                       //
    return render;                                                                                                     //
  }();                                                                                                                 //
                                                                                                                       //
  return MosqueDashboard;                                                                                              //
}((0, _ultimatejsTrackerReact2['default'])(_react2['default'].Component));                                             //
                                                                                                                       //
exports['default'] = MosqueDashboard;                                                                                  //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"MosqueEventDetails.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/ultimatejs:tracker-react","../../api/events.js","../MosqueEventDetails/Participants.jsx","../MosqueEventDetails/Volunteers.jsx",function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/MosqueEventDetails.jsx                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.__esModule = true;                                                                                             //
                                                                                                                       //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                                //
                                                                                                                       //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                       //
                                                                                                                       //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                          //
                                                                                                                       //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                 //
                                                                                                                       //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                            //
                                                                                                                       //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                   //
                                                                                                                       //
var _react = require('react');                                                                                         // 1
                                                                                                                       //
var _react2 = _interopRequireDefault(_react);                                                                          //
                                                                                                                       //
var _ultimatejsTrackerReact = require('meteor/ultimatejs:tracker-react');                                              // 2
                                                                                                                       //
var _ultimatejsTrackerReact2 = _interopRequireDefault(_ultimatejsTrackerReact);                                        //
                                                                                                                       //
var _events = require('../../api/events.js');                                                                          // 4
                                                                                                                       //
var _Participants = require('../MosqueEventDetails/Participants.jsx');                                                 // 6
                                                                                                                       //
var _Participants2 = _interopRequireDefault(_Participants);                                                            //
                                                                                                                       //
var _Volunteers = require('../MosqueEventDetails/Volunteers.jsx');                                                     // 7
                                                                                                                       //
var _Volunteers2 = _interopRequireDefault(_Volunteers);                                                                //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                      //
                                                                                                                       //
var MosqueEventDetails = function (_TrackerReact) {                                                                    //
  (0, _inherits3['default'])(MosqueEventDetails, _TrackerReact);                                                       //
                                                                                                                       //
  function MosqueEventDetails() {                                                                                      // 11
    (0, _classCallCheck3['default'])(this, MosqueEventDetails);                                                        //
                                                                                                                       //
    var _this = (0, _possibleConstructorReturn3['default'])(this, _TrackerReact.call(this));                           //
                                                                                                                       //
    _this.state = {                                                                                                    // 14
      subscription: {                                                                                                  // 15
        events: Meteor.subscribe("allEvents")                                                                          // 16
      }                                                                                                                //
    };                                                                                                                 //
    return _this;                                                                                                      //
  }                                                                                                                    //
                                                                                                                       //
  MosqueEventDetails.prototype.componentDidMount = function () {                                                       // 10
    function componentDidMount() {                                                                                     //
      document.title = "Mosque Events | EventDetails";                                                                 // 22
    }                                                                                                                  //
                                                                                                                       //
    return componentDidMount;                                                                                          //
  }();                                                                                                                 //
                                                                                                                       //
  MosqueEventDetails.prototype.event = function () {                                                                   // 10
    function event() {                                                                                                 //
      return _events.Events.findOne(this.props.eventId);                                                               // 26
    }                                                                                                                  //
                                                                                                                       //
    return event;                                                                                                      //
  }();                                                                                                                 //
                                                                                                                       //
  MosqueEventDetails.prototype.removeEvent = function () {                                                             // 10
    function removeEvent() {                                                                                           //
      Meteor.call('removeEvent', this.props.eventId);                                                                  // 30
      FlowRouter.go('/mosqueDashboard');                                                                               // 31
    }                                                                                                                  //
                                                                                                                       //
    return removeEvent;                                                                                                //
  }();                                                                                                                 //
                                                                                                                       //
  MosqueEventDetails.prototype.render = function () {                                                                  // 10
    function render() {                                                                                                //
      event = this.event();                                                                                            // 35
                                                                                                                       //
      if (!event) return _react2['default'].createElement(                                                             // 37
        'span',                                                                                                        //
        null,                                                                                                          //
        'loading'                                                                                                      //
      );                                                                                                               //
                                                                                                                       //
      needParticipants = event.needParticipants ? _react2['default'].createElement(                                    // 40
        'span',                                                                                                        //
        { className: 'lessEmphasis' },                                                                                 //
        _react2['default'].createElement(                                                                              //
          'i',                                                                                                         //
          { className: 'material-icons iconAlign' },                                                                   //
          'perm_identity'                                                                                              //
        ),                                                                                                             //
        ' ',                                                                                                           //
        _react2['default'].createElement(                                                                              //
          'span',                                                                                                      //
          null,                                                                                                        //
          ' Participants Needed '                                                                                      //
        ),                                                                                                             //
        ' '                                                                                                            //
      ) : _react2['default'].createElement('span', null);                                                              //
      needVolunteers = event.needVolunteers ? _react2['default'].createElement(                                        // 41
        'span',                                                                                                        //
        { className: 'lessEmphasis' },                                                                                 //
        _react2['default'].createElement(                                                                              //
          'i',                                                                                                         //
          { className: 'material-icons iconAlign' },                                                                   //
          'assignment_ind'                                                                                             //
        ),                                                                                                             //
        ' ',                                                                                                           //
        _react2['default'].createElement(                                                                              //
          'span',                                                                                                      //
          null,                                                                                                        //
          ' Volunteers Needed '                                                                                        //
        ),                                                                                                             //
        '  '                                                                                                           //
      ) : _react2['default'].createElement('span', null);                                                              //
                                                                                                                       //
      gender = event.gender == "f" ? _react2['default'].createElement(                                                 // 43
        'span',                                                                                                        //
        { className: 'lessEmphasis female' },                                                                          //
        _react2['default'].createElement(                                                                              //
          'i',                                                                                                         //
          { className: 'material-icons iconAlign' },                                                                   //
          'person'                                                                                                     //
        ),                                                                                                             //
        ' ',                                                                                                           //
        _react2['default'].createElement(                                                                              //
          'span',                                                                                                      //
          { className: '' },                                                                                           //
          ' Female Only'                                                                                               //
        ),                                                                                                             //
        ' '                                                                                                            //
      ) : event.gender == "m" ? _react2['default'].createElement(                                                      //
        'span',                                                                                                        //
        { className: 'lessEmphasis male' },                                                                            //
        _react2['default'].createElement(                                                                              //
          'i',                                                                                                         //
          { className: 'material-icons iconAlign' },                                                                   //
          'person'                                                                                                     //
        ),                                                                                                             //
        ' ',                                                                                                           //
        _react2['default'].createElement(                                                                              //
          'span',                                                                                                      //
          { className: '' },                                                                                           //
          ' Male Only '                                                                                                //
        ),                                                                                                             //
        ' '                                                                                                            //
      ) : _react2['default'].createElement(                                                                            //
        'span',                                                                                                        //
        { className: 'lessEmphasis' },                                                                                 //
        _react2['default'].createElement(                                                                              //
          'i',                                                                                                         //
          { className: 'material-icons iconAlign' },                                                                   //
          'person'                                                                                                     //
        ),                                                                                                             //
        ' ',                                                                                                           //
        _react2['default'].createElement(                                                                              //
          'span',                                                                                                      //
          { className: '' },                                                                                           //
          ' Any Genders '                                                                                              //
        ),                                                                                                             //
        ' '                                                                                                            //
      );                                                                                                               //
                                                                                                                       //
      {/* Check if event got PARTICIPANT LIMIT  (x/y) x out of total possible y */}                                    // 45
      pLength = isNaN(event.numberParticipants) ? _react2['default'].createElement(                                    // 46
        'span',                                                                                                        //
        null,                                                                                                          //
        ' '                                                                                                            //
      ) : _react2['default'].createElement(                                                                            //
        'span',                                                                                                        //
        null,                                                                                                          //
        ' / ',                                                                                                         //
        event.numberParticipants,                                                                                      //
        ' '                                                                                                            //
      );                                                                                                               //
                                                                                                                       //
      {/* if NO participants, show 0 */}                                                                               // 48
      numberParticipants = !event.participants ? _react2['default'].createElement(                                     // 49
        'span',                                                                                                        //
        null,                                                                                                          //
        ' 0 '                                                                                                          //
      ) : _react2['default'].createElement(                                                                            //
        'span',                                                                                                        //
        null,                                                                                                          //
        event.participants.length                                                                                      //
      );                                                                                                               //
      participantCard = _react2['default'].createElement('span', null);                                                // 50
                                                                                                                       //
      {/* if needParticipants TRUE but NO participants (so far) */}                                                    // 52
      showParticipants = event.participants && event.participants.length >= 1 ? _react2['default'].createElement(      // 53
        'span',                                                                                                        //
        { className: 'rightAbit' },                                                                                    //
        _react2['default'].createElement(_Participants2['default'], { participants: event.participants, eventName: event.name })
      ) : _react2['default'].createElement(                                                                            //
        'span',                                                                                                        //
        null,                                                                                                          //
        'There are no Participants currently'                                                                          //
      );                                                                                                               //
                                                                                                                       //
      {/* if needVolunteers TRUE but NO participants (so far) */}                                                      // 55
      numberVolunteers = !event.volunteers ? _react2['default'].createElement(                                         // 56
        'span',                                                                                                        //
        null,                                                                                                          //
        ' 0 '                                                                                                          //
      ) : _react2['default'].createElement(                                                                            //
        'span',                                                                                                        //
        null,                                                                                                          //
        event.volunteers.length                                                                                        //
      );                                                                                                               //
      showVolunteers = event.volunteers && event.volunteers.length >= 1 ? _react2['default'].createElement(            // 57
        'span',                                                                                                        //
        null,                                                                                                          //
        _react2['default'].createElement(_Volunteers2['default'], { volunteers: event.volunteers, eventName: event.name })
      ) : _react2['default'].createElement(                                                                            //
        'span',                                                                                                        //
        null,                                                                                                          //
        'There are no volunteers currently'                                                                            //
      );                                                                                                               //
                                                                                                                       //
      if (event.needParticipants) {                                                                                    // 60
        participantCard = _react2['default'].createElement(                                                            // 61
          'div',                                                                                                       //
          { className: 'row' },                                                                                        //
          _react2['default'].createElement(                                                                            //
            'div',                                                                                                     //
            { className: 'col s12' },                                                                                  //
            _react2['default'].createElement(                                                                          //
              'div',                                                                                                   //
              { className: 'card-panel hoverable' },                                                                   //
              _react2['default'].createElement(                                                                        //
                'h3',                                                                                                  //
                null,                                                                                                  //
                ' Participants'                                                                                        //
              ),                                                                                                       //
              _react2['default'].createElement(                                                                        //
                'p',                                                                                                   //
                null,                                                                                                  //
                'Number of Participants: ',                                                                            //
                numberParticipants                                                                                     //
              ),                                                                                                       //
              showParticipants                                                                                         //
            )                                                                                                          //
          )                                                                                                            //
        );                                                                                                             //
      }                                                                                                                //
                                                                                                                       //
      volunteerCard = _react2['default'].createElement('span', null);                                                  // 78
                                                                                                                       //
      if (event.needVolunteers) {                                                                                      // 80
        volunteerCard = _react2['default'].createElement(                                                              // 81
          'div',                                                                                                       //
          { className: 'row' },                                                                                        //
          _react2['default'].createElement(                                                                            //
            'div',                                                                                                     //
            { className: 'col s12 ' },                                                                                 //
            _react2['default'].createElement(                                                                          //
              'div',                                                                                                   //
              { className: 'card-panel hoverable' },                                                                   //
              _react2['default'].createElement(                                                                        //
                'h3',                                                                                                  //
                null,                                                                                                  //
                ' Volunteers'                                                                                          //
              ),                                                                                                       //
              _react2['default'].createElement(                                                                        //
                'p',                                                                                                   //
                null,                                                                                                  //
                'Number of Volunteers: ',                                                                              //
                numberVolunteers                                                                                       //
              ),                                                                                                       //
              showVolunteers                                                                                           //
            )                                                                                                          //
          )                                                                                                            //
        );                                                                                                             //
      }                                                                                                                //
                                                                                                                       //
      return _react2['default'].createElement(                                                                         // 97
        'div',                                                                                                         //
        { className: 'topGap' },                                                                                       //
        _react2['default'].createElement(                                                                              //
          'div',                                                                                                       //
          { className: 'row' },                                                                                        //
          _react2['default'].createElement(                                                                            //
            'div',                                                                                                     //
            { className: 'col s12' },                                                                                  //
            _react2['default'].createElement(                                                                          //
              'div',                                                                                                   //
              { className: 'card-panel hoverable' },                                                                   //
              _react2['default'].createElement(                                                                        //
                'h2',                                                                                                  //
                null,                                                                                                  //
                event.name                                                                                             //
              ),                                                                                                       //
              _react2['default'].createElement(                                                                        //
                'p',                                                                                                   //
                null,                                                                                                  //
                event.thedate                                                                                          //
              ),                                                                                                       //
              _react2['default'].createElement(                                                                        //
                'p',                                                                                                   //
                null,                                                                                                  //
                needParticipants,                                                                                      //
                '   ',                                                                                                 //
                needVolunteers,                                                                                        //
                '   ',                                                                                                 //
                gender                                                                                                 //
              ),                                                                                                       //
              _react2['default'].createElement(                                                                        //
                'p',                                                                                                   //
                null,                                                                                                  //
                event.description                                                                                      //
              ),                                                                                                       //
              _react2['default'].createElement(                                                                        //
                'div',                                                                                                 //
                { className: 'right-align' },                                                                          //
                _react2['default'].createElement(                                                                      //
                  'a',                                                                                                 //
                  { href: '/MosqueEventUpdate/' + event._id, className: 'btn green darken-2' },                        //
                  'Update'                                                                                             //
                ),                                                                                                     //
                _react2['default'].createElement('span', { className: 'marginSides' }),                                //
                _react2['default'].createElement(                                                                      //
                  'button',                                                                                            //
                  { className: 'btn red darken-2', onClick: this.removeEvent.bind(this) },                             //
                  'Delete'                                                                                             //
                )                                                                                                      //
              )                                                                                                        //
            )                                                                                                          //
          )                                                                                                            //
        ),                                                                                                             //
        participantCard,                                                                                               //
        volunteerCard                                                                                                  //
      );                                                                                                               //
    }                                                                                                                  //
                                                                                                                       //
    return render;                                                                                                     //
  }();                                                                                                                 //
                                                                                                                       //
  return MosqueEventDetails;                                                                                           //
}((0, _ultimatejsTrackerReact2['default'])(_react2['default'].Component));                                             //
                                                                                                                       //
exports['default'] = MosqueEventDetails;                                                                               //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"MosqueEventForm.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","../../api/events.js",function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/MosqueEventForm.jsx                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.__esModule = true;                                                                                             //
                                                                                                                       //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                                //
                                                                                                                       //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                       //
                                                                                                                       //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                          //
                                                                                                                       //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                 //
                                                                                                                       //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                            //
                                                                                                                       //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                   //
                                                                                                                       //
var _react = require('react');                                                                                         // 1
                                                                                                                       //
var _react2 = _interopRequireDefault(_react);                                                                          //
                                                                                                                       //
var _events = require('../../api/events.js');                                                                          // 3
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                      //
                                                                                                                       //
var MosqueEventForm = function (_React$Component) {                                                                    //
    (0, _inherits3['default'])(MosqueEventForm, _React$Component);                                                     //
                                                                                                                       //
    function MosqueEventForm(props) {                                                                                  // 6
        (0, _classCallCheck3['default'])(this, MosqueEventForm);                                                       //
                                                                                                                       //
        var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props));             //
                                                                                                                       //
        _this.state = {                                                                                                // 9
            needParticipants: true,                                                                                    // 10
            needVolunteers: true,                                                                                      // 11
            gender: "all"                                                                                              // 12
        };                                                                                                             //
        return _this;                                                                                                  //
    }                                                                                                                  //
                                                                                                                       //
    MosqueEventForm.prototype.componentDidMount = function () {                                                        // 5
        function componentDidMount() {                                                                                 //
            document.title = "Mosque Events | MosqueEventForm";                                                        // 16
            //load jQuery for datePicker                                                                               //
            $('.datepicker').pickadate({                                                                               // 15
                selectMonths: true, // Creates a dropdown to control month                                             // 19
                selectYears: 15 // Creates a dropdown of 15 years to control year                                      // 20
            });                                                                                                        // 18
        }                                                                                                              //
                                                                                                                       //
        return componentDidMount;                                                                                      //
    }();                                                                                                               //
                                                                                                                       //
    MosqueEventForm.prototype.handleNeedParticipants = function () {                                                   // 5
        function handleNeedParticipants() {                                                                            //
                                                                                                                       //
            this.setState({                                                                                            // 26
                needParticipants: !this.state.needParticipants                                                         // 27
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return handleNeedParticipants;                                                                                 //
    }();                                                                                                               //
                                                                                                                       //
    MosqueEventForm.prototype.handleNeedVolunteers = function () {                                                     // 5
        function handleNeedVolunteers() {                                                                              //
                                                                                                                       //
            this.setState({                                                                                            // 32
                needVolunteers: !this.state.needVolunteers                                                             // 33
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return handleNeedVolunteers;                                                                                   //
    }();                                                                                                               //
                                                                                                                       //
    MosqueEventForm.prototype.handleSubmit = function () {                                                             // 5
        function handleSubmit(e) {                                                                                     //
            e.preventDefault();                                                                                        // 37
            var name = this.refs.name.value.trim();                                                                    // 38
            var description = this.refs.description.value.trim();                                                      // 39
            var theDate = this.refs.date.value.trim();                                                                 // 40
            var start = this.refs.start.value.trim();                                                                  // 41
            var end = this.refs.end.value.trim();                                                                      // 42
                                                                                                                       //
            var needParticipants = this.state.needParticipants;                                                        // 44
            var numberParticipants = parseInt(this.refs.participantNumber.value.trim());                               // 45
            var needVolunteers = this.state.needVolunteers;                                                            // 46
            var numberVolunteers = parseInt(this.refs.volunteerNumber.value.trim());                                   // 47
            var gender = e.target.elements.gender.value;                                                               // 48
                                                                                                                       //
            console.log(name);                                                                                         // 50
            console.log(description);                                                                                  // 51
            console.log(theDate);                                                                                      // 52
            console.log(needParticipants);                                                                             // 53
            console.log(numberParticipants);                                                                           // 54
            console.log(needVolunteers);                                                                               // 55
            console.log(numberVolunteers);                                                                             // 56
            console.log(gender);                                                                                       // 57
                                                                                                                       //
            Meteor.call('addEvents', name, description, theDate, start, end, needParticipants, numberParticipants, needVolunteers, numberVolunteers, gender, function (error, data) {
                if (error) {                                                                                           // 61
                    Bert.alert('Some input fields are not filled in.', 'danger', 'fixed-top', 'fa-frown-o');           // 62
                } else {                                                                                               //
                    Materialize.toast('Event Added Successfully!', 4000);                                              // 64
                    FlowRouter.go("/mosqueDashboard");                                                                 // 65
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return handleSubmit;                                                                                           //
    }();                                                                                                               //
                                                                                                                       //
    MosqueEventForm.prototype.render = function () {                                                                   // 5
        function render() {                                                                                            //
            return _react2['default'].createElement(                                                                   // 74
                'div',                                                                                                 //
                { className: 'row topGap bottomGap' },                                                                 //
                _react2['default'].createElement(                                                                      //
                    'div',                                                                                             //
                    { className: 'col s12 m10 offset-m1' },                                                            //
                    _react2['default'].createElement(                                                                  //
                        'div',                                                                                         //
                        { className: 'card-panel ' },                                                                  //
                        _react2['default'].createElement(                                                              //
                            'h3',                                                                                      //
                            null,                                                                                      //
                            ' Add Event '                                                                              //
                        ),                                                                                             //
                        _react2['default'].createElement(                                                              //
                            'form',                                                                                    //
                            { onSubmit: this.handleSubmit.bind(this), className: 'topGap' },                           //
                            _react2['default'].createElement(                                                          //
                                'div',                                                                                 //
                                { className: 'row' },                                                                  //
                                _react2['default'].createElement(                                                      //
                                    'div',                                                                             //
                                    { className: 'input-field' },                                                      //
                                    _react2['default'].createElement('input', { id: 'name', type: 'text', className: 'validate', ref: 'name' }),
                                    _react2['default'].createElement(                                                  //
                                        'label',                                                                       //
                                        { htmlFor: 'name' },                                                           //
                                        'Name'                                                                         //
                                    )                                                                                  //
                                )                                                                                      //
                            ),                                                                                         //
                            _react2['default'].createElement(                                                          //
                                'div',                                                                                 //
                                { className: 'row' },                                                                  //
                                _react2['default'].createElement(                                                      //
                                    'div',                                                                             //
                                    { className: 'input-field ' },                                                     //
                                    _react2['default'].createElement('textarea', { id: 'description', className: 'materialize-textarea', ref: 'description' }),
                                    _react2['default'].createElement(                                                  //
                                        'label',                                                                       //
                                        { htmlFor: 'description' },                                                    //
                                        'Description'                                                                  //
                                    )                                                                                  //
                                )                                                                                      //
                            ),                                                                                         //
                            _react2['default'].createElement(                                                          //
                                'div',                                                                                 //
                                { className: 'row' },                                                                  //
                                _react2['default'].createElement(                                                      //
                                    'div',                                                                             //
                                    { className: 'input-field col m4' },                                               //
                                    _react2['default'].createElement('input', { type: 'date', className: 'datepicker ', id: 'date', ref: 'date' }),
                                    _react2['default'].createElement(                                                  //
                                        'label',                                                                       //
                                        { htmlFor: 'date' },                                                           //
                                        'Date'                                                                         //
                                    )                                                                                  //
                                ),                                                                                     //
                                _react2['default'].createElement(                                                      //
                                    'div',                                                                             //
                                    { className: 'input-field col m4' },                                               //
                                    _react2['default'].createElement('input', { type: 'time', id: 'start', ref: 'start' })
                                ),                                                                                     //
                                _react2['default'].createElement(                                                      //
                                    'div',                                                                             //
                                    { className: 'input-field col m4' },                                               //
                                    _react2['default'].createElement('input', { type: 'time', id: 'end', ref: 'end' })
                                )                                                                                      //
                            ),                                                                                         //
                            _react2['default'].createElement(                                                          //
                                'div',                                                                                 //
                                { className: 'row' },                                                                  //
                                _react2['default'].createElement(                                                      //
                                    'div',                                                                             //
                                    { className: 'input-field col m4' },                                               //
                                    _react2['default'].createElement('input', { type: 'checkbox', className: 'filled-in', id: 'needParticipants', ref: 'needParticipants', onClick: this.handleNeedParticipants.bind(this), defaultChecked: this.state.needParticipants }),
                                    _react2['default'].createElement(                                                  //
                                        'label',                                                                       //
                                        { htmlFor: 'needParticipants' },                                               //
                                        'Need Participants?'                                                           //
                                    )                                                                                  //
                                ),                                                                                     //
                                _react2['default'].createElement(                                                      //
                                    'div',                                                                             //
                                    { className: 'input-field col m2' },                                               //
                                    _react2['default'].createElement('input', { id: 'participantNumber', type: 'text', className: 'validate', ref: 'participantNumber' }),
                                    _react2['default'].createElement(                                                  //
                                        'label',                                                                       //
                                        { htmlFor: 'participantNumber' },                                              //
                                        'Limit'                                                                        //
                                    )                                                                                  //
                                )                                                                                      //
                            ),                                                                                         //
                            _react2['default'].createElement(                                                          //
                                'div',                                                                                 //
                                { className: 'row' },                                                                  //
                                _react2['default'].createElement(                                                      //
                                    'div',                                                                             //
                                    { className: 'input-field col m4' },                                               //
                                    _react2['default'].createElement('input', { type: 'checkbox', id: 'needVolunteers', className: 'filled-in', ref: 'needVolunteers', onClick: this.handleNeedVolunteers.bind(this), defaultChecked: this.state.needVolunteers }),
                                    _react2['default'].createElement(                                                  //
                                        'label',                                                                       //
                                        { htmlFor: 'needVolunteers' },                                                 //
                                        'Need Volunteers?'                                                             //
                                    )                                                                                  //
                                ),                                                                                     //
                                _react2['default'].createElement(                                                      //
                                    'div',                                                                             //
                                    { className: 'input-field col m2' },                                               //
                                    _react2['default'].createElement('input', { id: 'volunteerNumber', type: 'text', className: 'validate', ref: 'volunteerNumber' }),
                                    _react2['default'].createElement(                                                  //
                                        'label',                                                                       //
                                        { htmlFor: 'volunteerNumber' },                                                //
                                        'Limit'                                                                        //
                                    )                                                                                  //
                                )                                                                                      //
                            ),                                                                                         //
                            _react2['default'].createElement(                                                          //
                                'div',                                                                                 //
                                { className: 'row' },                                                                  //
                                _react2['default'].createElement(                                                      //
                                    'p',                                                                               //
                                    { className: 'grey-text' },                                                        //
                                    'Event Suitable for?'                                                              //
                                ),                                                                                     //
                                _react2['default'].createElement(                                                      //
                                    'div',                                                                             //
                                    { className: 'col m3' },                                                           //
                                    _react2['default'].createElement('input', { name: 'gender', type: 'radio', id: 'all', value: 'all', ref: 'gender' }),
                                    _react2['default'].createElement(                                                  //
                                        'label',                                                                       //
                                        { htmlFor: 'all' },                                                            //
                                        'Any Gender'                                                                   //
                                    )                                                                                  //
                                ),                                                                                     //
                                _react2['default'].createElement(                                                      //
                                    'div',                                                                             //
                                    { className: 'col m3' },                                                           //
                                    _react2['default'].createElement('input', { name: 'gender', type: 'radio', id: 'male', value: 'm', ref: 'gender' }),
                                    _react2['default'].createElement(                                                  //
                                        'label',                                                                       //
                                        { htmlFor: 'male' },                                                           //
                                        'Male'                                                                         //
                                    )                                                                                  //
                                ),                                                                                     //
                                _react2['default'].createElement(                                                      //
                                    'div',                                                                             //
                                    { className: 'col m3' },                                                           //
                                    _react2['default'].createElement('input', { name: 'gender', type: 'radio', id: 'female', value: 'f', ref: 'gender' }),
                                    _react2['default'].createElement(                                                  //
                                        'label',                                                                       //
                                        { htmlFor: 'female' },                                                         //
                                        'Female'                                                                       //
                                    )                                                                                  //
                                )                                                                                      //
                            ),                                                                                         //
                            _react2['default'].createElement('div', { className: 'topGap' }),                          //
                            _react2['default'].createElement(                                                          //
                                'button',                                                                              //
                                { className: 'btn waves-effect waves-light', type: 'submit', name: 'action' },         //
                                'Submit',                                                                              //
                                _react2['default'].createElement(                                                      //
                                    'i',                                                                               //
                                    { className: 'material-icons right' },                                             //
                                    'send'                                                                             //
                                )                                                                                      //
                            )                                                                                          //
                        )                                                                                              //
                    )                                                                                                  //
                )                                                                                                      //
            );                                                                                                         //
        }                                                                                                              //
                                                                                                                       //
        return render;                                                                                                 //
    }();                                                                                                               //
                                                                                                                       //
    return MosqueEventForm;                                                                                            //
}(_react2['default'].Component);                                                                                       //
                                                                                                                       //
exports['default'] = MosqueEventForm;                                                                                  //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"MosqueEventUpdate.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/ultimatejs:tracker-react","../../api/events.js",function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/MosqueEventUpdate.jsx                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.__esModule = true;                                                                                             //
                                                                                                                       //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                                //
                                                                                                                       //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                       //
                                                                                                                       //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                          //
                                                                                                                       //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                 //
                                                                                                                       //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                            //
                                                                                                                       //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                   //
                                                                                                                       //
var _react = require('react');                                                                                         // 1
                                                                                                                       //
var _react2 = _interopRequireDefault(_react);                                                                          //
                                                                                                                       //
var _ultimatejsTrackerReact = require('meteor/ultimatejs:tracker-react');                                              // 2
                                                                                                                       //
var _ultimatejsTrackerReact2 = _interopRequireDefault(_ultimatejsTrackerReact);                                        //
                                                                                                                       //
var _events = require('../../api/events.js');                                                                          // 4
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                      //
                                                                                                                       //
var MosqueEventUpdate = function (_TrackerReact) {                                                                     //
    (0, _inherits3['default'])(MosqueEventUpdate, _TrackerReact);                                                      //
                                                                                                                       //
    function MosqueEventUpdate(props) {                                                                                // 7
        (0, _classCallCheck3['default'])(this, MosqueEventUpdate);                                                     //
                                                                                                                       //
        var _this = (0, _possibleConstructorReturn3['default'])(this, _TrackerReact.call(this, props));                //
                                                                                                                       //
        defaultEventValues = _this.defaultEventValues();                                                               // 10
        _this.state = {                                                                                                // 11
            subscription: {                                                                                            // 12
                events: Meteor.subscribe("allEvents")                                                                  // 13
            },                                                                                                         //
            needParticipants: defaultEventValues.needParticipants,                                                     // 15
            needVolunteers: defaultEventValues.needVolunteers,                                                         // 16
            gender: defaultEventValues.gender                                                                          // 17
        };                                                                                                             //
        return _this;                                                                                                  //
    }                                                                                                                  //
                                                                                                                       //
    MosqueEventUpdate.prototype.componentDidMount = function () {                                                      // 6
        function componentDidMount() {                                                                                 //
            document.title = "Mosque Events | MosqueEventForm";                                                        // 22
            //load jQuery for datePicker                                                                               //
            $('.datepicker').pickadate({                                                                               // 21
                selectMonths: true, // Creates a dropdown to control month                                             // 25
                selectYears: 15 // Creates a dropdown of 15 years to control year                                      // 26
            });                                                                                                        // 24
        }                                                                                                              //
                                                                                                                       //
        return componentDidMount;                                                                                      //
    }();                                                                                                               //
                                                                                                                       //
    MosqueEventUpdate.prototype.handleNeedParticipants = function () {                                                 // 6
        function handleNeedParticipants() {                                                                            //
            this.setState({                                                                                            // 31
                needParticipants: !this.state.needParticipants                                                         // 32
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return handleNeedParticipants;                                                                                 //
    }();                                                                                                               //
                                                                                                                       //
    MosqueEventUpdate.prototype.handleNeedVolunteers = function () {                                                   // 6
        function handleNeedVolunteers() {                                                                              //
            this.setState({                                                                                            // 37
                needVolunteers: !this.state.needVolunteers                                                             // 38
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return handleNeedVolunteers;                                                                                   //
    }();                                                                                                               //
                                                                                                                       //
    MosqueEventUpdate.prototype.defaultEventValues = function () {                                                     // 6
        function defaultEventValues() {                                                                                //
            return _events.Events.findOne({ _id: this.props.eventId });                                                // 43
        }                                                                                                              //
                                                                                                                       //
        return defaultEventValues;                                                                                     //
    }();                                                                                                               //
                                                                                                                       //
    MosqueEventUpdate.prototype.handleSubmit = function () {                                                           // 6
        function handleSubmit(e) {                                                                                     //
            var _this2 = this;                                                                                         //
                                                                                                                       //
            e.preventDefault();                                                                                        // 47
                                                                                                                       //
            var name = this.refs.name.value.trim();                                                                    // 49
            var description = this.refs.description.value.trim();                                                      // 50
            var theDate = this.refs.date.value.trim();                                                                 // 51
            var start = this.refs.start.value.trim();                                                                  // 52
            var end = this.refs.end.value.trim();                                                                      // 53
                                                                                                                       //
            var needParticipants = this.state.needParticipants;                                                        // 55
            var numberParticipants = parseInt(this.refs.participantNumber.value.trim());                               // 56
            var needVolunteers = this.state.needVolunteers;                                                            // 57
            var numberVolunteers = parseInt(this.refs.volunteerNumber.value.trim());                                   // 58
            var gender = e.target.elements.gender.value;                                                               // 59
                                                                                                                       //
            console.log(name);                                                                                         // 61
            console.log(description);                                                                                  // 62
            console.log(theDate);                                                                                      // 63
            console.log(needParticipants);                                                                             // 64
            console.log(numberParticipants);                                                                           // 65
            console.log(needVolunteers);                                                                               // 66
            console.log(numberVolunteers);                                                                             // 67
            console.log(gender);                                                                                       // 68
                                                                                                                       //
            Meteor.call('updateEvents', this.props.eventId, name, description, theDate, start, end, needParticipants, numberParticipants, needVolunteers, numberVolunteers, gender, function (error, data) {
                if (error) {                                                                                           // 72
                    Bert.alert('Some input fields are not filled in.', 'danger', 'fixed-top', 'fa-frown-o');           // 73
                } else {                                                                                               //
                    Materialize.toast('Event Updated Successfully!', 4000);                                            // 75
                    FlowRouter.go('/mosqueEventDetails/' + _this2.props.eventId);                                      // 76
                }                                                                                                      //
            });                                                                                                        //
        }                                                                                                              //
                                                                                                                       //
        return handleSubmit;                                                                                           //
    }();                                                                                                               //
                                                                                                                       //
    MosqueEventUpdate.prototype.render = function () {                                                                 // 6
        function render() {                                                                                            //
                                                                                                                       //
            defaultEventValues = this.defaultEventValues();                                                            // 87
                                                                                                                       //
            if (!defaultEventValues) return _react2['default'].createElement(                                          // 89
                'span',                                                                                                //
                null,                                                                                                  //
                'loading.. '                                                                                           //
            );                                                                                                         //
                                                                                                                       //
            console.log(defaultEventValues);                                                                           // 92
                                                                                                                       //
            return _react2['default'].createElement(                                                                   // 94
                'div',                                                                                                 //
                { className: 'row topGap bottomGap' },                                                                 //
                _react2['default'].createElement(                                                                      //
                    'div',                                                                                             //
                    { className: 'col s12 m10 offset-m1' },                                                            //
                    _react2['default'].createElement(                                                                  //
                        'div',                                                                                         //
                        { className: 'card-panel ' },                                                                  //
                        _react2['default'].createElement(                                                              //
                            'h3',                                                                                      //
                            null,                                                                                      //
                            ' Add Event '                                                                              //
                        ),                                                                                             //
                        _react2['default'].createElement(                                                              //
                            'form',                                                                                    //
                            { onSubmit: this.handleSubmit.bind(this), className: 'topGap' },                           //
                            _react2['default'].createElement(                                                          //
                                'div',                                                                                 //
                                { className: 'row' },                                                                  //
                                _react2['default'].createElement(                                                      //
                                    'div',                                                                             //
                                    { className: 'input-field' },                                                      //
                                    _react2['default'].createElement('input', { id: 'name', type: 'text', className: 'validate', ref: 'name', defaultValue: defaultEventValues.name }),
                                    _react2['default'].createElement('label', { htmlFor: 'name' })                     //
                                )                                                                                      //
                            ),                                                                                         //
                            _react2['default'].createElement(                                                          //
                                'div',                                                                                 //
                                { className: 'row' },                                                                  //
                                _react2['default'].createElement(                                                      //
                                    'div',                                                                             //
                                    { className: 'input-field ' },                                                     //
                                    _react2['default'].createElement('textarea', { id: 'description', className: 'materialize-textarea', ref: 'description', defaultValue: defaultEventValues.description }),
                                    _react2['default'].createElement('label', { htmlFor: 'description' })              //
                                )                                                                                      //
                            ),                                                                                         //
                            _react2['default'].createElement(                                                          //
                                'div',                                                                                 //
                                { className: 'row' },                                                                  //
                                _react2['default'].createElement(                                                      //
                                    'div',                                                                             //
                                    { className: 'input-field col m4' },                                               //
                                    _react2['default'].createElement('input', { type: 'date', className: 'datepicker ', id: 'date', ref: 'date', defaultValue: defaultEventValues.theDate }),
                                    _react2['default'].createElement(                                                  //
                                        'label',                                                                       //
                                        { htmlFor: 'date' },                                                           //
                                        'Date'                                                                         //
                                    )                                                                                  //
                                ),                                                                                     //
                                _react2['default'].createElement(                                                      //
                                    'div',                                                                             //
                                    { className: 'input-field col m4' },                                               //
                                    _react2['default'].createElement('input', { type: 'time', id: 'start', ref: 'start', defaultValue: defaultEventValues.start })
                                ),                                                                                     //
                                _react2['default'].createElement(                                                      //
                                    'div',                                                                             //
                                    { className: 'input-field col m4' },                                               //
                                    _react2['default'].createElement('input', { type: 'time', id: 'end', ref: 'end', defaultValue: defaultEventValues.end })
                                )                                                                                      //
                            ),                                                                                         //
                            _react2['default'].createElement(                                                          //
                                'div',                                                                                 //
                                { className: 'row' },                                                                  //
                                _react2['default'].createElement(                                                      //
                                    'div',                                                                             //
                                    { className: 'input-field col m4' },                                               //
                                    _react2['default'].createElement('input', { type: 'checkbox', className: 'filled-in', id: 'needParticipants', ref: 'needParticipants', onClick: this.handleNeedParticipants.bind(this), defaultChecked: this.state.needParticipants }),
                                    _react2['default'].createElement(                                                  //
                                        'label',                                                                       //
                                        { htmlFor: 'needParticipants' },                                               //
                                        'Need Participants?'                                                           //
                                    )                                                                                  //
                                ),                                                                                     //
                                _react2['default'].createElement(                                                      //
                                    'div',                                                                             //
                                    { className: 'input-field col m2' },                                               //
                                    _react2['default'].createElement('input', { id: 'participantNumber', type: 'text', className: 'validate', ref: 'participantNumber', defaultValue: defaultEventValues.numberParticipants }),
                                    _react2['default'].createElement('label', { htmlFor: 'participantNumber' })        //
                                )                                                                                      //
                            ),                                                                                         //
                            _react2['default'].createElement(                                                          //
                                'div',                                                                                 //
                                { className: 'row' },                                                                  //
                                _react2['default'].createElement(                                                      //
                                    'div',                                                                             //
                                    { className: 'input-field col m4' },                                               //
                                    _react2['default'].createElement('input', { type: 'checkbox', id: 'needVolunteers', className: 'filled-in', ref: 'needVolunteers', onClick: this.handleNeedVolunteers.bind(this), defaultChecked: this.state.needVolunteers }),
                                    _react2['default'].createElement(                                                  //
                                        'label',                                                                       //
                                        { htmlFor: 'needVolunteers' },                                                 //
                                        'Need Volunteers?'                                                             //
                                    )                                                                                  //
                                ),                                                                                     //
                                _react2['default'].createElement(                                                      //
                                    'div',                                                                             //
                                    { className: 'input-field col m2' },                                               //
                                    _react2['default'].createElement('input', { id: 'volunteerNumber', type: 'text', className: 'validate', ref: 'volunteerNumber', defaultValue: defaultEventValues.numberVolunteers }),
                                    _react2['default'].createElement('label', { htmlFor: 'volunteerNumber' })          //
                                )                                                                                      //
                            ),                                                                                         //
                            _react2['default'].createElement(                                                          //
                                'div',                                                                                 //
                                { className: 'row' },                                                                  //
                                _react2['default'].createElement(                                                      //
                                    'p',                                                                               //
                                    { className: 'grey-text' },                                                        //
                                    'Event Suitable for?'                                                              //
                                ),                                                                                     //
                                _react2['default'].createElement(                                                      //
                                    'div',                                                                             //
                                    { className: 'col m3' },                                                           //
                                    _react2['default'].createElement('input', { name: 'gender', type: 'radio', id: 'all', value: 'all', ref: 'gender' }),
                                    _react2['default'].createElement(                                                  //
                                        'label',                                                                       //
                                        { htmlFor: 'all' },                                                            //
                                        'Any Gender'                                                                   //
                                    )                                                                                  //
                                ),                                                                                     //
                                _react2['default'].createElement(                                                      //
                                    'div',                                                                             //
                                    { className: 'col m3' },                                                           //
                                    _react2['default'].createElement('input', { name: 'gender', type: 'radio', id: 'male', value: 'm', ref: 'gender' }),
                                    _react2['default'].createElement(                                                  //
                                        'label',                                                                       //
                                        { htmlFor: 'male' },                                                           //
                                        'Male'                                                                         //
                                    )                                                                                  //
                                ),                                                                                     //
                                _react2['default'].createElement(                                                      //
                                    'div',                                                                             //
                                    { className: 'col m3' },                                                           //
                                    _react2['default'].createElement('input', { name: 'gender', type: 'radio', id: 'female', value: 'f', ref: 'gender' }),
                                    _react2['default'].createElement(                                                  //
                                        'label',                                                                       //
                                        { htmlFor: 'female' },                                                         //
                                        'Female'                                                                       //
                                    )                                                                                  //
                                )                                                                                      //
                            ),                                                                                         //
                            _react2['default'].createElement('div', { className: 'topGap' }),                          //
                            _react2['default'].createElement(                                                          //
                                'button',                                                                              //
                                { className: 'btn waves-effect waves-light', type: 'submit', name: 'action' },         //
                                'Submit',                                                                              //
                                _react2['default'].createElement(                                                      //
                                    'i',                                                                               //
                                    { className: 'material-icons right' },                                             //
                                    'send'                                                                             //
                                )                                                                                      //
                            )                                                                                          //
                        )                                                                                              //
                    )                                                                                                  //
                )                                                                                                      //
            );                                                                                                         //
        }                                                                                                              //
                                                                                                                       //
        return render;                                                                                                 //
    }();                                                                                                               //
                                                                                                                       //
    return MosqueEventUpdate;                                                                                          //
}((0, _ultimatejsTrackerReact2['default'])(_react2['default'].Component));                                             //
                                                                                                                       //
exports['default'] = MosqueEventUpdate;                                                                                //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"MosqueHistory.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/ultimatejs:tracker-react","../../api/events.js","../MosqueDashboard/MosqueEventsAll.jsx",function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/MosqueHistory.jsx                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.__esModule = true;                                                                                             //
                                                                                                                       //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                                //
                                                                                                                       //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                       //
                                                                                                                       //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                          //
                                                                                                                       //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                 //
                                                                                                                       //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                            //
                                                                                                                       //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                   //
                                                                                                                       //
var _react = require('react');                                                                                         // 1
                                                                                                                       //
var _react2 = _interopRequireDefault(_react);                                                                          //
                                                                                                                       //
var _ultimatejsTrackerReact = require('meteor/ultimatejs:tracker-react');                                              // 2
                                                                                                                       //
var _ultimatejsTrackerReact2 = _interopRequireDefault(_ultimatejsTrackerReact);                                        //
                                                                                                                       //
var _events2 = require('../../api/events.js');                                                                         // 4
                                                                                                                       //
var _MosqueEventsAll = require('../MosqueDashboard/MosqueEventsAll.jsx');                                              // 6
                                                                                                                       //
var _MosqueEventsAll2 = _interopRequireDefault(_MosqueEventsAll);                                                      //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                      //
                                                                                                                       //
var MosqueDashboard = function (_TrackerReact) {                                                                       //
  (0, _inherits3['default'])(MosqueDashboard, _TrackerReact);                                                          //
                                                                                                                       //
  MosqueDashboard.prototype.componentDidMount = function () {                                                          //
    function componentDidMount() {                                                                                     //
      document.title = "Mosque Events | History";                                                                      // 11
    }                                                                                                                  //
                                                                                                                       //
    return componentDidMount;                                                                                          //
  }();                                                                                                                 //
                                                                                                                       //
  function MosqueDashboard() {                                                                                         // 14
    (0, _classCallCheck3['default'])(this, MosqueDashboard);                                                           //
                                                                                                                       //
    var _this = (0, _possibleConstructorReturn3['default'])(this, _TrackerReact.call(this));                           //
                                                                                                                       //
    _this.state = {                                                                                                    // 17
      subscription: {                                                                                                  // 18
        events: Meteor.subscribe("allEvents")                                                                          // 19
      }                                                                                                                //
    };                                                                                                                 //
    return _this;                                                                                                      //
  }                                                                                                                    //
                                                                                                                       //
  MosqueDashboard.prototype.events = function (_events) {                                                              // 8
    function events() {                                                                                                //
      return _events.apply(this, arguments);                                                                           //
    }                                                                                                                  //
                                                                                                                       //
    events.toString = function () {                                                                                    //
      return _events.toString();                                                                                       //
    };                                                                                                                 //
                                                                                                                       //
    return events;                                                                                                     //
  }(function () {                                                                                                      //
    events = _events2.Events.find({ mosqueId: Meteor.userId(), hasExpired: true }).fetch();                            // 25
    console.log("e " + events);                                                                                        // 26
    return events;                                                                                                     // 27
  });                                                                                                                  //
                                                                                                                       //
  MosqueDashboard.prototype.render = function () {                                                                     // 8
    function render() {                                                                                                //
      console.log(Meteor.userId());                                                                                    // 32
      events = this.events();                                                                                          // 33
                                                                                                                       //
      if (!events) return _react2['default'].createElement(                                                            // 35
        'span',                                                                                                        //
        null,                                                                                                          //
        ' loading '                                                                                                    //
      );                                                                                                               //
                                                                                                                       //
      console.log("events: " + events);                                                                                // 38
                                                                                                                       //
      return _react2['default'].createElement(                                                                         // 40
        'div',                                                                                                         //
        null,                                                                                                          //
        _react2['default'].createElement(                                                                              //
          'h3',                                                                                                        //
          null,                                                                                                        //
          'Past Events'                                                                                                //
        ),                                                                                                             //
        _react2['default'].createElement(_MosqueEventsAll2['default'], { events: events }),                            //
        _react2['default'].createElement(                                                                              //
          'div',                                                                                                       //
          { className: 'fixed-action-btn containedFAB' },                                                              //
          _react2['default'].createElement(                                                                            //
            'a',                                                                                                       //
            { className: 'btn-floating btn-large green darken-2', href: '/mosqueEventForm' },                          //
            _react2['default'].createElement(                                                                          //
              'i',                                                                                                     //
              { className: 'large material-icons ' },                                                                  //
              'add'                                                                                                    //
            )                                                                                                          //
          )                                                                                                            //
        )                                                                                                              //
      );                                                                                                               //
    }                                                                                                                  //
                                                                                                                       //
    return render;                                                                                                     //
  }();                                                                                                                 //
                                                                                                                       //
  return MosqueDashboard;                                                                                              //
}((0, _ultimatejsTrackerReact2['default'])(_react2['default'].Component));                                             //
                                                                                                                       //
exports['default'] = MosqueDashboard;                                                                                  //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"MosqueLogin.jsx":["react","meteor/session",function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/MosqueLogin.jsx                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.__esModule = true;                                                                                             //
                                                                                                                       //
var _react = require('react');                                                                                         // 1
                                                                                                                       //
var _react2 = _interopRequireDefault(_react);                                                                          //
                                                                                                                       //
var _session = require('meteor/session');                                                                              // 2
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                      //
                                                                                                                       //
var MosqueLogin = _react2['default'].createClass({                                                                     // 4
  displayName: 'MosqueLogin',                                                                                          //
                                                                                                                       //
  getInitialState: function () {                                                                                       // 5
    function getInitialState() {                                                                                       // 5
      return { email: '', password: '' };                                                                              // 6
    }                                                                                                                  //
                                                                                                                       //
    return getInitialState;                                                                                            //
  }(),                                                                                                                 //
  componentDidMount: function () {                                                                                     // 8
    function componentDidMount() {                                                                                     // 8
      document.title = "QuickPlate | Login";                                                                           // 9
    }                                                                                                                  //
                                                                                                                       //
    return componentDidMount;                                                                                          //
  }(),                                                                                                                 //
                                                                                                                       //
  handleEmailChange: function () {                                                                                     // 12
    function handleEmailChange(e) {                                                                                    // 12
      this.setState({ email: e.target.value });                                                                        // 13
    }                                                                                                                  //
                                                                                                                       //
    return handleEmailChange;                                                                                          //
  }(),                                                                                                                 //
                                                                                                                       //
  handlePasswordChange: function () {                                                                                  // 16
    function handlePasswordChange(e) {                                                                                 // 16
      this.setState({ password: e.target.value });                                                                     // 17
    }                                                                                                                  //
                                                                                                                       //
    return handlePasswordChange;                                                                                       //
  }(),                                                                                                                 //
                                                                                                                       //
  handleSubmit: function () {                                                                                          // 20
    function handleSubmit(e) {                                                                                         // 20
      e.preventDefault();                                                                                              // 21
      var email = this.state.email;                                                                                    // 22
      var password = this.state.password;                                                                              // 23
                                                                                                                       //
      if (!email || !password) {                                                                                       // 25
        return;                                                                                                        // 26
      }                                                                                                                //
                                                                                                                       //
      Meteor.loginWithPassword(email, password, function (err) {                                                       // 29
        if (err) {} else {                                                                                             // 30
          var back = _session.Session.get("back");                                                                     // 32
          if (back == undefined || back == "") {                                                                       // 33
            FlowRouter.go("mosqueDashboard");                                                                          // 34
          } else {                                                                                                     //
            FlowRouter.go(_session.Session.get("back"));                                                               // 36
            _session.Session.set("back", "");                                                                          // 37
          }                                                                                                            //
        }                                                                                                              //
      });                                                                                                              //
      this.setState({ email: '', password: '' });                                                                      // 42
    }                                                                                                                  //
                                                                                                                       //
    return handleSubmit;                                                                                               //
  }(),                                                                                                                 //
  render: function () {                                                                                                // 44
    function render() {                                                                                                //
      return _react2['default'].createElement(                                                                         // 45
        'div',                                                                                                         //
        { className: 'row' },                                                                                          //
        _react2['default'].createElement(                                                                              //
          'div',                                                                                                       //
          { className: 'col m4 offset-m4 s12 center' },                                                                //
          _react2['default'].createElement(                                                                            //
            'h2',                                                                                                      //
            { className: 'header' },                                                                                   //
            'Login'                                                                                                    //
          ),                                                                                                           //
          _react2['default'].createElement(                                                                            //
            'form',                                                                                                    //
            { onSubmit: this.handleSubmit },                                                                           //
            _react2['default'].createElement(                                                                          //
              'div',                                                                                                   //
              { className: 'row' },                                                                                    //
              _react2['default'].createElement(                                                                        //
                'div',                                                                                                 //
                { className: 'input-field col m12 s12 ' },                                                             //
                _react2['default'].createElement('input', { id: 'email', type: 'email', className: 'validate', onChange: this.handleEmailChange }),
                _react2['default'].createElement(                                                                      //
                  'label',                                                                                             //
                  { htmlFor: 'email', 'data-error': 'Error!' },                                                        //
                  'Email'                                                                                              //
                )                                                                                                      //
              )                                                                                                        //
            ),                                                                                                         //
            _react2['default'].createElement(                                                                          //
              'div',                                                                                                   //
              { className: 'row' },                                                                                    //
              _react2['default'].createElement(                                                                        //
                'div',                                                                                                 //
                { className: 'input-field col m12 s12 ' },                                                             //
                _react2['default'].createElement('input', { id: 'password', type: 'password', className: 'validate', onChange: this.handlePasswordChange }),
                _react2['default'].createElement(                                                                      //
                  'label',                                                                                             //
                  { htmlFor: 'password' },                                                                             //
                  'Password'                                                                                           //
                )                                                                                                      //
              )                                                                                                        //
            ),                                                                                                         //
            _react2['default'].createElement(                                                                          //
              'div',                                                                                                   //
              { className: 'row' },                                                                                    //
              _react2['default'].createElement(                                                                        //
                'button',                                                                                              //
                { className: 'btn waves-effect waves-light green darken-2', type: 'submit', name: 'action' },          //
                'Login',                                                                                               //
                _react2['default'].createElement(                                                                      //
                  'i',                                                                                                 //
                  { className: 'material-icons right' },                                                               //
                  'send'                                                                                               //
                )                                                                                                      //
              )                                                                                                        //
            )                                                                                                          //
          )                                                                                                            //
        )                                                                                                              //
      );                                                                                                               //
    }                                                                                                                  //
                                                                                                                       //
    return render;                                                                                                     //
  }()                                                                                                                  //
});                                                                                                                    //
                                                                                                                       //
exports['default'] = MosqueLogin;                                                                                      //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"MosqueRegister.jsx":["react","meteor/accounts-base",function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/MosqueRegister.jsx                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.__esModule = true;                                                                                             //
                                                                                                                       //
var _react = require('react');                                                                                         // 1
                                                                                                                       //
var _react2 = _interopRequireDefault(_react);                                                                          //
                                                                                                                       //
var _accountsBase = require('meteor/accounts-base');                                                                   // 2
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                      //
                                                                                                                       //
var MosqueRegister = _react2['default'].createClass({                                                                  // 4
  displayName: 'MosqueRegister',                                                                                       //
                                                                                                                       //
  getInitialState: function () {                                                                                       // 5
    function getInitialState() {                                                                                       // 5
      return { name: '', email: '', password: '' };                                                                    // 6
    }                                                                                                                  //
                                                                                                                       //
    return getInitialState;                                                                                            //
  }(),                                                                                                                 //
                                                                                                                       //
  componentDidMount: function () {                                                                                     // 9
    function componentDidMount() {                                                                                     // 9
                                                                                                                       //
      document.title = "SN | Register";                                                                                // 11
      $(document).ready(function () {                                                                                  // 12
        $('select').material_select();                                                                                 // 13
      });                                                                                                              //
    }                                                                                                                  //
                                                                                                                       //
    return componentDidMount;                                                                                          //
  }(),                                                                                                                 //
                                                                                                                       //
  handleWhoChange: function () {                                                                                       // 17
    function handleWhoChange(e) {                                                                                      // 17
      // this.setState({who: e.target.value});                                                                         //
      this.setState({ who: e.target.value });                                                                          // 19
    }                                                                                                                  //
                                                                                                                       //
    return handleWhoChange;                                                                                            //
  }(),                                                                                                                 //
                                                                                                                       //
  handleNameChange: function () {                                                                                      // 22
    function handleNameChange(e) {                                                                                     // 22
      this.setState({ name: e.target.value });                                                                         // 23
    }                                                                                                                  //
                                                                                                                       //
    return handleNameChange;                                                                                           //
  }(),                                                                                                                 //
                                                                                                                       //
  handleEmailChange: function () {                                                                                     // 27
    function handleEmailChange(e) {                                                                                    // 27
      this.setState({ email: e.target.value });                                                                        // 28
    }                                                                                                                  //
                                                                                                                       //
    return handleEmailChange;                                                                                          //
  }(),                                                                                                                 //
                                                                                                                       //
  handlePasswordChange: function () {                                                                                  // 31
    function handlePasswordChange(e) {                                                                                 // 31
      this.setState({ password: e.target.value });                                                                     // 32
    }                                                                                                                  //
                                                                                                                       //
    return handlePasswordChange;                                                                                       //
  }(),                                                                                                                 //
                                                                                                                       //
  handleSubmit: function () {                                                                                          // 35
    function handleSubmit(e) {                                                                                         // 35
      e.preventDefault();                                                                                              // 36
      var who = this.state.who;                                                                                        // 37
      var name = this.state.name;                                                                                      // 38
      var email = this.state.email;                                                                                    // 39
      var password = this.state.password;                                                                              // 40
                                                                                                                       //
      if (!email || !password) {                                                                                       // 42
        return;                                                                                                        // 43
      }                                                                                                                //
                                                                                                                       //
      var options = {                                                                                                  // 46
        email: email,                                                                                                  // 47
        password: password,                                                                                            // 48
        profile: {                                                                                                     // 49
          who: 'mosques',                                                                                              // 50
          name: name                                                                                                   // 51
        }                                                                                                              //
      };                                                                                                               //
      //send request to server                                                                                         //
      _accountsBase.Accounts.createUser(options, function (err) {                                                      // 35
        if (err) {                                                                                                     // 56
          console.log("Register error");                                                                               // 57
        } else {                                                                                                       //
          console.log("Register Success");                                                                             // 59
          FlowRouter.go("mosqueDashboard");                                                                            // 60
        }                                                                                                              //
      });                                                                                                              //
      this.setState({ name: '', email: '', password: '' });                                                            // 63
    }                                                                                                                  //
                                                                                                                       //
    return handleSubmit;                                                                                               //
  }(),                                                                                                                 //
                                                                                                                       //
  render: function () {                                                                                                // 66
    function render() {                                                                                                //
      return _react2['default'].createElement(                                                                         // 67
        'div',                                                                                                         //
        { className: 'row' },                                                                                          //
        _react2['default'].createElement(                                                                              //
          'div',                                                                                                       //
          { className: 'col m4 offset-m4 s12 center' },                                                                //
          _react2['default'].createElement(                                                                            //
            'h2',                                                                                                      //
            { className: 'header ' },                                                                                  //
            'Register'                                                                                                 //
          ),                                                                                                           //
          _react2['default'].createElement(                                                                            //
            'form',                                                                                                    //
            { onSubmit: this.handleSubmit },                                                                           //
            _react2['default'].createElement(                                                                          //
              'div',                                                                                                   //
              { className: 'row' },                                                                                    //
              _react2['default'].createElement(                                                                        //
                'div',                                                                                                 //
                { className: 'input-field col m12 s12 ' },                                                             //
                _react2['default'].createElement('input', { id: 'name', type: 'text', className: 'validate', onChange: this.handleNameChange, value: this.state.name }),
                _react2['default'].createElement(                                                                      //
                  'label',                                                                                             //
                  { htmlFor: 'name' },                                                                                 //
                  'Name'                                                                                               //
                )                                                                                                      //
              )                                                                                                        //
            ),                                                                                                         //
            _react2['default'].createElement(                                                                          //
              'div',                                                                                                   //
              { className: 'row' },                                                                                    //
              _react2['default'].createElement(                                                                        //
                'div',                                                                                                 //
                { className: 'input-field col m12 s12 ' },                                                             //
                _react2['default'].createElement('input', { id: 'email', type: 'email', className: 'validate', value: this.state.email, onChange: this.handleEmailChange }),
                _react2['default'].createElement(                                                                      //
                  'label',                                                                                             //
                  { htmlFor: 'email', 'data-error': 'Error!' },                                                        //
                  'Email'                                                                                              //
                )                                                                                                      //
              )                                                                                                        //
            ),                                                                                                         //
            _react2['default'].createElement(                                                                          //
              'div',                                                                                                   //
              { className: 'row' },                                                                                    //
              _react2['default'].createElement(                                                                        //
                'div',                                                                                                 //
                { className: 'input-field col m12 s12 ' },                                                             //
                _react2['default'].createElement('input', { id: 'password', type: 'password', className: 'validate', value: this.state.password, onChange: this.handlePasswordChange }),
                _react2['default'].createElement(                                                                      //
                  'label',                                                                                             //
                  { htmlFor: 'password' },                                                                             //
                  'Password'                                                                                           //
                )                                                                                                      //
              )                                                                                                        //
            ),                                                                                                         //
            _react2['default'].createElement(                                                                          //
              'div',                                                                                                   //
              { className: 'row' },                                                                                    //
              _react2['default'].createElement(                                                                        //
                'button',                                                                                              //
                { className: 'btn waves-effect waves-light green darken-2', type: 'submit', name: 'action' },          //
                'Sign Up',                                                                                             //
                _react2['default'].createElement(                                                                      //
                  'i',                                                                                                 //
                  { className: 'material-icons right ' },                                                              //
                  'send'                                                                                               //
                )                                                                                                      //
              )                                                                                                        //
            )                                                                                                          //
          )                                                                                                            //
        )                                                                                                              //
      );                                                                                                               //
    }                                                                                                                  //
                                                                                                                       //
    return render;                                                                                                     //
  }()                                                                                                                  //
});                                                                                                                    //
                                                                                                                       //
exports['default'] = MosqueRegister;                                                                                   //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"Register.jsx":["react","meteor/accounts-base",function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/Register.jsx                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.__esModule = true;                                                                                             //
                                                                                                                       //
var _react = require('react');                                                                                         // 1
                                                                                                                       //
var _react2 = _interopRequireDefault(_react);                                                                          //
                                                                                                                       //
var _accountsBase = require('meteor/accounts-base');                                                                   // 2
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                      //
                                                                                                                       //
var Register = _react2['default'].createClass({                                                                        // 4
  displayName: 'Register',                                                                                             //
                                                                                                                       //
  getInitialState: function () {                                                                                       // 5
    function getInitialState() {                                                                                       // 5
      return { name: '', email: '', password: '' };                                                                    // 6
    }                                                                                                                  //
                                                                                                                       //
    return getInitialState;                                                                                            //
  }(),                                                                                                                 //
                                                                                                                       //
  componentDidMount: function () {                                                                                     // 9
    function componentDidMount() {                                                                                     // 9
      document.title = "Mosque Events | Register";                                                                     // 10
      $(document).ready(function () {                                                                                  // 11
        $('select').material_select();                                                                                 // 12
      });                                                                                                              //
    }                                                                                                                  //
                                                                                                                       //
    return componentDidMount;                                                                                          //
  }(),                                                                                                                 //
                                                                                                                       //
  handleWhoChange: function () {                                                                                       // 16
    function handleWhoChange(e) {                                                                                      // 16
      // this.setState({who: e.target.value});                                                                         //
      this.setState({ who: e.target.value });                                                                          // 18
    }                                                                                                                  //
                                                                                                                       //
    return handleWhoChange;                                                                                            //
  }(),                                                                                                                 //
                                                                                                                       //
  handleNameChange: function () {                                                                                      // 21
    function handleNameChange(e) {                                                                                     // 21
      this.setState({ name: e.target.value });                                                                         // 22
    }                                                                                                                  //
                                                                                                                       //
    return handleNameChange;                                                                                           //
  }(),                                                                                                                 //
                                                                                                                       //
  handleEmailChange: function () {                                                                                     // 25
    function handleEmailChange(e) {                                                                                    // 25
      this.setState({ email: e.target.value });                                                                        // 26
    }                                                                                                                  //
                                                                                                                       //
    return handleEmailChange;                                                                                          //
  }(),                                                                                                                 //
                                                                                                                       //
  handlePasswordChange: function () {                                                                                  // 29
    function handlePasswordChange(e) {                                                                                 // 29
      this.setState({ password: e.target.value });                                                                     // 30
    }                                                                                                                  //
                                                                                                                       //
    return handlePasswordChange;                                                                                       //
  }(),                                                                                                                 //
                                                                                                                       //
  handleSubmit: function () {                                                                                          // 33
    function handleSubmit(e) {                                                                                         // 33
      e.preventDefault();                                                                                              // 34
      var who = this.state.who;                                                                                        // 35
      var name = this.state.name;                                                                                      // 36
      var email = this.state.email;                                                                                    // 37
      var password = this.state.password;                                                                              // 38
                                                                                                                       //
      if (!email || !password) {                                                                                       // 40
        return;                                                                                                        // 41
      }                                                                                                                //
                                                                                                                       //
      var options = {                                                                                                  // 44
        email: email,                                                                                                  // 45
        password: password,                                                                                            // 46
                                                                                                                       //
        profile: {                                                                                                     // 48
          who: 'users',                                                                                                // 49
          name: name,                                                                                                  // 50
          gender: e.target.elements.gender.value                                                                       // 51
        }                                                                                                              //
      };                                                                                                               //
      //send request to server                                                                                         //
      _accountsBase.Accounts.createUser(options, function (err) {                                                      // 33
        if (err) {                                                                                                     // 56
          console.log("Register error");                                                                               // 57
        } else {                                                                                                       //
          console.log("Register Success");                                                                             // 59
          FlowRouter.go("eventsView");                                                                                 // 60
        }                                                                                                              //
      });                                                                                                              //
      this.setState({ name: '', email: '', password: '' });                                                            // 63
    }                                                                                                                  //
                                                                                                                       //
    return handleSubmit;                                                                                               //
  }(),                                                                                                                 //
                                                                                                                       //
  render: function () {                                                                                                // 66
    function render() {                                                                                                //
      return _react2['default'].createElement(                                                                         // 67
        'div',                                                                                                         //
        { className: 'row' },                                                                                          //
        _react2['default'].createElement(                                                                              //
          'div',                                                                                                       //
          { className: 'col m4 offset-m4 s12 center' },                                                                //
          _react2['default'].createElement(                                                                            //
            'h2',                                                                                                      //
            { className: 'header ' },                                                                                  //
            'Register'                                                                                                 //
          ),                                                                                                           //
          _react2['default'].createElement(                                                                            //
            'form',                                                                                                    //
            { onSubmit: this.handleSubmit },                                                                           //
            _react2['default'].createElement(                                                                          //
              'div',                                                                                                   //
              { className: 'row' },                                                                                    //
              _react2['default'].createElement(                                                                        //
                'div',                                                                                                 //
                { className: 'input-field-user col m12 s12' },                                                         //
                _react2['default'].createElement('input', { id: 'name', type: 'text', className: 'validate', onChange: this.handleNameChange, value: this.state.name }),
                _react2['default'].createElement(                                                                      //
                  'label',                                                                                             //
                  { htmlFor: 'name' },                                                                                 //
                  'Names'                                                                                              //
                )                                                                                                      //
              )                                                                                                        //
            ),                                                                                                         //
            _react2['default'].createElement(                                                                          //
              'div',                                                                                                   //
              { className: 'row' },                                                                                    //
              _react2['default'].createElement(                                                                        //
                'div',                                                                                                 //
                { className: 'input-field-user col s12' },                                                             //
                _react2['default'].createElement('input', { name: 'gender', type: 'radio', id: 'm', value: 'm', ref: 'gender' }),
                _react2['default'].createElement(                                                                      //
                  'label',                                                                                             //
                  { htmlFor: 'm' },                                                                                    //
                  'Male'                                                                                               //
                ),                                                                                                     //
                _react2['default'].createElement('input', { name: 'gender', type: 'radio', id: 'f', value: 'f', ref: 'gender' }),
                _react2['default'].createElement(                                                                      //
                  'label',                                                                                             //
                  { htmlFor: 'f' },                                                                                    //
                  'Female'                                                                                             //
                )                                                                                                      //
              )                                                                                                        //
            ),                                                                                                         //
            _react2['default'].createElement(                                                                          //
              'div',                                                                                                   //
              { className: 'row' },                                                                                    //
              _react2['default'].createElement(                                                                        //
                'div',                                                                                                 //
                { className: 'input-field-user col m12 s12' },                                                         //
                _react2['default'].createElement('input', { id: 'email', type: 'email', className: 'validate', value: this.state.email, onChange: this.handleEmailChange }),
                _react2['default'].createElement(                                                                      //
                  'label',                                                                                             //
                  { htmlFor: 'email', 'data-error': 'Error!' },                                                        //
                  'Email'                                                                                              //
                )                                                                                                      //
              )                                                                                                        //
            ),                                                                                                         //
            _react2['default'].createElement(                                                                          //
              'div',                                                                                                   //
              { className: 'row' },                                                                                    //
              _react2['default'].createElement(                                                                        //
                'div',                                                                                                 //
                { className: 'input-field-user col m12 s12' },                                                         //
                _react2['default'].createElement('input', { id: 'password', type: 'password', className: 'validate', value: this.state.password, onChange: this.handlePasswordChange }),
                _react2['default'].createElement(                                                                      //
                  'label',                                                                                             //
                  { htmlFor: 'password' },                                                                             //
                  'Password'                                                                                           //
                )                                                                                                      //
              )                                                                                                        //
            ),                                                                                                         //
            _react2['default'].createElement(                                                                          //
              'div',                                                                                                   //
              { className: 'row' },                                                                                    //
              _react2['default'].createElement(                                                                        //
                'button',                                                                                              //
                { className: 'btn waves-effect waves-light blue darken-2', type: 'submit', name: 'action' },           //
                'Sign Up',                                                                                             //
                _react2['default'].createElement(                                                                      //
                  'i',                                                                                                 //
                  { className: 'material-icons right' },                                                               //
                  'send'                                                                                               //
                )                                                                                                      //
              )                                                                                                        //
            )                                                                                                          //
          )                                                                                                            //
        )                                                                                                              //
      );                                                                                                               //
    }                                                                                                                  //
                                                                                                                       //
    return render;                                                                                                     //
  }()                                                                                                                  //
});                                                                                                                    //
                                                                                                                       //
exports['default'] = Register;                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"startup":{"client":{"routes.jsx":["react","react-mounter","meteor/kadira:flow-router-ssr","/imports/ui/layouts/Layout.jsx","/imports/ui/layouts/MainLayout.jsx","/imports/ui/layouts/MosqueLayout.jsx","/imports/ui/layouts/MosqueMainLayout.jsx","/imports/ui/pages/Register.jsx","/imports/ui/pages/Login.jsx","/imports/ui/pages/Home.jsx","/imports/ui/pages/Dashboard.jsx","/imports/ui/pages/EventDetails.jsx","/imports/ui/pages/EventsView.jsx","/imports/ui/pages/History.jsx","/imports/ui/pages/MosqueDashboard.jsx","/imports/ui/pages/MosqueEventForm.jsx","/imports/ui/pages/MosqueEventDetails.jsx","/imports/ui/pages/MosqueLogin.jsx","/imports/ui/pages/MosqueRegister.jsx","/imports/ui/pages/MosqueHistory.jsx","/imports/ui/pages/MosqueEventUpdate.jsx",function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/startup/client/routes.jsx                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _react = require('react');                                                                                         // 1
                                                                                                                       //
var _react2 = _interopRequireDefault(_react);                                                                          //
                                                                                                                       //
var _reactMounter = require('react-mounter');                                                                          // 2
                                                                                                                       //
var _kadiraFlowRouterSsr = require('meteor/kadira:flow-router-ssr');                                                   // 3
                                                                                                                       //
var _Layout = require('/imports/ui/layouts/Layout.jsx');                                                               // 5
                                                                                                                       //
var _Layout2 = _interopRequireDefault(_Layout);                                                                        //
                                                                                                                       //
var _MainLayout = require('/imports/ui/layouts/MainLayout.jsx');                                                       // 6
                                                                                                                       //
var _MainLayout2 = _interopRequireDefault(_MainLayout);                                                                //
                                                                                                                       //
var _MosqueLayout = require('/imports/ui/layouts/MosqueLayout.jsx');                                                   // 7
                                                                                                                       //
var _MosqueLayout2 = _interopRequireDefault(_MosqueLayout);                                                            //
                                                                                                                       //
var _MosqueMainLayout = require('/imports/ui/layouts/MosqueMainLayout.jsx');                                           // 8
                                                                                                                       //
var _MosqueMainLayout2 = _interopRequireDefault(_MosqueMainLayout);                                                    //
                                                                                                                       //
var _Register = require('/imports/ui/pages/Register.jsx');                                                             // 10
                                                                                                                       //
var _Register2 = _interopRequireDefault(_Register);                                                                    //
                                                                                                                       //
var _Login = require('/imports/ui/pages/Login.jsx');                                                                   // 11
                                                                                                                       //
var _Login2 = _interopRequireDefault(_Login);                                                                          //
                                                                                                                       //
var _Home = require('/imports/ui/pages/Home.jsx');                                                                     // 12
                                                                                                                       //
var _Home2 = _interopRequireDefault(_Home);                                                                            //
                                                                                                                       //
var _Dashboard = require('/imports/ui/pages/Dashboard.jsx');                                                           // 13
                                                                                                                       //
var _Dashboard2 = _interopRequireDefault(_Dashboard);                                                                  //
                                                                                                                       //
var _EventDetails = require('/imports/ui/pages/EventDetails.jsx');                                                     // 15
                                                                                                                       //
var _EventDetails2 = _interopRequireDefault(_EventDetails);                                                            //
                                                                                                                       //
var _EventsView = require('/imports/ui/pages/EventsView.jsx');                                                         // 16
                                                                                                                       //
var _EventsView2 = _interopRequireDefault(_EventsView);                                                                //
                                                                                                                       //
var _History = require('/imports/ui/pages/History.jsx');                                                               // 17
                                                                                                                       //
var _History2 = _interopRequireDefault(_History);                                                                      //
                                                                                                                       //
var _MosqueDashboard = require('/imports/ui/pages/MosqueDashboard.jsx');                                               // 18
                                                                                                                       //
var _MosqueDashboard2 = _interopRequireDefault(_MosqueDashboard);                                                      //
                                                                                                                       //
var _MosqueEventForm = require('/imports/ui/pages/MosqueEventForm.jsx');                                               // 19
                                                                                                                       //
var _MosqueEventForm2 = _interopRequireDefault(_MosqueEventForm);                                                      //
                                                                                                                       //
var _MosqueEventDetails = require('/imports/ui/pages/MosqueEventDetails.jsx');                                         // 20
                                                                                                                       //
var _MosqueEventDetails2 = _interopRequireDefault(_MosqueEventDetails);                                                //
                                                                                                                       //
var _MosqueLogin = require('/imports/ui/pages/MosqueLogin.jsx');                                                       // 21
                                                                                                                       //
var _MosqueLogin2 = _interopRequireDefault(_MosqueLogin);                                                              //
                                                                                                                       //
var _MosqueRegister = require('/imports/ui/pages/MosqueRegister.jsx');                                                 // 22
                                                                                                                       //
var _MosqueRegister2 = _interopRequireDefault(_MosqueRegister);                                                        //
                                                                                                                       //
var _MosqueHistory = require('/imports/ui/pages/MosqueHistory.jsx');                                                   // 23
                                                                                                                       //
var _MosqueHistory2 = _interopRequireDefault(_MosqueHistory);                                                          //
                                                                                                                       //
var _MosqueEventUpdate = require('/imports/ui/pages/MosqueEventUpdate.jsx');                                           // 24
                                                                                                                       //
var _MosqueEventUpdate2 = _interopRequireDefault(_MosqueEventUpdate);                                                  //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                      //
                                                                                                                       //
function isAuthenticated(context, redirect) {                                                                          // 26
  if (!Meteor.userId()) {                                                                                              // 27
    Session.set("back", context.path);                                                                                 // 28
    redirect("login");                                                                                                 // 29
  }                                                                                                                    //
}                                                                                                                      //
                                                                                                                       //
function becauseAuthenticated(context, redirect) {                                                                     // 33
  if (Meteor.userId()) {                                                                                               // 34
    redirect("eventsView");                                                                                            // 35
  }                                                                                                                    //
}                                                                                                                      //
                                                                                                                       //
_kadiraFlowRouterSsr.FlowRouter.triggers.enter([isAuthenticated], { except: ["home", "login", "register", "mosqueLogin", "mosqueRegister"] });
_kadiraFlowRouterSsr.FlowRouter.triggers.enter([becauseAuthenticated], { only: ["home", "login", "register", "mosqueLogin", "mosqueRegister"] });
                                                                                                                       //
_kadiraFlowRouterSsr.FlowRouter.route('/', {                                                                           // 42
  action: function () {                                                                                                // 43
    function action() {                                                                                                // 43
      (0, _reactMounter.mount)(_Layout2['default'], {                                                                  // 44
        content: function () {                                                                                         // 45
          function content() {                                                                                         // 45
            return _react2['default'].createElement(_Login2['default'], null);                                         //
          }                                                                                                            //
                                                                                                                       //
          return content;                                                                                              //
        }()                                                                                                            //
      });                                                                                                              //
    }                                                                                                                  //
                                                                                                                       //
    return action;                                                                                                     //
  }(),                                                                                                                 //
  name: "home"                                                                                                         // 48
});                                                                                                                    //
                                                                                                                       //
_kadiraFlowRouterSsr.FlowRouter.route('/register', {                                                                   // 51
  action: function () {                                                                                                // 52
    function action() {                                                                                                // 52
      (0, _reactMounter.mount)(_Layout2['default'], {                                                                  // 53
        content: function () {                                                                                         // 54
          function content() {                                                                                         // 54
            return _react2['default'].createElement(_Register2['default'], null);                                      //
          }                                                                                                            //
                                                                                                                       //
          return content;                                                                                              //
        }()                                                                                                            //
      });                                                                                                              //
    }                                                                                                                  //
                                                                                                                       //
    return action;                                                                                                     //
  }(),                                                                                                                 //
  name: "register"                                                                                                     // 57
});                                                                                                                    //
                                                                                                                       //
_kadiraFlowRouterSsr.FlowRouter.route('/login', {                                                                      // 60
  action: function () {                                                                                                // 61
    function action() {                                                                                                // 61
      (0, _reactMounter.mount)(_Layout2['default'], {                                                                  // 62
        content: function () {                                                                                         // 63
          function content() {                                                                                         // 63
            return _react2['default'].createElement(_Login2['default'], null);                                         //
          }                                                                                                            //
                                                                                                                       //
          return content;                                                                                              //
        }()                                                                                                            //
      });                                                                                                              //
    }                                                                                                                  //
                                                                                                                       //
    return action;                                                                                                     //
  }(),                                                                                                                 //
  name: "login"                                                                                                        // 66
});                                                                                                                    //
                                                                                                                       //
_kadiraFlowRouterSsr.FlowRouter.route("/dashboard", {                                                                  // 69
  action: function () {                                                                                                // 70
    function action() {                                                                                                // 70
      (0, _reactMounter.mount)(_MainLayout2['default'], {                                                              // 71
        content: function () {                                                                                         // 72
          function content() {                                                                                         // 72
            return _react2['default'].createElement(_Dashboard2['default'], null);                                     //
          }                                                                                                            //
                                                                                                                       //
          return content;                                                                                              //
        }()                                                                                                            //
      });                                                                                                              //
    }                                                                                                                  //
                                                                                                                       //
    return action;                                                                                                     //
  }(),                                                                                                                 //
  name: "dashboard"                                                                                                    // 75
});                                                                                                                    //
                                                                                                                       //
//here                                                                                                                 //
_kadiraFlowRouterSsr.FlowRouter.route('/eventDetails/:eventId', {                                                      // 80
  action: function () {                                                                                                // 81
    function action(params) {                                                                                          // 81
      (0, _reactMounter.mount)(_MainLayout2['default'], {                                                              // 82
        content: function () {                                                                                         // 83
          function content() {                                                                                         // 83
            return _react2['default'].createElement(_EventDetails2['default'], { eventId: params.eventId });           //
          }                                                                                                            //
                                                                                                                       //
          return content;                                                                                              //
        }()                                                                                                            //
      });                                                                                                              //
    }                                                                                                                  //
                                                                                                                       //
    return action;                                                                                                     //
  }(),                                                                                                                 //
  name: "eventDetails"                                                                                                 // 86
});                                                                                                                    //
                                                                                                                       //
_kadiraFlowRouterSsr.FlowRouter.route('/eventsView', {                                                                 // 89
  action: function () {                                                                                                // 90
    function action() {                                                                                                // 90
      (0, _reactMounter.mount)(_MainLayout2['default'], {                                                              // 91
        content: function () {                                                                                         // 92
          function content() {                                                                                         // 92
            return _react2['default'].createElement(_EventsView2['default'], null);                                    //
          }                                                                                                            //
                                                                                                                       //
          return content;                                                                                              //
        }()                                                                                                            //
      });                                                                                                              //
    }                                                                                                                  //
                                                                                                                       //
    return action;                                                                                                     //
  }(),                                                                                                                 //
  name: "eventsView"                                                                                                   // 95
});                                                                                                                    //
                                                                                                                       //
_kadiraFlowRouterSsr.FlowRouter.route('/history', {                                                                    // 98
  action: function () {                                                                                                // 99
    function action() {                                                                                                // 99
      (0, _reactMounter.mount)(_MainLayout2['default'], {                                                              // 100
        content: function () {                                                                                         // 101
          function content() {                                                                                         // 101
            return _react2['default'].createElement(_History2['default'], null);                                       //
          }                                                                                                            //
                                                                                                                       //
          return content;                                                                                              //
        }()                                                                                                            //
      });                                                                                                              //
    }                                                                                                                  //
                                                                                                                       //
    return action;                                                                                                     //
  }(),                                                                                                                 //
  name: "history"                                                                                                      // 104
});                                                                                                                    //
                                                                                                                       //
_kadiraFlowRouterSsr.FlowRouter.route('/mosqueDashboard', {                                                            // 107
  action: function () {                                                                                                // 108
    function action() {                                                                                                // 108
      (0, _reactMounter.mount)(_MosqueMainLayout2['default'], {                                                        // 109
        content: function () {                                                                                         // 110
          function content() {                                                                                         // 110
            return _react2['default'].createElement(_MosqueDashboard2['default'], null);                               //
          }                                                                                                            //
                                                                                                                       //
          return content;                                                                                              //
        }()                                                                                                            //
      });                                                                                                              //
    }                                                                                                                  //
                                                                                                                       //
    return action;                                                                                                     //
  }(),                                                                                                                 //
  name: "mosqueDashboard"                                                                                              // 113
});                                                                                                                    //
                                                                                                                       //
_kadiraFlowRouterSsr.FlowRouter.route('/mosqueEventForm', {                                                            // 116
  action: function () {                                                                                                // 117
    function action() {                                                                                                // 117
      (0, _reactMounter.mount)(_MosqueMainLayout2['default'], {                                                        // 118
        content: function () {                                                                                         // 119
          function content() {                                                                                         // 119
            return _react2['default'].createElement(_MosqueEventForm2['default'], null);                               //
          }                                                                                                            //
                                                                                                                       //
          return content;                                                                                              //
        }()                                                                                                            //
      });                                                                                                              //
    }                                                                                                                  //
                                                                                                                       //
    return action;                                                                                                     //
  }(),                                                                                                                 //
  name: "mosqueEventForm"                                                                                              // 122
});                                                                                                                    //
                                                                                                                       //
_kadiraFlowRouterSsr.FlowRouter.route('/MosqueEventUpdate/:eventId', {                                                 // 125
  action: function () {                                                                                                // 126
    function action(params) {                                                                                          // 126
      (0, _reactMounter.mount)(_MosqueMainLayout2['default'], {                                                        // 127
        content: function () {                                                                                         // 128
          function content() {                                                                                         // 128
            return _react2['default'].createElement(_MosqueEventUpdate2['default'], { eventId: params.eventId });      //
          }                                                                                                            //
                                                                                                                       //
          return content;                                                                                              //
        }()                                                                                                            //
      });                                                                                                              //
    }                                                                                                                  //
                                                                                                                       //
    return action;                                                                                                     //
  }(),                                                                                                                 //
                                                                                                                       //
  name: "mosqueEventForm"                                                                                              // 132
});                                                                                                                    //
                                                                                                                       //
_kadiraFlowRouterSsr.FlowRouter.route('/mosqueEventDetails/:eventId', {                                                // 135
  action: function () {                                                                                                // 136
    function action(params) {                                                                                          // 136
      (0, _reactMounter.mount)(_MosqueMainLayout2['default'], {                                                        // 137
        content: function () {                                                                                         // 138
          function content() {                                                                                         // 138
            return _react2['default'].createElement(_MosqueEventDetails2['default'], { eventId: params.eventId });     //
          }                                                                                                            //
                                                                                                                       //
          return content;                                                                                              //
        }()                                                                                                            //
      });                                                                                                              //
    }                                                                                                                  //
                                                                                                                       //
    return action;                                                                                                     //
  }(),                                                                                                                 //
  name: "mosqueEventDetails"                                                                                           // 141
});                                                                                                                    //
                                                                                                                       //
_kadiraFlowRouterSsr.FlowRouter.route('/mosqueHistory', {                                                              // 144
  action: function () {                                                                                                // 145
    function action() {                                                                                                // 145
      (0, _reactMounter.mount)(_MosqueMainLayout2['default'], {                                                        // 146
        content: function () {                                                                                         // 147
          function content() {                                                                                         // 147
            return _react2['default'].createElement(_MosqueHistory2['default'], null);                                 //
          }                                                                                                            //
                                                                                                                       //
          return content;                                                                                              //
        }()                                                                                                            //
      });                                                                                                              //
    }                                                                                                                  //
                                                                                                                       //
    return action;                                                                                                     //
  }(),                                                                                                                 //
  name: "mosqueHistory"                                                                                                // 150
});                                                                                                                    //
                                                                                                                       //
_kadiraFlowRouterSsr.FlowRouter.route('/mosqueLogin', {                                                                // 153
  action: function () {                                                                                                // 154
    function action() {                                                                                                // 154
      (0, _reactMounter.mount)(_MosqueLayout2['default'], {                                                            // 155
        content: function () {                                                                                         // 156
          function content() {                                                                                         // 156
            return _react2['default'].createElement(_MosqueLogin2['default'], null);                                   //
          }                                                                                                            //
                                                                                                                       //
          return content;                                                                                              //
        }()                                                                                                            //
      });                                                                                                              //
    }                                                                                                                  //
                                                                                                                       //
    return action;                                                                                                     //
  }(),                                                                                                                 //
  name: "mosqueLogin"                                                                                                  // 159
});                                                                                                                    //
                                                                                                                       //
_kadiraFlowRouterSsr.FlowRouter.route('/mosqueRegister', {                                                             // 163
  action: function () {                                                                                                // 164
    function action() {                                                                                                // 164
      (0, _reactMounter.mount)(_MosqueLayout2['default'], {                                                            // 165
        content: function () {                                                                                         // 166
          function content() {                                                                                         // 166
            return _react2['default'].createElement(_MosqueRegister2['default'], null);                                //
          }                                                                                                            //
                                                                                                                       //
          return content;                                                                                              //
        }()                                                                                                            //
      });                                                                                                              //
    }                                                                                                                  //
                                                                                                                       //
    return action;                                                                                                     //
  }(),                                                                                                                 //
  name: "mosqueRegister"                                                                                               // 169
});                                                                                                                    //
                                                                                                                       //
//import layout                                                                                                        //
//EXAMPLE:                                                                                                             //
// import {MainLayout} from './layouts/MainLayout.jsx';                                                                //
                                                                                                                       //
//import component the route should call                                                                               //
//EXAMPLE:                                                                                                             //
// import MainComponent from '../imports/ui/components/MainComponent.jsx';                                             //
                                                                                                                       //
//decalre flow routers                                                                                                 //
//EXAMPLE:                                                                                                             //
// FlowRouter.route('/', {                                                                                             //
// 	action(){                                                                                                          //
// 		mount(MainLayout, {                                                                                               //
// 			content: (<MainComponent />)                                                                                     //
// 		})                                                                                                                //
// 	}                                                                                                                  //
// });                                                                                                                 //
                                                                                                                       //
//EXAMPLE of flow router with props                                                                                    //
// FlowRouter.route('/resolution/:id', {                                                                               //
// 	action(params){                                                                                                    //
// 		mount(MainLayout, {                                                                                               //
// 			content: (<ResolutionDetails id={params.id}/>)                                                                   //
// 		})                                                                                                                //
// 	}                                                                                                                  //
// });                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"api":{"events.js":["meteor/meteor","meteor/mongo","meteor/check",function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/events.js                                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.__esModule = true;                                                                                             //
exports.Events = undefined;                                                                                            //
                                                                                                                       //
var _meteor = require('meteor/meteor');                                                                                // 1
                                                                                                                       //
var _mongo = require('meteor/mongo');                                                                                  // 2
                                                                                                                       //
var _check = require('meteor/check');                                                                                  // 3
                                                                                                                       //
// initialise a collection here. mongo collection name should be the file name.                                        //
var Events = exports.Events = new _mongo.Mongo.Collection('events');                                                   // 6
                                                                                                                       //
if (_meteor.Meteor.isServer) {                                                                                         // 8
  //declare all publish relating to the collection here                                                                //
  //EXAMPLE:                                                                                                           //
  _meteor.Meteor.publish('allEvents', function () {                                                                    // 11
    function eventsPublication() {                                                                                     // 11
      return Events.find();                                                                                            // 12
    }                                                                                                                  //
                                                                                                                       //
    return eventsPublication;                                                                                          //
  }());                                                                                                                //
                                                                                                                       //
  _meteor.Meteor.publish("allUsers", function () {                                                                     // 15
    return _meteor.Meteor.users.find({});                                                                              // 16
  });                                                                                                                  //
}                                                                                                                      //
                                                                                                                       //
_meteor.Meteor.methods({                                                                                               // 21
  //declare all methods related to the collection here                                                                 //
  // EXAMPLE:                                                                                                          //
  addEvents: function () {                                                                                             // 24
    function addEvents(name, description, theDate, start, end, needParticipants, numberParticipants, needVolunteers, numberVolunteers, gender) {
      if (!name || !description || !theDate || !start || !end || !needParticipants || !numberParticipants || !needVolunteers || !numberVolunteers || !gender) {
        throw new _meteor.Meteor.Error('Some input fields are not filled in.');                                        // 27
      }                                                                                                                //
      // Make sure the user is logged in before inserting a task                                                       //
      if (!this.userId) {                                                                                              // 25
        throw new _meteor.Meteor.Error('not-authorized');                                                              // 31
      }                                                                                                                //
                                                                                                                       //
      Events.insert({                                                                                                  // 34
        name: name,                                                                                                    // 35
        description: description,                                                                                      // 36
        theDate: theDate,                                                                                              // 37
        start: start,                                                                                                  // 38
        end: end,                                                                                                      // 39
        needParticipants: needParticipants,                                                                            // 40
        numberParticipants: numberParticipants,                                                                        // 41
        needVolunteers: needVolunteers,                                                                                // 42
        numberVolunteers: numberVolunteers,                                                                            // 43
        gender: gender,                                                                                                // 44
        createdAt: new Date(), // current time                                                                         // 45
        mosqueId: _meteor.Meteor.userId(), // _id of logged in user                                                    // 46
        mosqueName: _meteor.Meteor.user().profile.name // username of logged in user                                   // 47
      });                                                                                                              // 34
    }                                                                                                                  //
                                                                                                                       //
    return addEvents;                                                                                                  //
  }(),                                                                                                                 //
  updateEvents: function () {                                                                                          // 50
    function updateEvents(eventId, name, description, theDate, start, end, needParticipants, numberParticipants, needVolunteers, numberVolunteers, gender) {
      if (!name || !description || !theDate || !start || !end || !needParticipants || !numberParticipants || !needVolunteers || !numberVolunteers || !gender) {
        throw new _meteor.Meteor.Error('Some input fields are not filled in.');                                        // 53
      }                                                                                                                //
      // Make sure the user is logged in before inserting a task                                                       //
      if (!this.userId) {                                                                                              // 51
        throw new _meteor.Meteor.Error('not-authorized');                                                              // 57
      }                                                                                                                //
                                                                                                                       //
      Events.update({ _id: eventId }, {                                                                                // 60
        $set: {                                                                                                        // 61
          name: name,                                                                                                  // 62
          description: description,                                                                                    // 63
          theDate: theDate,                                                                                            // 64
          start: start,                                                                                                // 65
          end: end,                                                                                                    // 66
          needParticipants: needParticipants,                                                                          // 67
          numberParticipants: numberParticipants,                                                                      // 68
          needVolunteers: needVolunteers,                                                                              // 69
          numberVolunteers: numberVolunteers,                                                                          // 70
          gender: gender,                                                                                              // 71
          updatedAt: new Date() }                                                                                      // 72
      });                                                                                                              //
    }                                                                                                                  //
                                                                                                                       //
    return updateEvents;                                                                                               //
  }(),                                                                                                                 //
  // current time                                                                                                      //
  participateUser: function () {                                                                                       // 77
    function participateUser(eventId) {                                                                                //
      Events.update({ _id: eventId }, {                                                                                // 78
        $addToSet: {                                                                                                   // 79
          participants: _meteor.Meteor.user().emails[0].address                                                        // 80
        } });                                                                                                          //
    }                                                                                                                  //
                                                                                                                       //
    return participateUser;                                                                                            //
  }(),                                                                                                                 //
  cancelParticipation: function () {                                                                                   // 83
    function cancelParticipation(eventId) {                                                                            //
      Events.update({ _id: eventId }, {                                                                                // 84
        $pull: {                                                                                                       // 85
          participants: _meteor.Meteor.user().emails[0].address                                                        // 86
        } });                                                                                                          //
    }                                                                                                                  //
                                                                                                                       //
    return cancelParticipation;                                                                                        //
  }(),                                                                                                                 //
  volunteerUser: function () {                                                                                         // 89
    function volunteerUser(eventId) {                                                                                  //
      Events.update({ _id: eventId }, {                                                                                // 90
        $addToSet: {                                                                                                   // 91
          volunteers: _meteor.Meteor.user().emails[0].address                                                          // 92
        } });                                                                                                          //
    }                                                                                                                  //
                                                                                                                       //
    return volunteerUser;                                                                                              //
  }(),                                                                                                                 //
  cancelVolunteer: function () {                                                                                       // 96
    function cancelVolunteer(eventId) {                                                                                //
      Events.update({ _id: eventId }, {                                                                                // 97
        $pull: {                                                                                                       // 98
          volunteers: _meteor.Meteor.user().emails[0].address                                                          // 99
        } });                                                                                                          //
    }                                                                                                                  //
                                                                                                                       //
    return cancelVolunteer;                                                                                            //
  }(),                                                                                                                 //
  removeEvent: function () {                                                                                           // 102
    function removeEvent(eventId) {                                                                                    //
      Events.remove(eventId);                                                                                          // 103
    }                                                                                                                  //
                                                                                                                       //
    return removeEvent;                                                                                                //
  }()                                                                                                                  //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"client":{"main.jsx":["../imports/startup/client/routes.jsx",function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/main.jsx                                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _routes = require('../imports/startup/client/routes.jsx');                                                         // 2
                                                                                                                       //
var _routes2 = _interopRequireDefault(_routes);                                                                        //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                      //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".html",".jsx",".css"]});
require("./client/main.jsx");