<template>
  <div class="contents">
    <div class="form-wrapper">
      <h1 class="page-header">Edit Post</h1>
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">Title :</label>
          <input id="title" type="text" v-model="title" />
        </div>
        <div>
          <label for="contents">contents :</label>
          <textarea id="contents" type="text" rows="5" v-model="contents" />
          <p v-if="!isContentsVaild" class="validation-text warning">
            Contents length must be less than 200
          </p>
        </div>
        <button type="submit" class="btn">Edit</button>
      </form>
      <p class="log">{{ logmessage }}</p>
    </div>
  </div>
</template>

<script>
import { fetchPost, editPost } from '@/api/posts';

export default {
  data() {
    return {
      title: '',
      contents: '',
      logmessage: '',
    };
  },
  computed: {
    isContentsVaild() {
      return this.contents.length <= 200;
    },
  },
  methods: {
    async submitForm() {
      const id = this.$route.params.id;
      try {
        await editPost(id, {
          title: this.title,
          contents: this.contents,
        });
        this.$router.push('/main');
      } catch (error) {
        console.log(error);
        this.logmessage = error;
      }
    },
  },
  async created() {
    const id = this.$route.params.id;
    const { data } = await fetchPost(id);
    this.title = data.title;
    this.contents = data.contents;
    console.log(data);
  },
};
</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}
.btn {
  color: white;
}
</style>
