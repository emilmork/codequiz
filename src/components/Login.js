var React = require('react');
var { browserHistory } = require('react-router');

var Login = React.createClass({

  getInitialState: function() {
    return {
      user: null
    }
  },

  render: function() {
    var { user } = this.state;
 
    return (
      <div>
        <form>
          <input 
            placeholder="bruker" 
            value={ this.state.user } 
            onChange={ this.updateUser }/>
            <button onClick={ this.logIn }>Log inn</button>
        </form>
      </div>
    )
  },

  logIn: function(e) {
    e.preventDefault();
    
    browserHistory.push(`/task/${this.state.user}`);
  },

  updateUser: function(e) {
    this.setState({ user: e.target.value });
  }
});

module.exports = Login;
