export const getApiData = async (url) => {
  fetch(url).then((response) => response.json());
};
