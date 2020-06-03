import Taro from '@tarojs/taro';
import { View } from '@tarojs/components'
import './index.scss'

class Index extends Taro.Component {
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='home'>
         hello 
      </View>
    )
  }
}

export default Index;
