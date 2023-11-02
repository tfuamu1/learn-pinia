// import { ref,computed } from "vue"
import { defineStore } from 'pinia'

//defineStore() の第2引数に Options オブジェクトを指定して定義する例
export const useCounterStore = defineStore('counter', {
  //初期状態（初期値）を返す関数として定義
  state: () => ({
    counter: 0,
    //以下のデータを追加
    greeting: 'こんにちは！',
    user: {
      name: 'ペリー'
    }
  }),
  //算出プロパティ
  getters: {
    //第１引数にstateを受け取る
    doubleCount: (state) => state.counter * 2,
    //以下の算出プロパティを追加
    tripleCount: (state) => state.counter * 3
  },
  //stateの値を更新する関数
  actions: {
    //thisを利用するのでアロー関数は使えない
    increment() {
      //ストアのインスタンスにthisでアクセス
      this.counter++
    },
    //以下の関数を追加
    decrement() {
      this.counter--
    }
  }
})

// // defineStore()の第2引数にSetup関数（リアクティブなオブジェクトを返す関数）で定義する例
// export const useCounterStore = defineStore('counter', () => {
//     //ref()を使ってリアクティブなデータの初期値を定義
//     const counter = ref(0)
//     //computedメソッドを使用して算出プロパティを定義
//     const doubleCount = computed(() => counter.value * 2)
//     //メソッドを定義（値には.valueでアクセス）
//     function increment() {
//         counter.value++
//     }
//     //公開したいプロパティとメソッドを含むオブジェクトを返す
//     return { counter, doubleCount, increment }
// })
