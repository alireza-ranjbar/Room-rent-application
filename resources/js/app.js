/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import {createApp} from 'vue';
import { h } from 'vue';
import "core-js/features/object/assign";
import App from './components/App.vue';
import router from './router.js';
import {store} from './store';
 
const app = createApp({
    render() {
        return h(App)
    }
});
app.use(router);
app.use(store);
app.mount('#app');
