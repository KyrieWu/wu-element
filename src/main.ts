import { createApp } from 'vue'
import App from './App.vue'
import ElContainer from './components/container'
import ElButton from './components/button'
import ElForm from './components/Form'
import ElDialog from './components/Dialog'

const app = createApp(App)
app.config.globalProperties.$AILEMENTE = {
    size: 'large'
}
app.use(ElContainer)
    .use(ElButton)
    .use(ElForm)
    .use(ElDialog)
    .mount('#app')
