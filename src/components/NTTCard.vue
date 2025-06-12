<template>
  <div class="ntt-card">
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
    <img v-if="image" :src="image" alt="Card Image" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'NTT Card Title',
    },
    content: {
      type: String,
      default: 'Card content here',
    },
    image: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
.ntt-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  background-color: #f9f9f9;
}
img {
  max-width: 100%;
  height: auto;
}
</style>