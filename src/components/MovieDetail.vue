<script setup>
import { getImage, genreIdToText } from '../lib/utils';
import { Icon } from '@iconify/vue';

const { datamovie } = defineProps({ datamovie: Object });

const {
  title,
  vote_average: vote,
  overview,
  release_date: release,
  original_language: lang,
  backdrop_path: background,
  poster_path: poster,
  genre_ids,
  popularity,
} = datamovie || {};

const genres = genreIdToText(genre_ids);
</script>

<template>
  <div
    class="h-screen w-screen grayscale-0"
    :style="{ backgroundImage: `url(${getImage(background)})` }"
  >
    <div class="w-full h-full bg-gradient-to-r from-black to-transparent">
      <div class="pt-20 w-11/12 mx-auto h-full grid grid-cols-2 items-center">
        <div class="w-[400px] rounded-lg mx-auto overflow-hidden">
          <img
            :src="getImage(poster)"
            :alt="title"
            :title="title"
            loading="lazy"
            class="h-full w-full transition delay-200 hover:scale-110"
          />
        </div>
        <div class="flex flex-col gap-3 p-5 text-white">
          <h1 class="text-4xl font-bold">{{ title }}</h1>
          <div class="flex flex-wrap gap-5">
            <button
              v-for="genre in genres"
              class="bg-gradient-to-r from-[#eae5c9] to-[#6cc6cb] shadow-md md:px-10 px-3 text-sm text-slate-500 py-1 rounded-3xl"
            >
              {{ genre }}
            </button>
          </div>
          <div class="flex gap-10">
            <div class="flex items-center gap-3">
              <Icon icon="uiw:date" color="#7ac9ca" />
              <span class="text-sm">{{ release }}</span>
            </div>
            <div>
              <p class="flex justify-center gap-1">
                <Icon icon="carbon:star" color="#7ac9ca" height="22.5" />
                <span class="text-sm">{{ Math.round(vote) }}/10</span>
              </p>
            </div>
            <div>
              <p class="flex justify-center gap-1">
                <Icon icon="ion:people" color="#7ac9ca" height="22.5" />
                <span class="text-sm">{{ Math.round(popularity) }}</span>
              </p>
            </div>
            <div>
              <p class="flex justify-center gap-1">
                <Icon
                  icon="material-symbols:language"
                  color="#7ac9ca"
                  height="22.5"
                />
                <span class="text-sm">{{ lang }}</span>
              </p>
            </div>
          </div>
          <p class="text-sm">{{ overview }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
