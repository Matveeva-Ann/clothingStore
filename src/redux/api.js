import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { urlGoods, urlGoodsEn } from 'constants/urlGoodsCollection';

export const goodsApi = createApi({
  reducerPath: 'goodsApi',
  baseQuery: fetchBaseQuery({ baseUrl: urlGoods }),
  endpoints: (builder) => ({
    getAllGoods: builder.query({
      query: (url) => url,
    }),
  }),
})
export const { useGetAllGoodsQuery } = goodsApi;

