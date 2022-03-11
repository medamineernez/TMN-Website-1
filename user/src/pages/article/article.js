import React,{useEffect, useState} from "react";
import { useParams } from "react-router";
import Footer from "../../components/footer";
import NavBar from "../../components/navbar";
import { Loader, Center } from "@mantine/core";
import axios from "axios";
import ArticleCard from "../../components/articleCard";

function Article() {
  let { id, category, subcategory } = useParams();
  let [post, setPost] = useState("");
  var rows = [];
  
  useEffect(() => {
    async function getdata(){
      axios.get("http://localhost:3000/api/blogs/allblogs").then((response) => {
        setPost(response.data);
        alert(JSON.stringify(post))
      });}
    getdata();
    
  }, [post]);

  if (post){
    
    post.map((piece) => {
    rows.push(
      <ArticleCard
        title={piece.title}
        id={piece._id}
        category={piece.category}
        description={piece.content}
        src={piece.image}
      />
    );
    return "";
 });
}
  
 if (!post)
    return (
      <Center style={{ widt: "100%", height: "80vh" }}>
        <Loader color="dark" size="xl" variant="bars" />
      </Center>
    );
    else{
  return (
    <div>
      <NavBar />
      id={id} and category={category} and subcategory={subcategory}
      <div style={{ height:'100vh' }}>
        <h1 style={{ color: "#000000", fontSize: 40 }}>{category}</h1>
        {rows}
      </div>
      <Footer/>
    </div>
  );}
}

export default Article;
