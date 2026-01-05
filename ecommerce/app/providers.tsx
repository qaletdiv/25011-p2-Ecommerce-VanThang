"use client";

import { Provider, useDispatch } from "react-redux";
import { store } from "@/lib/redux/store";
import { useEffect } from "react";
import { restoreAuth } from "@/lib/redux/auth/authSlice";
import { useAppDispatch } from "@/lib/redux/hooks";
import AuthRestore from "@/components/AuthRestore";

export default function Providers({ children }: { children: React.ReactNode }) {


  return <Provider store={store}> <AuthRestore/> {children}</Provider>;
}
