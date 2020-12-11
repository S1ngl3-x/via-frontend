export default function ({ $axios, redirect }) {
  $axios.onRequest((config) => {
    config.withCredentials = true;
    return config;
  });

  $axios.onError((error) => {
    throw new Error(`We are sorry but a problem occurred because of ${error}`);
  });
}
