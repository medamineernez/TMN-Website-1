import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import AddNewCoAdmin from "./views/AddNewCoAdmin";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import UsersManagement from "./views/UsersManagement";
import BlogPosts from "./views/BlogPosts";
import CoAdmin from "./views/CoAdmin";

import BlogsApproval from "./views/BlogsApproval";
import PodcastsApproval from "./views/PodcastSApproval";
import NewsApproval from "./views/NewsApproval";
import EventsApproval from "./views/EventsApproval";
import Categories from "./views/Categories";
import NewSubCategory from "./views/NewSubCategory";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/blog-posts" />
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
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
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
    path: "/co-admin",
    layout: DefaultLayout,
    component: CoAdmin 
  },
  {

    path: "/categories",
    layout: DefaultLayout,
    component: Categories 
  },
  {
    path: "/new-co-admin",
    layout: DefaultLayout,
    component: AddNewCoAdmin 
  },
  {
    path: "/new-Subcategory",
    layout: DefaultLayout,
    component: NewSubCategory 
  },
  {
    path: "/UsersManagement",
    layout: DefaultLayout,
    component: UsersManagement
  },
  {
    path: "/Blogs-approval",
    layout: DefaultLayout,
    component: BlogsApproval 
  },
  {
    path: "/Podcasts-approval",
    layout: DefaultLayout,
    component: PodcastsApproval 
  },
  {
    path: "/News-approval",
    layout: DefaultLayout,
    component: NewsApproval
  },
  {
    path: "/Events-approval",
    layout: DefaultLayout,
    component: EventsApproval
  },
  {

    path: "/tables",
    layout: DefaultLayout,
    component: UsersManagement

  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  },
];
