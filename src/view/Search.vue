<script setup>
import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import MovieList from '../components/MovieList.vue';

const router = useRouter();
const titleQuery = router.currentRoute.value.query.title; 

const dataSearch = ref([]);

const url = import.meta.env.VITE_APP_API;
const token = import.meta.env.VITE_APP_AUTH;
const options = {
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${token}`,
  },
};

const getSearchData = async () => {
  try {
    const { data } = await axios.get(
      `${url}/search/movie?query=${titleQuery}`,
      options
    );
    const res = data.results;
    dataSearch.value.push(res);
  } catch (err) {
    console.log(err);
  }
};

onBeforeMount(async () => {
  await getSearchData();
  console.log('data: ', dataSearch.value);
});
</script>
<template>
  <MovieList :movies="dataSearch" :title="titleQuery" />
</template>
