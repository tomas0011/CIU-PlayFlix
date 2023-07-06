import { apiKey } from '../apiKey';

export const getMoviesSuggestions = async () => {
  const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`
    }
  });
  const { results } = await response.json();
  return results.map((serie) => ({
    type: 'movie',
    id: serie.id,
    title: serie.title,
    image: `https://www.themoviedb.org/t/p/w220_and_h330_face/${serie.poster_path}`
  }));
}

export const getMoviesByGenreId = async (genreId) => {
  const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`
    }
  });
  const { results } = await response.json();
  return results.map((serie) => ({
    type: 'movie',
    id: serie.id,
    title: serie.title,
    image: `https://www.themoviedb.org/t/p/w220_and_h330_face/${serie.poster_path}`
  }));
}

export const getSeriesSuggestions = async () => {
  const response = await fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`
    }
  });
  const { results } = await response.json();
  return results.map((serie) => ({
    type: 'serie',
    id: serie.id,
    title: serie.name,
    image: `https://www.themoviedb.org/t/p/w220_and_h330_face/${serie.poster_path}`
  }));
}

export const getSeriesByGenreId = async (genreId) => {
  const response = await fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`
    }
  });
  const { results } = await response.json();
  return results.map((serie) => ({
    type: 'serie',
    id: serie.id,
    title: serie.name,
    image: `https://www.themoviedb.org/t/p/w220_and_h330_face/${serie.poster_path}`
  }));
}

export const searchMoviesAndSeries = async (search) => {
  const response = await fetch(`https://api.themoviedb.org/3/search/multi?query=${search}&include_adult=false&language=en-US&page=1`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`
    }
  });
  const { results } = await response.json();
  return {
    search,
    results: results.map((media) => ({
      type: media.media_type === 'tv' ? 'serie' : 'movie',
      id: media.id,
      title: media.title || media.name,
      image: !!media.poster_path
        ? `https://www.themoviedb.org/t/p/w220_and_h330_face/${media.poster_path}` 
        : 'https://www.feed-image-editor.com/sites/default/files/perm/wysiwyg/image_not_available.png'
    }))
  } 
}