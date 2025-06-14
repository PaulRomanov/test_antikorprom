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

    <h2>Локально добавленные компоненты:</h2>

    <NTTCard
      title="Пример карточки"
      content="Это содержимое локально добавленной карточки. Вы можете изменить этот текст."
      image="https://placehold.co/300x200/cccccc/000000?text=Изображение+карточки"
    />

    <NTTTable
      data="Заголовок1,Заголовок2,Заголовок3\nДанные1,Данные2,Данные3\nЕщеДанные1,ЕщеДанные2,ЕщеДанные3"
    />

    <NTTNotes
      notes="Это заметка номер один.\nВторая заметка здесь.\nИ последняя, третья заметка."
    />

    <hr style="margin: 20px 0;"> 

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
import { Content, fetchOneEntry, isPreviewing, getBuilderSearchParams } from '@builder.io/sdk-vue';
import { onMounted, ref } from 'vue';
import { registeredComponents } from './builder-components';

const content = ref(null);
const apiKey = '01c2675efaec463c9d6212c7d6d0610a';
const canShowContent = ref(false);
const model = 'bff6d6c0bbed40a28f124d20d3477f98';

const registeredBuilderComponents = ref(registeredComponents);

onMounted(async () => {
  console.log('App.vue mounted. Attempting to fetch Builder content...');
  try {
    const fetchedContent = await fetchOneEntry({
      model: 'bff6d6c0bbed40a28f124d20d3477f98',
      apiKey: '01c2675efaec463c9d6212c7d6d0610a',
      options: getBuilderSearchParams(new URL(location.href).searchParams), 
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
