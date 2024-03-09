<script setup>
import { ref, defineAsyncComponent, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import { getLocalIdMovie } from '../lib/utils';
import axios from 'axios';

const router = useRouter();
const movieTitle = router.currentRoute.value.params.slug;

const url = import.meta.env.VITE_APP_API;
const token = import.meta.env.VITE_APP_AUTH;
const options = {
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${token}`,
  },
};

const { date } = getLocalIdMovie();

const AsyncMovieDetail = defineAsyncComponent({
  loader: () => import('../components/MovieDetail.vue'),
  timeout: 1000,
});

const detail = ref(null);

const getDataDetail = async () => {
  try {
    const { data } = await axios.get(
      `${url}/search/movie?query=${movieTitle}&primary_release_year=${date}`,
      options
    );
    const res = data.results[0];
    detail.value = res;
  } catch (err) {
    console.log(err);
  }
};

onBeforeMount(async () => {
  await getDataDetail();
});
</script>
<template>
  <AsyncMovieDetail :datamovie="detail" />
</template>
