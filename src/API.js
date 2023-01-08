import axios from "axios";

const instance = axios.create({
  baseURL: "https://api-jiosaavn.onrender.com",
});

export const getHomeData = () => {
  return instance
    .get("/")
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

export const getCharts = () => {
  return instance
    .get("/charts")
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

export const getNewReleases = (lang) => {
  const url = lang ? `/new-releases/?lang=${lang}` : "/new-releases";
  return instance
    .get(url)
    .then((res) => (lang ? res.data.data : res.data))
    .catch((err) => console.error(err));
};

export const getPlayList = (lang) => {
  const url = lang
    ? `/featured-playlists/?lang=${lang}`
    : "/featured-playlists";
  return instance
    .get(url)
    .then((res) => (lang ? res.data.data : res.data))
    .catch((err) => console.error(err));
};

export const topArtists = () => {
  return instance
    .get("/top-artists/")
    .then((resp) => resp.data)
    .catch((err) => console.error(err));
};

export const getSearchData = (search) => {
  return instance
    .get(`/search/?query=${search}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

export const getArtistData = (permaUrl) => {
  return instance
    .get(permaUrl)
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

export const getPlayListData = (id) => {
  return instance
    .get(`/playlist/get/?id=${id}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
};
export const getAlbumsData = (id) => {
  return instance
    .get(`/album/get/?id=${id}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

export const getSongDetails = (id) => {
  return instance
    .get(`/song/get/?id=${id}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

export const getAlbumDetailsByYear = (year) => {
  return instance
    .get(`/top-albums/?year=${year}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

export const getRecoPlayList = (id) => {
  return instance
    .get(`/playlist/reco/?id=${id}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
};
