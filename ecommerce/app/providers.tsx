"use client";

import { Provider } from "react-redux";
import { ClerkProvider } from "@clerk/nextjs";
import { store } from "../lib/redux/store";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <Provider store={store}>
        {children}
      </Provider>
    </ClerkProvider>
  );
}
