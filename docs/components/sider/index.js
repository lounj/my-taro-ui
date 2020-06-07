import * as Nerv from 'nervjs';
import { menuList } from '../../pages/const';
import { Link } from 'react-router-dom';
import './sider.scss';

class Sider extends Nerv.Component {
  render() {
    return (
      <div className="taro-ui-sider">
        {menuList.map(item => (
          <Link to={`/docs/${item.id}`} className="sider-item">{item.title}</Link>
        ))}
      </div>
    )
  }
}

export default Sider;
