<template>
  <ListView for="movie in movies" height="100%" @itemTap="onItemTap">
    <v-template>
      <MovieRow :movie="movie"/>
    </v-template>
  </ListView>
</template>

<script>
  import MovieRow from "./MovieRow";
  import {mapGetters} from "vuex";
  import MovieDetail from "../screens/MovieDetail";
  export default {
    name: "MovieList",
    computed: {
      ...mapGetters({
        movies: 'movies'
      })
    },
    methods: {
      onItemTap(event) {
        this.$navigateTo(MovieDetail, {
          transition: {},
          transitioniOS: {},
          transitionAndroid: {},
          props: {
            movie: event.item,
          }
        });
      }
    },
    components: {
      MovieRow
    }
  }
</script>

<style scoped>

</style>