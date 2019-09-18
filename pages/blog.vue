<template>
  <div>
    <div
      v-for="post in page.posts" :key="post.permalink"
      class="post border-gray-400 border-b mb-12">
      <h2 class="text-3xl font-bold">
        <saber-link class="text-copy-primary" :to="post.permalink">{{ post.title }}</saber-link>
      </h2>
      <div class="text-copy-secondary mb-4">
        <span>{{ formatDate(post.createdAt) }}</span>
      </div>

      <div class="text-lg mb-4">
        {{ post.summary }}
      </div>

      <div class="mb-8">
        <saber-link class="uppercase" :to="post.permalink">Read more</saber-link>
      </div>
    </div> <!-- end post -->
  </div>
</template>

<script>
import formatDateMixin from '../mixins/formatDateMixin'

export const data = {
  layout: 'blog',
  injectAllPosts: true,
  title: 'Blog',
}

export default {
  props: ['page'],
  mixins: [formatDateMixin],
}
</script>
