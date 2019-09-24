<template>
  <Page>
    <ActionBar :title="movie.title" class="action-bar">
      <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack"/>
    </ActionBar>
    <ScrollView>
      <StackLayout padding="12">
        <Label :text="movie.title" :textWrap="true" class="first-title"/>
        <Image :src="urlImage()" class="detal-poster"/>
        <Label text="Average vote" class="second-title"/>
        <Label :text="movie.vote_average + '/10'"/>
        <Progress :value="movie.vote_average * 10"/>
        <Label text="Overview" class="second-title"/>
        <Label :textWrap="true" :text="movie.overview ? movie.overview : 'Movie without overview.'"/>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
  import config from "../config";

  export default {
    name: "MovieDetail",
    props: {
      movie: {
        default: null
      }
    },
    methods: {
      urlImage() {
        if (!this.movie.poster_path) {
          return 'https://raw.githubusercontent.com/chuano/vuejs-movie-review/master/src/assets/default-poster-92.jpg';
        }
        return config.baseImagePath + config.posterBigSize + this.movie.poster_path
      }
    }
  }
</script>

<style scoped>
</style>