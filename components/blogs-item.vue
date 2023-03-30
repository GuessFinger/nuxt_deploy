<template>
  <section class="headingMd padding1px">
    <h2 class="headingLg">Blog</h2>
    <ul class="list">
      <li v-for="{id,date,title} in blogs" :key="id"
          class="listItem">
        <NuxtLink :to="`/posts/${id}`">{{ title }}</NuxtLink>
        <br>
        <small class="lightText">
          {{ date }}
        </small>
      </li>
    </ul>
  </section>
</template>
<script setup>
import {getPostsData} from "../posts";
import {reactive} from 'vue';

let blogs = reactive([]);
onMounted(() => {
  blogs.push(...getPostsData());
});

</script>
