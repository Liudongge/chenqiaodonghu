// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

// import iview
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

// import jquery.fullPage.css
import './assets/css/jquery.fullPage.css';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});
