import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    counter: 0,
    classe: [
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
    ],
    groups: [],
  }),
  getters: {
    doubleCount(state) {
      return state.counter * 2;
    },
  },
  actions: {
    increment() {
      this.counter++;
    },
    order() {
      this.classe.sort();
    },
    scramble() {
      this.classe.sort(function () {
        return 0.5 - Math.random();
      });
    },
    groupBy(chunkSize) {
      this.groups = [];
      for (let i = 0; i < this.classe.length; i += chunkSize) {
        const chunk = this.classe.slice(i, i + chunkSize);
        this.groups.push(chunk);
      }
    },
  },
});
