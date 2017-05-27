import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import ETQ from '@/components/ETQ';
import home from '@/components/home';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'Hello',
        component: Hello
    }, {
        path: '/ETQ',
        name: 'ETQ',
        component: ETQ
    }, {
        path: '/homepage',
        name: 'homepage',
        component: home
    }]
});
