<script setup>
import {
  getImage,
  titleToUrlDetails,
  genreIdToText,
  setLocalIdMovie,
} from '../lib/utils';
import { RouterLink } from 'vue-router';

const { banner } = defineProps({ banner: Object });
const {
  title,
  backdrop_path: background,
  original_language: lang,
  release_date: date,
  overview,
  genre_ids,
  id,
} = banner || {};

const genres = genreIdToText(genre_ids);
</script>

<template>
  <div class="relative h-[500px] w-screen overflow-hidden">
    <img
      :src="getImage(background)"
      class="absolute top-0 left-0 object-cover z-back h-[500px] md:h-auto w-full"
      :alt="title"
      :title="title"
      loading="lazy"
    />
    <div
      class="z-10 text-white bg-gradient-to-r from-black to-transparent h-full"
    >
      <div
        class="w-11/12 mx-auto flex flex-col md:gap-5 gap-2 md:justify-center md:p-0 px-3 py-5 justify-end h-full"
      >
        <h1 class="md:text-5xl text-xl font-extrabold">
          {{ title ?? 'Failed To Load' }}
        </h1>
        <div class="flex gap-2 W-3/6 flex-wrap">
          <button
            v-for="genre in genres"
            class="bg-gradient-to-r from-[#eae5c9] to-[#6cc6cb] shadow-md md:px-10 px-3 text-sm text-slate-500 py-1 rounded-3xl"
          >
            {{ genre }}
          </button>
        </div>
        <p class="md:text-sm text-xs md:w-1/2 w-full">{{ overview ?? '' }}</p>
        <RouterLink
          :to="titleToUrlDetails(title)"
          @click="setLocalIdMovie(id, date)"
          class="bg-gradient-to-r from-[#eae5c9] to-[#6cc6cb] shadow-md shadow-green-400 rounded-sm transition delay-100 w-fit md:px-14 px-8 py-2 text-sm text-slate-500 hover:text- font-bold"
        >
          Details
        </RouterLink>
      </div>
    </div>
  </div>
</template>
