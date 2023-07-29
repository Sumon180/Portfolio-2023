"use client";
import store from "@/store/store";
import { FC, ReactNode } from "react";
import { Provider } from "react-redux";


interface dataProviderPropes {
  children: ReactNode;
}

const DataProvider: FC<dataProviderPropes> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default DataProvider;