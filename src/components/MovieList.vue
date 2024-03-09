<script setup>
import MovieCard from '../components/MovieCard.vue';

const { movies, title } = defineProps(['movies', 'title']);
console.log('title: ', title, 'movies: ', movies);
</script>
<template>
  <div class="w-11/12 mx-auto pb-10">
    <div class="text-4xl font-bold text-white py-10">
      <h2 class="border-b-2 divide-x-0 border-white w-fit">
        {{ title }}
      </h2>
    </div>
    <div
      class="grid md:grid-cols-3 grid-cols-1 auto-rows-max gap-10"
      v-for="(movie, i) in movies"
      :key="i"
    >
      <div class="w-full h-full relative" v-for="m in movie">
        <MovieCard :data="m" :key="m.id" />
      </div>
    </div>
  </div>
</template>
