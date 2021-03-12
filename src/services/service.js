/*
 * @Description: 
 * @Author: 乔彦辉
 * @Date: 2021-03-12 14:52:39
 * @LastEditTime: 2021-03-12 15:00:40
 * @LastEditors: 乔彦辉
 */
import Taro from '@tarojs/taro'

const baseUrl = ''

export default ({ method='GET', data={}, url }) => {
  return Taro.request({
    url: baseUrl + url,
    data,
    header: {
      'Content-Type': 'application/json'
    },
    method: method.toUpperCase(),
  }).then(res => {
    const { data: resData} = res;
    return resData
  })
}
