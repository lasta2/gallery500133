import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pictures: [
      {
        image: "1.jpg",
        width: 1280,
        height: 720,
      },
      {
        image: "2.jpg",
        width: 300,
        height: 200,
      },
      {
        image: "3.jpg",
        width: 860,
        height: 948,
      },
      {
        image: "4.jpg",
        width: 600,
        height: 980,
      },
      {
        image: "5.jpg",
        width: 800,
        height: 600,
      },
      {
        image: "6.jpg",
        width: 960,
        height: 540,
      },

      {
        image: "7.jpg",
        width: 600,
        height: 338,
      },
      {
        image: "8.jpg",
        width: 700,
        height: 914,
      },
      {
        image: "9.jpg",
        width: 540,
        height: 604,
      },
      {
        image: "10.jpg",
        width: 728,
        height: 696,
      },
      {
        image: "11.jpg",
        width: 1558,
        height: 1706,
      },
      {
        image: "12.jpg",
        width: 840,
        height: 667,
      },
      {
        image: "13.jpg",
        width: 900,
        height: 900,
      },
      {
        image: "14.jpg",
        width: 1280,
        height: 560,
      },
      {
        image: "15.jpg",
        width: 735,
        height: 568,
      },
      {
        image: "16.jpg",
        width: 1078,
        height: 904,
      },
      {
        image: "17.jpg",
        width: 1600,
        height: 1200,
      },
      {
        image: "18.jpg",
        width: 1194,
        height: 768,
      },
      {
        image: "19.jpg",
        width: 1500,
        height: 500,
      },
      {
        image: "20.jpg",
        width: 1430,
        height: 645,
      },
      {
        image: "21.jpg",
        width: 895,
        height: 1056,
      },
    ]
  },
  mutations: {
    addPicture(state, picture) {
      state.pictures.push(picture);
    }
  },
  actions: {
  },
  modules: {
  }
})
