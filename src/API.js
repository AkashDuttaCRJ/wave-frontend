import axios from "axios";

const instance = axios.create({
  baseURL: "http://ec2-13-232-176-22.ap-south-1.compute.amazonaws.com/",
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
