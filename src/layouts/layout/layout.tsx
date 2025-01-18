
// import { Header } from "../header";
import { useMemo } from "react";
import { BottomSheet } from "../bottom-sheet";
// import { Menu } from "../menu";
import { Props } from "./types";
import { matchPath, useLocation } from "react-router-dom";

const PUBLIC_ROUTES = ["/login","/storage", "/bakery", "notification", "message"];

export const Layout = ({ children }: Props) => {
  const { pathname } = useLocation();

  const isAuth = useMemo(() => {
    return !PUBLIC_ROUTES.some((route) => matchPath({ path: route }, pathname));
  }, [pathname]);

  return (
    <div className="flex flex-col h-[100vh]">
      <div className="flex-grow">{children}</div>
      {isAuth && <BottomSheet />}
    </div>
  );
};
