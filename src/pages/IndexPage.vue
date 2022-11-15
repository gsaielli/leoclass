<template>
  <q-page class="column flex-center">
    <div v-for="item in classe" :key="item">- {{ item }}</div>
    <div class="row">
      <q-btn color="primary" label="In ordine" @click="inOrdine" />
      <q-btn color="primary" label="Mescola" @click="mescola" />
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue';

const classe = ref([
  'Aielli',
  'Bianchi',
  'Calzolari',
  'Caridei',
  'Choksi',
  'Corradini',
  'Ferito',
  'Maciuca',
  'Marchesini',
  'Mazzocchi',
  'Melotti',
  'Miyasaka',
  'Nargiso',
  'Paglianti',
  'Perini',
  'Portaro',
  'Princiotta',
  'Scardovi',
  'Tavares',
  'Torlai',
  'Trevisan',
  'Ziruolo',
]);

function inOrdine() {
  classe.value.sort();
}

function mescola() {
  classe.value.sort(function () {
    return 0.5 - Math.random();
  });
}

const mescolati = computed(() => {
  var ret = Array.from(classe.value);
  return ret.sort(function () {
    return 0.5 - Math.random();
  });
});
</script>
