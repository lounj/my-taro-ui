import * as Nerv from 'nervjs';
import { Switch, Route } from 'react-router-dom';
import * as View from '../view';
import Sider from '../components/sider';
import { menuList } from './const';
import './docs.scss';

class Docs extends Nerv.Component {
  render() {
    return (
      <div className="taro-ui-doc-wrap">
        <Sider />
        <div className="taro-ui-md">
          <Switch>
            {menuList.map(item => (
              <Route path={`/docs/${item.id}`} component={item.component} />
            ))}
          </Switch>
        </div>
      </div>
    )
  }
}

export default Docs;
