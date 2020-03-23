import Vue from 'vue'
import App from './App.vue'
import moreTreeTable from "more-tree-table"
import canEditTable from "can-edit-table"
Vue.use(moreTreeTable);
Vue.use(canEditTable);

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
