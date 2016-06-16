var React = require('react');

const todaysTask = {
    _id: 123,
    date: "2016-04-29",
    title: "Hvilken dag er det i dag?",
    answeredBy: [
        {
            username: "Jalla",
            answer: "I dag er i dag"
        }
    ]
}

var currentAnswer = "";

var TodaysTask = React.createClass({

  render: function() {
    return (
        <div>
            <h1>Velkommen { this.props.params.user }</h1>
            <h2>Dagens oppgave</h2>
            <div>{ todaysTask.title }</div>
            <form onSubmit={ this._submitAnswer }>
                <label>Ditt svar:</label>
                <textarea onChange={ this._onTyping } />
                <input type="submit" value="Send ditt svar!" />
            </form>
            <div>
                <h3>Andre svar</h3>
                { this.renderAnswers() }
            </div>
        </div>
      );
  },

  renderAnswers: function() {
    return (
        <dl>
            { todaysTask.answeredBy.map(this.renderAnswer) }
        </dl>
    );
  },

  renderAnswer: function(answer) {
        var item = [];
        item.push(dt(answer));
        item.push(dd(answer));

        return item;
  },

  _onTyping: function(e) {
    currentAnswer = e.target.value;
  },

  _submitAnswer: function(e) {
    e.preventDefault();

    todaysTask.answeredBy.push({
        username: this.props.params.user,
        answer: currentAnswer
    })

    currentAnswer = "";
  }

});

function dt(answer) {
    return <dt>{ answer.username }</dt>
}
function dd(answer) {
    return <dd>{ answer.answer }</dd>
}
module.exports = TodaysTask;
