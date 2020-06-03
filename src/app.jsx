import Taro from '@tarojs/taro';
import Index from './pages/index/index'
import './app.scss'

class App extends Taro.Component {
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  config = {
    pages: [
      'pages/index/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  render () {
    return <Index />
  }
}

Taro.render(<App />, document.getElementById('app'))
