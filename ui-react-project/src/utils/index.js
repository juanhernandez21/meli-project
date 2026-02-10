

const request = (options) => {
  const headers = new Headers({
    "API-Key": window.ENV.API_KEY,
  });

  const defaults = { headers: headers };

  options = Object.assign({}, defaults, options);

  return fetch(options.url, options)
    .then((response) => {
      return response
        .json()
        .then((json) => {
          // OBS: response.ok puede ser status code desde 200-209 incluidos
          if (!response.ok) {
            if (response.status === 404) {
              return [];
            }
            if (response.status === 410) {
              return response;
            }
            return Promise.reject(json);
          }
          return json;
        })
        .catch((e) => {
          if (!response.ok) {
            throw e;
          }
          return [];
        });
    })
    .catch(function (error) {
      console.error(`Ha ocurrido un error: ${JSON.stringify(error)}`);
      throw error;
    });
};

export function getOffer(productId) {
  let url = `${location.protocol}//${window.ENV.API_MELI_PROJECT_URL}`;
  url = productId ? `${url}products/${productId}/offers` : url;
  return request({
    url: url,
    method: "GET",
  });
}

export function getProduct(productId) {
  let url = `${location.protocol}//${window.ENV.API_MELI_PROJECT_URL}`;
  url = productId ? `${url}products/${productId}` : url;
  return request({
    url: url,
    method: "GET",
  });
}

export function getSeller(sellerId) {
  let url = `${location.protocol}//${window.ENV.API_MELI_PROJECT_URL}`;
  url = sellerId ? `${url}sellers/${sellerId}` : url;
  console.log(url)
  return request({
    url: url,
    method: "GET",
  });
}