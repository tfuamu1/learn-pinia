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

//Piniaのインスタンス確認する（後で削除）
console.log(pinia)
console.log(pinia.state.value.counter)
