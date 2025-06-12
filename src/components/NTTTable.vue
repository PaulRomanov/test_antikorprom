<template>
  <table class="ntt-table">
    <tr v-for="(row, index) in parsedData" :key="index">
      <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    data: {
      type: String,
      default: 'Row1Col1,Row1Col2\nRow2Col1,Row2Col2',
    },
  },
  computed: {
    parsedData() {
      return this.data.split('\n').map(row => row.split(','));
    },
  },
};
</script>

<style scoped>
.ntt-table {
  width: 100%;
  border-collapse: collapse;
  margin: 10px 0;
}
.ntt-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
</style>