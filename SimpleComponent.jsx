var React = require('react');

var Sub = require('./Sub.jsx');

var SimpleComponent = React.createClass({
    getInitialState: function() {
        return {
            numItems: 1
        };
    },
    click: function() {
        this.setState({numItems:this.state.numItems+1});
    },
    render: function() {
        var items = [];
        for (var i = 0; i < this.state.numItems; i++) {
            items.push(<Sub key={'sub-'+i} click={this.click}/>);
        }
        return (<div>{items}</div>);
    }
});

exports.SimpleComponent = SimpleComponent;
