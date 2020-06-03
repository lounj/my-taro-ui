import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import './style.scss';
class Layout extends Taro.PureComponent {
  render() {
    const { children } = this.props;
    return <View className="my-taro-ui-wrap">
        {children}
      </View>;
  }
}
export default Layout;