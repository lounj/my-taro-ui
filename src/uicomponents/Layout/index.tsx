import Taro, { PureComponent } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './style.scss';

class Layout extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <View className="my-taro-ui-wrap">
        {children}
      </View>
    )
  }
}

export default Layout;
