import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'   //PiniaからcreatePiniaをインポート
import App from './App.vue'

//Vueアプリのインスタンスを生成
const app = createApp(App)
//Piniaのインスタンスを生成
const pinia = createPinia()

//アプリのuse()メソッドを使ってPiniaを読み込む（プラグインとしてアプリに渡す）
app.use(pinia)
app.mount('#app')
console.log(pinia)
