import 'whatwg-fetch'; // Fetch polyfill is just for IE at this point: caniuse.com/#search=fetch


function standardFetch(method, url, data) {
    return fetch(
        url,
        {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        },
    ).then((response) => {
        if (response.ok) {
            return response.json();
        }
        throw response;
    });
}

export default standardFetch;
