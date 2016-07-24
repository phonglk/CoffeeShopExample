import 'whatwg-fetch';

function requestFactory(requestOption = {}) {
  return (url) => new Promise((resolve, reject) => {
    fetch(url, requestOption).then((response) => {
      if (response.status === 401) {
        window.location = `/auth/login?redirect=${window.location.pathname}`;
      }
      response.json().then(resolve).catch(reject);
    }).catch((err) => {
      reject(err);
    });
  });
}

const http = {
  get: requestFactory({
    method: 'get',
    credentials: 'same-origin',
  }),
  post: requestFactory({
    method: 'post',
    credentials: 'same-origin',
  }),
};


export default http;
