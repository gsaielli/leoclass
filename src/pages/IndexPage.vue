<template>
  <q-page class="column flex-center">
    <div v-for="item in store.groups" :key="item">{{ item }}</div>
    <div class="row">
      <q-btn color="primary" label="Reload" @click="start" />
      <q-btn color="primary" label="Groups 2" @click="store.groupBy(2)" />
      <q-btn color="primary" label="Groups 3" @click="store.groupBy(3)" />
      <q-btn color="primary" label="Groups 4" @click="store.groupBy(4)" />
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useMainStore } from 'stores/main';

const store = useMainStore();
function start() {
  store.scramble();
  store.groupBy(1);
}

start();
</script>
