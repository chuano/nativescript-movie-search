<template>
  <Page>
    <ActionBar title="Movie search" class="action-bar"/>
    <StackLayout>
      <SearchBar hint="Type a movie title" v-model="searchTerm" @textChange="searchMovie()"/>
      <MovieList/>
    </StackLayout>
  </Page>
</template>

<script>
  import MovieList from "../components/MovieList";

  export default {
    name: 'App',
    data() {
      return {
        searchTerm: null
      }
    },

    methods: {
      searchMovie() {
        if (this.searchTerm.length < 3) {
          this.$store.commit('setMovies', []);
          return;
        }

        let payload = {
          searchTerm: this.searchTerm
        };
        this.$store.dispatch('searchMovies', payload);
      }
    },
    components: {
      MovieList
    }
  }
</script>

<style scoped>
</style>
