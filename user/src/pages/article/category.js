import React from 'react';
import { useParams } from 'react-router';
import ArticleCard from '../../components/articleCard';
import NavBar from '../../components/navbar';
import { Group } from '@mantine/core';

function Category() {

    let { category } = useParams();
    
    return ( 
        <div>
            <NavBar/>
                <div style={{paddingLeft:'5%', paddingTop:1,paddingBottom:50}}>
                    <h1 style={{color:'#3d3d3d', fontSize:40}}>{category}</h1>
                    <Group>
                    <ArticleCard
                    src="https://cdnb.artstation.com/p/assets/images/images/024/796/147/large/thomas-simon-untitled-8.jpg?1583562121&dl=1"
                    category='news'
                    id="02"
                title="earth gets nuked, TWICE!!"
                description="unsurprisingly, fallout players are the first to die horrible deaths. and other things to say about the faces of calamity at the dinner table"
              />

                <ArticleCard
                    src="https://cdnb.artstation.com/p/assets/images/images/024/796/147/large/thomas-simon-untitled-8.jpg?1583562121&dl=1"
                    category='news'
                    id="02"
                title="earth gets nuked"
                description="unsurprisingly, fallout players are the first to die horrible deaths. and other things to say about the faces of calamity at the dinner table"
              />


                <ArticleCard
                    src="https://cdnb.artstation.com/p/assets/images/images/024/796/147/large/thomas-simon-untitled-8.jpg?1583562121&dl=1"
                    category='news'
                    id="02"
                title="earth gets nuked"
                description="unsurprisingly, fallout players are the first to die horrible deaths. and other things to say about the faces of calamity at the dinner table"
              />


              

              </Group>
            </div>

        </div>
        

     );
}

export default Category;