<script setup>
//定義したストアの関数をインポート
import { useCounterStore } from '@/stores/counter.js'
//作成したコンポーネントをインポート
import PiniaSample from './components/PiniaSample.vue';
//インポートした関数を呼び出してストアをインスタンス化（ストアを生成）して変数に代入
const store = useCounterStore() //setup()内でuseXxxxStore()を実行
</script>

<!-- <script>
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
</script> -->

<template>
  <div>
  <h1 class="h1">Let's try Pinia!</h1>
  <!-- 生成したストアを介してcounterにアクセス -->
  <p class="counter">store.counter : {{ store.counter }}</p>
  <!-- 追加したコンポーネント -->
  <PiniaSample/>
</div>
</template>

<style scoped>
.h1 {
  color: darkgreen;
  font-size: 2.6rem;
}

.counter {
font-size: 1.2rem;
}

</style>
