export const getApiData = async (url) => {
  return fetch(`https://jsonplaceholder.typicode.com${url}`).then((response) =>
    response.json()
  );
};
