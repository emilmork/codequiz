var React = require('react');

var TodaysTask = React.createClass({

  render: function() {
    return (
        <div>
            Velkommen { this.props.params.user }
        </div>
      );
  }

});

module.exports = TodaysTask;