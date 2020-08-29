import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入通用的样式
import './styles/base.less'
import './styles/iconfont.css'
// 导入vant
import Vant from 'vant'
import 'vant/lib/index.css'
// 导入amfe-flexible库
import 'amfe-flexible'

import HmHeader from './components/HmHeader.vue'
import HmLogo from './components/HmLogo.vue'
// 全局注册组件
Vue.component('hm-header', HmHeader)
Vue.component('hm-logo', HmLogo)

// 全局的把vant所有的组件都导入好了
Vue.use(Vant)

// 关闭控制台的提示消息
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
