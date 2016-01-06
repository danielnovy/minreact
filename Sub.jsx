
var React = require('react');

var Sub = React.createClass({
    render: function() {
        return <div onClick={this.props.click}>Hello, you mother fucker!</div>;
    }
});

module.exports = Sub;
