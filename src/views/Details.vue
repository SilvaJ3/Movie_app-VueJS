<template>
  <div class="movie">
    <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="">
    <div>
      <h1>{{movie.original_title}}</h1>
      <p>{{movie.overview}}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios"


export default {
  data(){
    return {
      movies: [],
    }
  },
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  computed: {
    movie(){
      return this.movies.find(
        movie => movie.id == this.id
      )
    }
  },
  mounted() {
    axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=c0b1ecd6347e5b7e8483c2353b7da5ab")
      .then(response => {
        this.movies = response.data.results;
      })
  }
}
</script>

<style scoped>
.movie {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 0 5%
}

.movie img{
  height: 75%
}

.movie h1 {
  padding: 1% 20%;
  text-decoration: underline;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
}

.movie p {
  padding: 5% 15%;
  font-size: 25px;
  text-align: left;
}

</style>