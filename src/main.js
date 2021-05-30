import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import ECharts from 'vue-echarts'
import { use } from 'echarts/core'

import VueAMap from 'vue-amap'

import axios from 'axios'
import VueAxios from 'vue-axios'

import {
  CanvasRenderer
} from 'echarts/renderers'
import {
  BarChart
} from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent
} from 'echarts/components'

use([
  CanvasRenderer,
  BarChart,
  GridComponent,
  TooltipComponent
]);

// register globally (or you can do it locally)
Vue.component('v-chart', ECharts)
Vue.use(ElementUI)
Vue.use(VueAMap);
Vue.use(VueAxios, axios)

VueAMap.initAMapApiLoader({
  key: 'ce73658784de5e67a760ddca0c95bf8f',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.Heatmap'],
  v: '1.4.4'
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
