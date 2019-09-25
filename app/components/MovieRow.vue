<template>
    <GridLayout columns="80, *" rows="auto, auto" class="list-row">
      <Label
        :text="movie.title"
        colSpan="2"
        :row="0"
        :col="0"
        class="list-title"
      />
      <StackLayout :row="1" :col="0" paddingRight="8" paddingTop="4">
        <Image :src="urlImage()"/>
        <Progress :value="movie.vote_average * 10"/>
      </StackLayout>
      <Label
        :textWrap="true"
        :text="movie.overview ? movie.overview : 'Movie without overview.'"
        :row="1"
        :col="1"
      />
    </GridLayout>
</template>

<script>
  import config from "../config";
  export default {
    name: "MovieRow",
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
        return config.baseImagePath + config.posterIconSize + this.movie.poster_path
      }
    }
  }
</script>

<style scoped>

</style>