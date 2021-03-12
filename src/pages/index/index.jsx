import { Component } from 'react'
import { connect } from 'react-redux'
import Taro from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

import { add, minus, asyncAdd } from '../../actions/counter'

import './index.less'


@connect(({ index }) => ({
  ...index
}))
class Index extends Component {
  
  componentDidMount() {
    Taro.showToast({
      title: '12232'
    })
  }

  handleClick = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'index/setCount',
      payload: 5*Math.random()
    })
  }

  render () {

    const { count } = this.props;

    return (
      <View className='index' onClick={this.handleClick}>
        {count}
      </View>
    )
  }
}

export default Index

