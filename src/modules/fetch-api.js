import fetch from 'isomorphic-fetch';

require('es6-promise').polyfill()

function fetchApi(method, url, data) {
    const body = method.toLowerCase() === 'get' ? {} : { body: JSON.stringify(data) }

    return fetch(url, {
        method,
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',

        },
        credentials: 'same-origin',
        ...body

    }).then(response => response.json())
}

export default fetchApi;