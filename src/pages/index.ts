import { lazy } from "react";

const EmployeesPage = lazy(() => import("./EmployeesPage"));
const LoginPage = lazy(() => import("./LoginPage"));
const LawsPage = lazy(() => import("./LawsPage"));
const NewsPage = lazy(() => import("./NewsPage"));
const VideosPage = lazy(() => import("./VideosPage"));
const Layout = lazy(() => import("./Layout"));
const AboutPage = lazy(() => import("./AboutPage"));
const HomePage = lazy(() => import("./HomePage"));
const BannerPage = lazy(() => import("./BannerPage"));
const SingleNews = lazy(() => import("./SingeNewsPage"));
const SingleLaw = lazy(() => import("./SingleLaw"));
const MessagePage = lazy(() => import("./MessagePage"));
const SingleChat = lazy(() => import("./SingleChat"));
export {
  EmployeesPage,
  LoginPage,
  Layout,
  AboutPage,
  LawsPage,
  NewsPage,
  VideosPage,
  HomePage,
  BannerPage,
  SingleLaw,
  SingleNews,
  MessagePage,
  SingleChat,
};
