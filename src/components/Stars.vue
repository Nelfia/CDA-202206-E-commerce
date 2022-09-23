<template>
    <div>
      <i class="fa-solid fa-star" v-for="i in stars"></i>
      <i class="fa-regular fa-star" v-for="i in emptyStars"></i>
    </div>
  </template>
  
  <script>
    export default {
      props: {
        stars: {
          type: Number,
          required: true
        }
      },
      data: function() {
        return {
          maxStars: 5
        }
      },
      computed: {
        'emptyStars': function() {
          return this.maxStars - this.stars;
        }
      }
    }
  </script>