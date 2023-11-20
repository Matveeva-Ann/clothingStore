import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { urlGoods } from 'constants/urlGoodsCollection';

export const goodsApi = createApi({
  reducerPath: 'goodsApi',
  baseQuery: fetchBaseQuery({ baseUrl: urlGoods }),
  endpoints: (builder) => ({
    getAllGoods: builder.query({
      query: () => urlGoods,
    }),
  }),
})
export const { useGetAllGoodsQuery } = goodsApi;