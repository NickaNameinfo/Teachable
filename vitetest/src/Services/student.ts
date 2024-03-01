import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../Store";
import {infoData} from "../configData.tsx";
const axiosBaseQuery = fetchBaseQuery({
  baseUrl: infoData?.baseApi, // Set your base URL
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).loginState.userInfo?.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
      headers.set("Content-Type", "multipart/form-data");
    }

    return headers;
  },
});

export const studentapi = createApi({
  reducerPath: "studentapi",
  baseQuery: axiosBaseQuery,
  endpoints: (builder) => ({
    getStudent: builder.query<any[], void>({
      query: () => `/customers`,
    }),
    getStudentId: builder.query<any[], void>({
      query: (id) => `/customers/${id}`,
    }),
    updateStudent: builder.mutation({
      query: (body) => ({
        url: `/courses/${body.id}`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetStudentQuery,
  useUpdateStudentMutation,
  useGetStudentIdQuery,
} = studentapi;
export const { endpoints } = studentapi;
