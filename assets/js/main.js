import { createApp } from 'vue';
import lux from 'lux-design-system';

const headerApp = createApp({});
headerApp.use(lux)
.mount('#lux-header-container')

const footerApp = createApp({});
footerApp.use(lux)
.mount('#lux-footer-container');