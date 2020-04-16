import Vue from 'vue'
import App from './App.vue'
import moreTreeTable from "more-tree-table"
import canEditTable from "can-edit-table"
import ComplexGrid from "complex-grid"
Vue.use(moreTreeTable);
Vue.use(canEditTable);
Vue.use(ComplexGrid)

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
