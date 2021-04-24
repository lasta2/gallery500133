<template>
  <div id="app">
    <vGallery :minRowHeight="100" :maxRowHeight="250"></vGallery>
  <v-upload-form></v-upload-form>


  </div>
</template>

<script>
import vGallery from "./components/v-gallery.vue";
import vUploadForm from "./components/v-upload-form.vue";

export default {
  name: "App",
  components: {
    vGallery,
    vUploadForm
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
