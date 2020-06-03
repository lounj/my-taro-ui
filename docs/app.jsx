/* eslint-disable react/forbid-elements */
import * as Nerv from 'nervjs';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Docs from './pages/docs';

class App extends Nerv.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="doc-wraoper">
          <Route path="/" component={Docs} />
        </div>
      </Router>
    )
  }
}

Nerv.render(<App />, document.getElementById('container'));