import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '125275aa24msh24d1dc57b4073d0p1edf6cjsn8f60ed1e1d50',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
} 

const baseUrl = await fetch('https://coinranking1.p.rapidapi.com/exchanges');

const createRequest = (url) => ({ url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'crptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query:() => createRequest('/coins')
        })
    })
});
export const {
    useGetCryptosQuery,
} = cryptoApi;