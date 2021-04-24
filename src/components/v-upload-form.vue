<template>
  <form class="form-upload" v-on:submit="onFormUpload">
    <div class="form-upload--window">
      <p>Загрузить <i class="fa fa-file-image-o" aria-hidden="true"></i> :</p>

      <label class="form-upload--window-wrapper">
        <p>{{ filename ? filename : "Файл не выбран..." }}</p>

        <input
          name="file"
          class="form-upload--window-wrapper-input"
          type="file"
          v-on:change="onFileChoose"
        />

        <i class="fa fa-folder-open-o" aria-hidden="true"></i>
      </label>
      <!-- </div>

    <div class="form-upload--window"> -->

      <p>Введите пароль :</p>

      <label class="form-upload--window-wrapper">
        <input
          class="form-upload--window-wrapper-input-password"
          type="password"
          placeholder="Пароль"
          maxlength="6" 
        />
        <i class="fa fa-key" aria-hidden="true"></i>
      </label>

      <button class="form-upload--button">Загрузить</button>
    </div>
  </form>
</template>








<script >
export default {
  name: "v-upload-form",
  data() {
    return {
      filename: null,
    };
  },
  methods: {
    onFileChoose(event) {
      this.filename = event.target.value;
    },
    onFormUpload(event) {
      event.preventDefault();
      // console.log(event);
      // console.log(event.target.file.files[0]);

      const file = event.target.file.files[0];
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        // console.log(reader.result);
        this.$store.commit("addPicture", {
          data: reader.result,
          width: 100,
          height: 100,
        });
      });

      reader.readAsDataURL(file);
    },
  },
};
</script>



<style lang="scss">
.form {
  min-width: 1200px;
  display: flex;
  justify-items: start;
  align-items: start;
  justify-content: start;
  align-content: start;
}

.form-upload {
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 30px;
  margin: 30px;
  background: yellow;
  border: rgb(119, 95, 95) solid 10px;

  &--window {
    display: flex;
    flex-direction: column;
    align-items: start;
    &-wrapper {
      &-input {
        background: rgb(58, 231, 231);
        display: flex;
        height: 35px;
        align-items: center;
        align-content: center;
        justify-content: center;
        border: none;
      }

      .fa {
        //  ;
      }
    }
  }

  p,
  i {
    padding: 10px 10px;
    margin: 0;
  }

  .form-upload--button {
    display: inline;
    padding: 5px 10px;
    margin: 30px 0 15px 0;
  }
}

.form-window,
.form-upload--button {
  width: 100%;
}

button {
  border-radius: none;
  background: #cecece;
  height: 38px;
  border: none;
}

button :hover {
  // background: #cecece;
}

.form-upload--window {
  display: flex;
  // background: red;
  width: 80%;
}

.form-upload--window-wrapper {
  width: 100%;
  display: flex;
  background: #fefefe;
  align-items: center;
  justify-content: space-between;
 
}

.form-upload--window-wrapper-input-password {
  min-width: 100px;
 
  border:none;
  padding:0 10px ;
}

.form-upload--window-wrapper-input{
  display: none;
}



@media (max-width: 600px) {
  .form-upload {

    padding: 10px;
    margin: 10px;
}
}


</style>