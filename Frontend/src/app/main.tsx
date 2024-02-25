"use client";
import * as React from "react";
import { useDispatch } from "react-redux";
import { login } from "./Login/loginSlice";

export default function Main({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    const localData = localStorage.getItem("loginInfo");
    dispatch(
      login(localData ? JSON.parse(localStorage.getItem("loginInfo")) : null)
    );
  }, []);
  return <>{children}</>;
}
