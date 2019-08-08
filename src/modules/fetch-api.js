import fetch from 'isomorphic-fetch';

require('es6-promise').polyfill()

async function fetchApi(method, url, data) {
    const body = method.toLowerCase() === 'get' ? {} : { body: JSON.stringify(data) }

    const response = await fetch(url, {
        method,
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        },
        credentials: 'same-origin',
        ...body,
    });
    
    return await response.json();
}

export default fetchApi;