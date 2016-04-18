import React from 'react';
import { browserHistory } from 'react-router';
import look, { StyleSheet } from 'react-look'

var Login = React.createClass({

  getInitialState: function() {
    return {
      user: null
    }
  },

  componentDidMount: function() {
    this.refs.formInput.focus();
  },

  render: function() {
    var { user } = this.state;
 
    return (
      <div className={styles.login}>
        <form onSubmit={ this.submit }>
          <input
            ref="formInput"
            className={styles.input} 
            placeholder="Username + enter" 
            value={ this.state.user } 
            onChange={ this.updateUser }/>
            <input className={styles.submitButton} type="submit" />
        </form>
      </div>
    )
  },

  submit: function(e) {
    e.preventDefault();
    browserHistory.push(`/tasks/${this.state.user}`);
  },

  updateUser: function(e) {
    this.setState({ user: e.target.value });
  }
});

const styles = StyleSheet.create({
  login: {
    textAlign: 'center',
    marginTop: '10rem'
  },
  input: {
    border: 'none',
    borderBottom: '1px solid gray',
    height: 40,
    fontSize: '1rem',
    ':focus': {
      outline: 'none'
    }
  },
  submitButton: {
    visibility: 'hidden'
  }
});

export default look(Login);
