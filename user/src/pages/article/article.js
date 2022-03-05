import React from "react";
import { useParams } from "react-router";
import Footer from "../../components/footer";
import NavBar from "../../components/navbar";

function Article() {
  let { id, category, subcategory } = useParams();
  return (
    <div>
      <NavBar />
      id={id} and category={category} and subcategory={subcategory}
      <div style={{ height:'100vh' }}>
        <h1 style={{ color: "#000000", fontSize: 40 }}>{category}</h1>
        
      </div>
      <Footer/> 
    </div>
  );
}

export default Article;
