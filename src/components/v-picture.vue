<template>
  <div class="picture">
    <img
      :src="src"
      :width="picture.width - 4"
      :height="picture.height - 4"
      alt="img"
    />
  </div>
</template>

<script>
export default {
  name: "v-picture",

  computed: {
    src() {
      if (this.picture.image) {
        return require("../assets/gallery/" + this.picture.image);
      } else {
        return this.picture.data;
      }
    },
  },

  data() {
    return {};
  },

  props: {
    picture: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {},
};
</script>

<style>
.picture {
  font-size: 0;
  /*margin: 0.2rem;*/
  padding: 2px;
}
</style>


