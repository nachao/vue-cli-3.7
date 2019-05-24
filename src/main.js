import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import ELEMENT from 'element-ui'
import axios from 'axios'

import AxiosInterceptor from './service/interceptor'
import routes from './router/routes'

Vue.use(ELEMENT)
Vue.use(VueRouter)
Vue.use(Vuex)

Vue.config.productionTip = false

// Init
const intercept = new AxiosInterceptor(axios.interceptors)
const router = new VueRouter({ routes })
const app = new Vue({ router })

// Mount
app.$mount('#app')
