

export const backendUrl = (
    process.env.NODE_ENV === 'production' ?
        'https://lca.party/' :
        'http://localhost:8000/'
);

export default `${backendUrl}api/`;
