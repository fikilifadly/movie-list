<script setup>
import {
  getImage,
  titleToUrlDetails,
  genreIdToText,
  setLocalIdMovie,
} from '../lib/utils';
import { Icon } from '@iconify/vue';

const { data } = defineProps({ data: Object });
const {
  id,
  title,
  vote_average: vote,
  overview,
  release_date: date,
  poster_path: background,
} = data;
</script>

<template>
  <div
    class="group relative rounded-md overflow-hidden shadow-lg h-full flex flex-col min-h-[500px]"
  >
    <img
      class="w-full absolute top-0 left-0 z-back group-hover:scale-125 group-hover:blur-sm transition delay-200"
      :src="getImage(background)"
      alt="Sunset in the mountains"
      loading="lazy"
      :alt="title"
      :title="title"
    />
    <div class="absolute top-4 right-4 bg-orange-400 py-1 px-2 rounded-md">
      <p class="flex justify-center gap-1">
        <span class="text-sm text-white">{{ vote }}</span>
        <Icon icon="carbon:star" color="white" />
      </p>
    </div>
    <RouterLink
      :to="titleToUrlDetails(title)"
      @click="setLocalIdMovie(id, date)"
      class="absolute top-0 left-0 w-full h-full"
    ></RouterLink>
    <div
      class="px-6 py-4 h-full w-0 group-hover:w-full group-hover:bg-gradient-to-t group-hover:from-black group-hover:via-[#0006] group-hover:to-[#0003] group-hover:transition group-hover:flex hidden flex-col justify-center"
    >
      <h3 class="font-bold text-xl text-white">
        {{ title }}
      </h3>
      <p class="text-white text-xs my-2 min-h-[100px]">
        {{ overview }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
