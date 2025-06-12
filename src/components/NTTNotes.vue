<template>
  <ul class="ntt-notes">
    <li v-for="(note, index) in parsedNotes" :key="index">{{ note }}</li>
  </ul>
</template>

<script>
export default {
  props: {
    notes: {
      type: String,
      default: 'Note 1\nNote 2\nNote 3',
    },
  },
  computed: {
    parsedNotes() {
      return this.notes.split('\n').filter(note => note.trim());
    },
  },
};
</script>

<style scoped>
.ntt-notes {
  list-style-type: disc;
  padding-left: 20px;
  margin: 10px 0;
}
.ntt-notes li {
  margin-bottom: 5px;
}
</style>