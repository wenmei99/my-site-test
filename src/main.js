import { createApp } from 'vue'
import App from './App.vue'
import { Button, Tabbar, TabbarItem } from 'vant'
import 'vant/lib/index.css'

const app = createApp(App)
app.use(Button).use(Tabbar).use(TabbarItem)
app.mount('#app')
