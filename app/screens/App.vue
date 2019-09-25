<template>
  <Page>
    <ActionBar title="Movie search" class="action-bar"/>
    <StackLayout>
      <SearchBar
        hint="Type a movie title"
        v-model="searchTerm"
        @textChange="searchMovie()"
      />
      <MovieList
        @loadMoreItems="nextPage()"
        @tapItem="goToMovie($event)"
      />
    </StackLayout>
  </Page>
</template>

<script>
  import MovieList from "../components/MovieList";
  import MovieDetail from "./MovieDetail";

  export default {
    name: 'App',
    data() {
      return {
        loading: false,
        searchTerm: null,
        page: 1
      }
    },

    methods: {
      searchMovie() {
        this.$store.commit('clearMovies');
        this.page = 1;
        if (this.searchTerm.length < 3 || this.loading) {
          return;
        }
        this.loading = true;
        setTimeout(() => {
          this.loadPage();
        }, 500);
      },
      nextPage() {
        if (this.loading) {
          return;
        }
        this.page ++;
        this.loading = true;
        this.loadPage();
      },
      loadPage() {
        let payload = {
          searchTerm: this.searchTerm,
          page: this.page,
          callback: () => {
            this.loading = false;
          }
        };
        this.$store.dispatch('searchMovies', payload);
      },
      goToMovie(event) {
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
      MovieList
    }
  }
</script>

<style scoped>
</style>
