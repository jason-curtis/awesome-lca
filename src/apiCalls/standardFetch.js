import 'whatwg-fetch'; // Fetch polyfill is just for IE at this point: caniuse.com/#search=fetch


function standardFetch(method, url, data) {
    return fetch(
        url,
        {
            method,
            headers: {
                'Content-Type': 'application/json',
                'cache-control': 'no-cache',
                'x-api-key': 'tm1PqaVYof9UyjhrehrN26dqyqDHKNA65fyh9kQZ',
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
