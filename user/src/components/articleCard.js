import React from "react";
import { MediaQuery, Card, Image, Text } from "@mantine/core";
import { Link } from "react-router-dom";

const hide = { display: "none" };
function ArticleCard(props) {
  return (
    <div>
      <MediaQuery largerThan="md" styles={hide}>
        <Card
          style={{ width: "900px", height: "300px",marginTop:50 }}
          shadow="xl"
          padding="xl"
          component={Link}
          to={"/" + props.category + "/" + props.subcategory + "/" +props.id}
        >
          <Card.Section>
            <Image src={props.src} height={450} withPlaceholder />
            
            <div style={{position:'absolute', paddingLeft:20,bottom:0, left:0, backgroundColor:'#00000066', height:100, width:'100%'}}>
            <Text style={{ marginTop: "10px", color:'#fff' }} weight={500} size="xl">
            {props.title}
            </Text>
            <Text size="sm" lineClamp={2} style={{  color:'#000'}}>
            <b>{props.description}</b>
            </Text>
            </div>
            
          </Card.Section>
          
        </Card>
      </MediaQuery>

      <MediaQuery smallerThan="md" styles={hide}>
        <div style={{width:'90vw'}}>
        <Card
          style={{ width: "100%" }}
          shadow="sm"
          padding="xl"
          component={Link}
          to={"/" + props.category + "/" + props.subcategory + "/" +props.id}
        >
          <Card.Section>
            <Image src={props.src} height={300} withPlaceholder />
            <div style={{position:'absolute', paddingLeft:20,bottom:0, left:0, backgroundColor:'#00000066', height:100, width:'100%'}}>
            <Text style={{ marginTop: "10px", color:'#fff' }} weight={500} size="xl">
            {props.title}
            </Text>
            <Text size="sm" lineClamp={3} style={{  color:'#cccccc'}}>
            {props.description}
            </Text>
            </div>
          </Card.Section>
          
        </Card>
        </div>
      </MediaQuery>
    </div>
  );
}

export default ArticleCard;
