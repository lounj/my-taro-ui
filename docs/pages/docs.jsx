import * as Nerv from 'nervjs';
import { Switch, Route } from 'react-router-dom';
import ButtonView from '../view/Button';

class Docs extends Nerv.Component {
  render() {
    return (
      <div>
        <div>sss</div>
        <Switch>
          <Route path="/docs/button" component={ButtonView} />
        </Switch>
      </div>
    )
  }
}