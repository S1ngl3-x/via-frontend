export default function ({ $axios, redirect }) {
  $axios.onRequest((config) => {
    config.withCredentials = true;
    return config;
  });

  $axios.onError((error) => {
    throw new Error(`Error occurred while making request: ${error}`);
  });
}
