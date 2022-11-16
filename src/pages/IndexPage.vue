<template>
  <q-page class="column flex-center">
    <div v-for="item in store.classe" :key="item">{{ item }}</div>
    <div class="row">
      <q-btn color="primary" label="Sorted" @click="store.order" />
      <q-btn color="primary" label="Random" @click="store.scramble" />
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useMainStore } from 'stores/main';

const store = useMainStore();
</script>
