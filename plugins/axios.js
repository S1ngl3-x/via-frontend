export default function ({ $axios, redirect }) {
  $axios.onRequest((config) => {
    // eslint-disable-next-line no-console
    console.log('Making request to ' + config.url);
    config.withCredentials = true;
    return config;
  });

  $axios.onError((error) => {
    throw new Error(`Error occurred while making request: ${error}`);
  });
}
