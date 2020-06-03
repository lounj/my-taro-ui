import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import './style.scss';
class Menu extends Taro.Component {
  constructor(props) {
    super(props);
    this.menuList = [{
      id: 'Button',
      name: '按钮'
    }, {
      id: 'Badge',
      name: '徽标'
    }];
    this.state = {
      currentId: 'Button'
    };
  }
  render() {
    const { currentId } = this.state;
    return <View className="menu-list-wrap">
        {this.menuList.map(item => <View className={`menu-item ${currentId === item.id ? 'active' : ''}`} key={item.id}>{item.id} {item.name}</View>)}
      </View>;
  }
}
export default Menu;