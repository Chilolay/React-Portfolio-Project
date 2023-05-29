import React from "react";
import ArticleCards from "../components/articles/ArticleCards";
import ExamplePagination from "../components/ExamplePagination";
import "../components/articles/Articles.scss";

const ArticlesPages = () => {
  return (
    <div>
      <ArticleCards />
      <ExamplePagination />
    </div>
  );
};

export default ArticlesPages;
