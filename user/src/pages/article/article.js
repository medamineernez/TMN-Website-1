import React from "react";
import { useParams } from "react-router";
import NavBar from "../../components/navbar";

function Article() {
  let { id, category } = useParams();
  return (
    <div>
      <NavBar />
      id={id} and category={category}
      <div style={{ paddingLeft: "5%", paddingTop: 1, paddingBottom: 50 }}>
        <h1 style={{ color: "#000000", fontSize: 40 }}>{category}</h1>
      </div>
    </div>
  );
}

export default Article;
