export const TMDB_CONFIG={
    BASE_URL:'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers:{
        accept:'application/json',
        Authorization:`Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
}


export const fetchMovies = async ({query}:{query:string}) => {
    const endpoint=query
    ?`${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    :`${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

    const response =await fetch(endpoint,{
        method:'GET',
        headers:TMDB_CONFIG.headers,
    });

    if (!response.ok){
        throw new Error(`Failed to fetch movies: ${response.statusText}`);
    }

    const data = await response.json();

    return data.results;
}

export const fetchMovieDetails = async (movieId:string):Promise<MovieDetails> =>{
    try{
        const response=await fetch(`${TMDB_CONFIG.BASE_URL}/movie/${movieId}?api_key=${TMDB_CONFIG.API_KEY}`,{
            method:'GET',
            headers: TMDB_CONFIG.headers,
        });

        if(!response.ok) throw new Error('Failed to fetch movi details');

        const data=await response.json();

        return data
    }
    catch(error){
        console.log(error)
        throw error;
    }
}

// export const fetchMovieDetails = async

// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzFkMmQzNWIxOTBkOGJkNzU1MjY5NDg3MWQ2Y2M1MCIsIm5iZiI6MTc0MzQ4OTIwNi44NzMsInN1YiI6IjY3ZWI4OGI2OWJiMjk1ZDZlYThiZWFiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ypaME11PzbKEG_jhmbwYRCqfpyslT40cEFHfBMEMOA8'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));