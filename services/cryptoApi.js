import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '125275aa24msh24d1dc57b4073d0p1edf6cjsn8f60ed1e1d50',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
} 

const baseUrl = ('https://coinranking1.p.rapidapi.com/exchanges');

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

const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      'tiers[0]': '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '50',
      offset: '0'
    },
    headers: {
      'X-RapidAPI-Key': '125275aa24msh24d1dc57b4073d0p1edf6cjsn8f60ed1e1d50',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };
  export const func=async()=>{
    let data1
    console.log("func")
    axios.request(options).then(function (response) {
        // data=console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
    const data=await axios.request(options)
    // console.log(data)
    return data
}
//   axios.request(options).then(function (response) {
//       console.log(response.data);
//   }).catch(function (error) {
//       console.error(error);
//   });