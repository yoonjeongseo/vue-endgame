<template>
  <div class="contents">
    <div class="form-wrapper">
      <h1 class="page-header">Create Post</h1>
      <form class="form">
        <div>
          <label for="title">Title :</label>
          <input id="title" type="text" />
        </div>
        <div>
          <label for="contents">contents :</label>
          <textarea id="contents" type="text" rows="5" />
        </div>
        <button type="submit" class="btn">Create</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}
.btn {
  color: white;
}
</style>
