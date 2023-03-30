<template>
  <article>
    <h2 class="headingXL">{{ loadObject.title }}</h2>
    <div class="lightText">
      {{ loadObject.date }}
    </div>
    <div v-html="loadObject.content"></div>
  </article>
  <div class="backToHome">
    <NuxtLink to="/">← Back to home</NuxtLink>
  </div>
</template>

<script setup>
import {useRoute} from "nuxt/app";
import axios from "axios";
import {reactive} from "vue";
import {getPostById} from "../../posts";

const route = useRoute();
const postId = route.params.id;
let loadObject = reactive({});
const {id, title, contentHtml, date} = getPostById(postId);
loadObject.id = id;
loadObject.title = title;
loadObject.content = contentHtml;
loadObject.date = date;
</script>

<style>
.heading2Xl {
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
}

.headingXl {
  font-size: 2rem;
  line-height: 1.3;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
}

.headingLg {
  font-size: 1.5rem;
  line-height: 1.4;
  margin: 1rem 0;
}

.headingMd {
  font-size: 1.2rem;
  line-height: 1.5;
}

.borderCircle {
  border-radius: 9999px;
}

.colorInherit {
  color: inherit;
}

.padding1px {
  padding-top: 1px;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.listItem {
  margin: 0 0 1.25rem;
}

.lightText {
  color: #999;
}

</style>
