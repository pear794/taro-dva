/*
 * @Description: 
 * @Author: 乔彦辉
 * @Date: 2021-03-12 14:41:23
 * @LastEditTime: 2021-03-12 14:41:24
 * @LastEditors: 乔彦辉
 */
export default {
  namespace: 'index',
  state: {
    count: 1,
  },
  effects: {},
  reducers: {
    setCount(state, { payload }) {
      return { ...state, count: payload }
    }
  }
}