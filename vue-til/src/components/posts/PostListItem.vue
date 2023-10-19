<template>
  <li>
    <div class="post-title">{{ postItem.title }}</div>
    <div class="post-contents">{{ postItem.contents }}</div>
    <div class="post-time">
      {{ postItem.createdAt }}
      <i class="icon ion-md-create"></i>
      <i class="icon ion-md-trash" @click="deleteItem"></i>
    </div>
  </li>
</template>

<script>
import { deletePosts } from '@/api/posts';

export default {
  props: {
    postItem: {
      type: Object,
      require: true,
    },
  },
  methods: {
    async deleteItem() {
      if (confirm('you want to delete it?')) {
        await deletePosts(this.postItem._id);
        this.$emit('refresh');
        // console.log('삭제');
      }
    },
  },
};
</script>

<style></style>
