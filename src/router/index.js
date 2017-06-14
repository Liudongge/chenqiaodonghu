import Vue from 'vue';
import Router from 'vue-router';
import home from '@/views/home';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'homepage',
        component: home,
        children: [
            {
                path: '/shidi',
                name: 'shidi',
                component: resolve => require(['../views/shidi'], resolve)
            },
            {
                path: '/canyin',
                name: 'canyin',
                component: resolve => require(['../views/canyin'], resolve)
            },
            {
                path: '/zhusu',
                name: 'zhusu',
                component: resolve => require(['../views/zhusu'], resolve)
            },
            {
                path: '/chenqiao',
                name: 'chenqiao',
                component: resolve => require(['../views/chenqiao'], resolve)
            },
            {
                path: '/contractUs',
                name: 'contractUs',
                component: resolve => require(['../views/contractUs'], resolve)
            },
            {
                path: '/test',
                name: 'test',
                component: resolve => require(['../views/fromZhihu'], resolve)
            }
        ]
    }]
});
