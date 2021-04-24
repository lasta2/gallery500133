<template>
  <div class="v-gallery">
    <div class="v-gallery--title">
      <h6>Галерея</h6>
    </div>
    <div class="v-gallery--content" ref="content">
      <div :key="i" v-for="(row, i) in rows" class="v-gallery--row">
        <v-picture
          v-for="picture in row.scaledPictures()"
          :key="picture.id"
          :picture="picture"
        ></v-picture>
      </div>
    </div>
  </div>
</template>


<script>
// import { defineComponent } from '@vue/composition-api'
import vPicture from "./v-picture";

// Класс строка. Размещает картинки в строку, масштабируя так, чтобы высота всех была одинаковой, а ширина строки была равна desiredWidth
class Row {
  constructor(desiredWidth, minHeight, maxHeight) {
    this.desiredWidth = desiredWidth; // какую хотим ширину строки. если картинок достаточно, что будет именно эта ширина
    this.minHeight = minHeight; // при этом, вписывая картинки в строку, хотим получить высоту не меньше minHeight
    this.maxHeight = maxHeight; // и не больше maxHeight
    this.pictures = []; // а это массив картинок в этой строке
  }

  // добавляем картинку в строку
  add(picture) {
    this.pictures.push(picture);
  }

  // проверяем, что можно добавить в строку эту картинку, не сделав при этом высоту строки слишком маленькой
  canAdd(picture) {
    // здесь картинка как бы добавляется в массив pictures и проверяется высота.
    // (на самом деле создается копия массива pictures и ей в конец добавляется новая картинка)
    return this.height([...this.pictures, picture]) > this.minHeight;
  }

  // какая будет высота строки с такими картинками.
  height(pictures) {
    if (pictures.length === 0) {
      return this.maxHeight;
    }

    // Это суммарная ширина картинок, если их отмасштабировать под высоту в 1 пиксель.
    const sumWidth = pictures.reduce((s, picture) => {
      return s + picture.width / picture.height;
    }, 0);

    // На сколько нужно домножить эту суммарную ширину, чтобы получить ширину desiredWidth
    const k = this.desiredWidth / sumWidth;

    // Это и будет высота строки, но если строка получилась слишком высокой, высота обрежется до maxHeight (в этом случае строка получится уже, чем надо)
    return Math.min(k, this.maxHeight);
  }

  // Получаем массив с отмасштабированными картинками
  scaledPictures() {
    const k = this.height(this.pictures);

    return this.pictures.map((p) => {
      return {
        ...p,
        width: (p.width / p.height) * k,
        height: k,
      };
    });
  }
}

export default {
  name: "v-gallery",
  components: {
    vPicture,
  },
  mounted() {
    setInterval(
      function () {
        if (this.$refs.content) {
          this.desiredWidth = this.$refs.content.clientWidth;
        }
      }.bind(this),
      50
    );
  },
  computed: {
    pictures() {
      return this.$store.state.pictures;
    },

    // строим массив из строк
    rows() {
      const desiredWidth = this.desiredWidth;

      const rows = []; // все строки

      // текущая строка
      let row = new Row(desiredWidth, this.minRowHeight, this.maxRowHeight);

      // идем по всем картинкам
      this.pictures.forEach((picture, i) => {
        // Если больше нельзя добавить картинку (но при этом есть хотя бы одна картинка в строке),
        // то переходим на новую строку.
        if (row.pictures.length != 0 && !row.canAdd(picture)) {
          rows.push(row); // старую строку кладем в массив
          row = new Row(desiredWidth, this.minRowHeight, this.maxRowHeight); // дальше работаем с новой строкой
        }

        // добавляем картинку в строку
        row.add(picture);

        // если дошли до последней картинки, то добавляем строку в массив строк
        if (i === this.pictures.length - 1) {
          rows.push(row);
        }
      });

      return rows;
    },
  },

  data() {
    return {
      desiredWidth: 100,
    };
  },

  props: {
    minRowHeight: Number,
    maxRowHeight: Number,
  },
};
</script>


<style lang="scss">
.v-gallery {
  display: flex;
  flex-direction: column;
  &--title {
  }

  &--content {
    display: flex;
    flex-direction: column;
  }

  &--row {
    display: flex;
  }
}
</style>
