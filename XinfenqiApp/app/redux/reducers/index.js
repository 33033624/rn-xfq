/**
* Created by wuran on 16/12/21.
* 页面容器，页面提供导航等页面基础配置
*/

export * from './routerFlux.js'

const initialItems = {}

export default function test1(state = initialItems, action) {
    switch(action.type) {
        case 'TEST1':
            return {
              test: 'nicai'
            }
        default:
            return state;
    }
}
