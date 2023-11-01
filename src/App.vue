<script setup>
//定義したストアの関数をインポート
import { useCounterStore } from '@/stores/counter'
//インポートした関数を呼び出してストアをインスタンス化（ストアを生成）して変数に代入
const store = useCounterStore() //setup()内でuseXxxxStore()を実行
</script>

<template>
  <h1>Let's try Pinia!</h1>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
