import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import Blogmanagement from "./views/Blogmanagement";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Inusemanagement from "./views/Newsmanagement";
import Podcast from "./views/Podcast";
import Category from "./views/Category";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/Podcast" />
  },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/Blogmanagement",
    layout: DefaultLayout,
    component: Blogmanagement
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/Category",
    layout: DefaultLayout,
    component: Category
  },
  {
    path: "/Newsmanagement",
    layout: DefaultLayout,
    component: Inusemanagement
  },
  {
    path: "/Podcast",
    layout: DefaultLayout,
    component: Podcast
  }
];
