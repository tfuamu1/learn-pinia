<!-- <script setup>
//定義したストアの関数をインポート
import { useCounterStore } from '@/stores/counter.js'
//インポートした関数を呼び出してストアをインスタンス化（ストアを生成）して変数に代入
const store = useCounterStore() //setup()内でuseXxxxStore()を実行
</script> -->

<script>
import { useCounterStore } from '@/stores/counter.js';
export default {
  setup() {
    //インポートした関数を呼び出してストアをインスタンス化して変数に代入
    const store = useCounterStore() //setup()内でuseXxxxStore()を実行
    return {
      //テンプレートで仕様するストアのインスタンス全体を返すことができます
      store,
    }
  },
}
</script>

<template>
  <h1>Let's try Pinia!</h1>
  <!-- 生成したストアを介してcounterにアクセス -->
  <p>store.counter : {{ store.counter }}</p>
</template>

<style scoped></style>
