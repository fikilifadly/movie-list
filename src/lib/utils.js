export const getImage = url => {
  const path = import.meta.env.VITE_APP_MOVIE_IMG;
  const result = path + url;
  return result;
};

export const titleToUrlDetails = title => {
  if (!title) return;

  const result = '/movies/' + title.toLowerCase().replaceAll(' ', '-');
  return result;
};
  
export const genreIdToText = arr => {
  const genre = {
    Action: 28,
    Adventure: 12,
    Animation: 16,
    Comedy: 35,
    Crime: 80,
    Documentary: 99,
    Drama: 18,
    Family: 10751,
    Fantasy: 14,
    History: 36,
    Horror: 27,
    Music: 10402,
    Mystery: 9648,
    Romance: 10749,
    Science: 878,
    TVMovie: 10770,
    Thriller: 53,
    War: 10752,
    Western: 37,
  };

  let arrRes = [];
  if (!arr) {
    return;
  }
  arr.forEach(el => {
    arrRes.push(Object.keys(genre).find(key => genre[key] === el));
  });

  return arrRes;
};

export const setLocalIdMovie = (id, date) => {
  return localStorage.setItem('idMovie', JSON.stringify({ id, date }));
};

export const getLocalIdMovie = () => {
  return JSON.parse(localStorage.getItem('idMovie'));
};
