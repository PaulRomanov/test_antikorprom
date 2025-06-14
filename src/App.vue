<template>
  <div id="app">
    <Head>
      <title v-if="content && content.data && content.data.title">{{ content.data.title }}</title>
      <meta
        name="description"
        v-if="content && content.data && content.data.description"
        :content="content.data.description"
      />
    </Head>
    <div>Below is Builder Content:</div>
    <div v-if="canShowContent">
      <div>Page title: {{ content && content.data && content.data.title }}</div>

      <Content
        v-if="content"
        :model="model"
        :content="content"
        :api-key="apiKey"
        :customComponents="registeredBuilderComponents"
      />
      <div v-else>Loading Builder Content...</div>
    </div>
    <div v-else>Content not Found</div>
  </div>
</template>

<script setup>
import { Content, fetchOneEntry, isPreviewing } from '@builder.io/sdk-vue';
import { onMounted, ref } from 'vue';
import { registeredComponents } from './builder-components';

const content = ref(null);
const apiKey = '01c2675efaec463c9d6212c7d6d0610a';
const canShowContent = ref(false);
const model = 'HomePage';

const registeredBuilderComponents = ref(registeredComponents);

onMounted(async () => {
  console.log('App.vue mounted. Attempting to fetch Builder content...');
  try {
    const fetchedContent = await fetchOneEntry({
      model,
      apiKey,
      userAttributes: {
        urlPath: window.location.pathname,
      },
    });

    console.log('Fetched content:', fetchedContent);

    content.value = fetchedContent;

    canShowContent.value = content.value ? true : isPreviewing();
    console.log('canShowContent:', canShowContent.value);

  } catch (error) {
    console.error('Error fetching Builder content:', error);
    canShowContent.value = false;
  }
});
</script>

<style>

</style>
