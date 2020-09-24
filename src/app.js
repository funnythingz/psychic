import Vue from 'vue'
import IndexVue from './components/index.vue'

document.addEventListener('DOMContentLoaded', () => {
    const App = new Vue({
        el: document.getElementById('app'),
        render: h => h(IndexVue),
    })
})
