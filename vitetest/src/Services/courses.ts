import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../Store";
import { infoData } from "../configData.tsx";

const axiosBaseQuery = fetchBaseQuery({
  baseUrl: infoData?.baseApi, // Set your base URL
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).loginState?.userInfo;
    console.log(token, "token223143");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

export const api = createApi({
  reducerPath: "courses",
  baseQuery: axiosBaseQuery,
  tagTypes: ["Couurs", "item"],
  refetchOnFocus: true,
  endpoints: (builder) => ({
    getCoures: builder.query<any[], void>({
      query: () => `/courses`,
    }),
    getClarifications: builder.query<any[], void>({
      query: () => `/clarification`,
    }),
    getSession: builder.query<any[], void>({
      query: () => `/session`,
    }),
    getSessionById: builder.query<any[], void>({
      query: (id) => `/session/${id}`,
    }),
    getCheckOutCoures: builder.query<any[], void>({
      query: () => `/checkout`,
    }),
    getCouresId: builder.query<any, string>({
      query: (string) => `/courses/${string}`,
    }),
    getWatchlistd: builder.query<any[], void>({
      query: () => `/watchlist`,
    }),
    getWatchlistCouresId: builder.query<any, string>({
      query: (string) => `/watchlist/courseId/${string}`,
    }),
    getSessionsId: builder.query<any, string>({
      query: (string) => `/session/courseId/${string}`,
    }),
    getCheckOutCouresId: builder.query({
      query: ({ courseId, customerId }) =>
        `/checkout/courseId/${courseId}/${customerId}`,
    }),
    getFeebackCouresId: builder.query({
      query: (string) => `/feedback/courseId/${string}`,
    }),
    addCourse: builder.mutation({
      query: (body) => ({
        url: `/courses`,
        method: "POST",
        body,
      }),
    }),
    addWatchList: builder.mutation({
      query: (body) => ({
        url: `/watchlist`,
        method: "POST",
        body,
      }),
    }),
    addFeedback: builder.mutation({
      query: (body) => ({
        url: `/feedback`,
        method: "POST",
        body,
      }),
    }),
    updateWatchList: builder.mutation({
      query: ({ body, id }) => ({
        url: `/watchlist/${id}`,
        method: "PUT",
        body,
      }),
    }),
    addSession: builder.mutation({
      query: (body) => ({
        url: `/session`,
        method: "POST",
        body,
      }),
    }),
    addClarification: builder.mutation({
      query: (body) => ({
        url: `/clarification`,
        method: "POST",
        body,
      }),
    }),
    updateCourse: builder.mutation<any, { body: any; id: string }>({
      query: ({ body, id }) => ({
        url: `/courses/${id}`,
        method: "PUT",
        body,
      }),
    }),
    updateSession: builder.mutation<any, { body: any; id: any }>({
      query: ({ body, id }) => ({
        url: `/session/${id}`,
        method: "PUT",
        body,
      }),
    }),
    deleteCorse: builder.mutation({
      query: (id) => ({
        url: `/courses/${id}`,
        method: "DELETE",
      }),
    }),
    checkOutCurse: builder.mutation({
      query: (body) => ({
        url: `/checkout`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetCouresQuery,
  useAddCourseMutation,
  useAddSessionMutation,
  useAddWatchListMutation,
  useAddFeedbackMutation,
  useAddClarificationMutation,
  useUpdateWatchListMutation,
  useGetCouresIdQuery,
  useGetSessionQuery,
  useUpdateCourseMutation,
  useDeleteCorseMutation,
  useCheckOutCurseMutation,
  useGetCheckOutCouresQuery,
  useGetSessionsIdQuery,
  useGetCheckOutCouresIdQuery,
  useGetWatchlistCouresIdQuery,
  useGetWatchlistdQuery,
  useGetFeebackCouresIdQuery,
  useGetClarificationsQuery,
  useGetSessionByIdQuery,
  useUpdateSessionMutation
} = api;
export const { endpoints } = api;
