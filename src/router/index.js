import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ETQ from '@/components/ETQ'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Hello',
        component: Hello
    }, {
        path: '/ETQ',
        name: 'ETQ',
        component: ETQ
    }]
})
