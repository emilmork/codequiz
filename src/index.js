var React = require('react');
var ReactDOM = require('react-dom');
import Login from './components/login/Login';
var TodaysTask = require('./components/TodaysTask');
var { IndexRoute, Router, Route, browserHistory } = require('react-router');
import { LookRoot, Presets } from 'react-look'
import App from './components/App';

ReactDOM.render(
    <LookRoot>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Login} />
          <Route path="/tasks/:user" component={TodaysTask} />
        </Route>
      </Router>
    </LookRoot>, document.getElementById('root'));

module.hot.accept();

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


































