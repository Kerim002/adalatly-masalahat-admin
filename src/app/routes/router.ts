import { createBrowserRouter } from "react-router-dom";
import {
  AboutPage,
  EmployeesPage,
  HomePage,
  LawsPage,
  Layout,
  LoginPage,
  NewsPage,
  VideosPage,
  BannerPage,
  SingleNews,
} from "../../pages";

export const router = createBrowserRouter([
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "employees",
        Component: EmployeesPage,
      },
      {
        path: "laws",
        Component: LawsPage,
      },
      {
        path: "banner",
        Component: BannerPage,
      },
      {
        path: "news",
        Component: NewsPage,
      },
      {
        path: "news/:id",
        Component: SingleNews,
      },
      {
        path: "videos",
        Component: VideosPage,
      },
      {
        path: "about",
        Component: AboutPage,
      },
    ],
  },
]);
