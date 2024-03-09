<script setup>
import {
  ref,
  defineAsyncComponent,
  onBeforeMount,
  onMounted,
  onUnmounted,
} from 'vue';

import axios from 'axios';
import MovieList from '../components/MovieList.vue';

const url = import.meta.env.VITE_APP_API;
const token = import.meta.env.VITE_APP_AUTH;

const options = {
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${token}`,
  },
};

const dataMovies = ref([]);
const dataBanner = ref(null);
const pageItem = ref(1);
const scrollComponent = ref(null);

const AsyncBanner = defineAsyncComponent({
  loader: () => import('../components/Banner.vue'),
});

const getMovies = async () => {
  try {
    const response = await axios.get(
      `${url}/movie/popular?language=en-US&page=${pageItem.value}`,
      options
    );
    const { results } = response.data;
    dataMovies.value.push(results);
    dataBanner.value =
      results[randomNumberRange(0, dataMovies.value.length - 1)];
  } catch (err) {
    console.log(err);
  }
};

const randomNumberRange = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const scrollHandler = () => {
  const listElement = scrollComponent.value;
  console.log(
    'el: ',
    listElement.getBoundingClientRect().bottom,
    'window: ',
    window.innerHeight
  );
  if (listElement.getBoundingClientRect().bottom - 50 < window.innerHeight) {
    console.log('yes');
    pageItem.value += 1;
    getMovies();

    console.log(pageItem.value);
    console.log(scrollComponent);
  }
};

onBeforeMount(async () => {
  await getMovies();
  console.log(dataMovies);
});

onMounted(() => {
  window.addEventListener('scroll', scrollHandler);
});

onUnmounted(() => {
  window.removeEventListener('scroll', scrollHandler);
});

console.log();
</script>

<template>
  <AsyncBanner :banner="dataBanner" />
  <div ref="scrollComponent" id="movielist">
    <MovieList :movies="dataMovies" title="Popular Movies" />
  </div>
</template>
