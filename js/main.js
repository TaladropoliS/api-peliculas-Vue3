const app = Vue.createApp({
    data() {
        return {
            title: "API Peliculas Vue",
            movieData: {},
            movieTitle: "The Godfather",
        };
    },
    mounted() {
        this.getMovie();
    },

    methods: {
        async getMovie() {

            const search = this.movieTitle.toLowerCase().replace(/ /g, "+");

            console.log(search)

            const data = await fetch(`https://www.omdbapi.com/?apikey=900f7056&t=${search}`);

            const jsonData = await data.json();

            this.movieData = jsonData
        }
    }
});