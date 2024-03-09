<script setup>
import { Icon } from '@iconify/vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const sumbitHandler = e => {
  router.push({
    path: '/search',
    query: {
      title: e.target[0].value,
    },
  });
};
</script>

<template>
  <header class="w-screen backdrop-blur-sm shadow-sm fixed z-50">
    <nav class="w-11/12 mx-auto flex md:py-5 py-2 justify-between">
      <RouterLink
        to="/"
        class="flex gap-5 text-[#7ac9ca] items-center font-bold"
      >
        <Icon icon="vaadin:movie" color="#7ac9ca" width="50" />
        <span class="text-2xl">FMovie</span>
      </RouterLink>

      <div class="flex items-center h-100">
        <ul
          class="flex md:gap-5 gap-2 md:text-lg text-[#7ac9ca] font-semibold text-xs items-center"
        >
          <li>
            <RouterLink to="/"> Home </RouterLink>
          </li>

          <li>
            <form @submit.prevent="sumbitHandler">
              <div class="relative">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Enter To Submit"
                  class="text-sm py-2 font-thin px-10 rounded-full placeholder-[#7ac9ca]"
                />
                <button
                  type="submit"
                  class="absolute md:top-[7px] top-[3px] md:right-[15px] right-[5px] mix-blend-luminosity outline-none"
                >
                  <Icon icon="iconamoon:search-light" color="#7ac9ca" />
                </button>
              </div>
            </form>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
