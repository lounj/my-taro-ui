import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components';
import { MenuState, MenuProps } from './Types';
import './style.scss';

class Menu extends Component<MenuProps, MenuState> {
  constructor(props: MenuProps) {
    super(props);
    this.state = {
      currentId: 'Button',
    }
  }

  menuList = [{
    id: 'Button',
    name: '按钮',
  },
  {
    id: 'Badge',
    name: '徽标',
  }
];

  render() {
    const { currentId } = this.state;

    return (
      <View className='menu-list-wrap'>
        {this.menuList.map(item => (
          <View className={`menu-item ${currentId === item.id ? 'active' : ''}`} key={item.id}>{item.id} {item.name}</View>
        ))}
      </View>
    )
  }
}

export default Menu;
