<template>
  <ListView
    for="movie in movies"
    height="100%"
    @itemTap="$emit('tapItem', $event)"
    @loadMoreItems="$emit('loadMoreItems')"
  >
    <v-template>
      <MovieRow :movie="movie"/>
    </v-template>
  </ListView>
</template>

<script>
  import MovieRow from "./MovieRow";
  import {mapGetters} from "vuex";
  export default {
    name: "MovieList",
    computed: {
      ...mapGetters({
        movies: 'movies'
      })
    },
    components: {
      MovieRow
    }
  }
</script>

<style scoped>

</style>