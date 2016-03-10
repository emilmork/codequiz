var React = require('react');
var ReactDOM = require('react-dom');
var Login = require('./components/Login');
var TodaysTask = require('./components/TodaysTask');
var { IndexRoute, Router, Route, browserHistory } = require('react-router');

const App = ({ children }) => {
  return (
    <div>
      <div>Meny</div>
      { children }
    </div>
  );
};

ReactDOM.render(<Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Login} />
        <Route path="/task/:user" component={TodaysTask} />
      </Route>
    </Router>, document.getElementById('app-js'));


/*

var task = {
  name: 'Navn på oppgave',
  type: 'text',
  description: 'Beskrivelse i markdown eller bare tekst',
  anwser: "2"
}


var user = {
  id: 'emilmork',
  finishedTasks: [
  {
    id: '1r23jg2',
    startedAt: '21-02-2015:123:21Z+0',
    answer: "2"
  }
  ]
}
*/


































