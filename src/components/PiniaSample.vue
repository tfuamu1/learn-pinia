<script setup>
import { useCounterStore } from '@/stores/counter.js'
//インポートした関数を呼び出してストアをインスタンス化して変数に代入
const store = useCounterStore()
</script>

<template>
  <h2>Pinia Sample</h2>
  <p>store.doubleCount: {{ store.doubleCount }}</p>
  <p>store.tripleCount: {{ store.tripleCount }}</p>
  <div>
    <button @click="store.increment">Increment</button>
    <button @click="store.decrement">Decrement</button>
  </div>
  <p>{{ store.greeting }} {{ store.user.name }}</p>
  <input v-model="store.user.name"/>
</template>