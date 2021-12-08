import React, { useRef, useState } from 'react';
import {Center,Button,Text,Space,Group,TextInput,PasswordInput,MediaQuery } from '@mantine/core';
import EmailIcon from '@mui/icons-material/Email';
import Lock from '@mui/icons-material/LockOutlined';

function Login() {


    const [mail,setMail]=useState();
    const [pass,setPass]=useState();
    
const hide = { display: 'none' };
    

    function loginFunction(){
        alert("mail:"+mail+"\npass:"+pass);
    }

    return ( 
        <div>
        <MediaQuery largerThan="sm" styles={hide}>
            <Center style={{height:'100vh'}}>
            <div style={{width:'60%'}}>
            <Group direction="column" style={{height:'100vh',display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Text weight={700} style={{color:'#3d3d3d',fontSize:24}}>Sign in to your account</Text>
            <Space h="ls" />
            <TextInput onChange={e => setMail(e.target.value)} icon={<EmailIcon style={{color:'#3d3d3d'}}/>} size="lg" placeholder="email" radius="xs" error="" style={{width:'70%'}} required/>
            <Space h="ls" />
            <PasswordInput onChange={e => setPass(e.target.value)} icon={<Lock style={{color:'#3d3d3d', width:200}}/>} size="lg" placeholder="password" radius="xs" error="" style={{width:'70%'}} required/>
            <Space h="ls" />
            <Button onClick={loginFunction} color="dark" radius="xs" size="lg">Sign in</Button>

            </Group>
            </div>
            
            <div style={{height:'95vh',padding:20,width:'40%',backgroundColor:'#3d3d3d',display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Group direction="column" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Text weight={700} style={{color:'#FFFFFF',fontSize:24, textAlign:'center'}}>Welcome to Tunisian Modern Newspaper</Text>
            <Space h="xl" />
            <div style={{width:200,height:2,backgroundColor:'#FFFFFF'}}/>
            <Space h="xl" />
            <Text weight={300} style={{color:'#FFFFFF',fontSize:16,textAlign:'center'}}>we are a team of highly motivated indivuals who bla bla bla...it will be a great pleasure for you to join us eds eds eds boiiii</Text>
            
            </Group>
            
            </div>
            
        </Center>
        </MediaQuery>
        <MediaQuery smallerThan="sm" styles={hide}>
        <Center style={{height:'100vh', width:'100%'}}>
        <Group direction="column" style={{height:'100vh', width:'100%',alignItems: 'center', justifyContent: 'center'}}>
            
            <Text weight={700} style={{color:'#3d3d3d',fontSize:24}}>Sign in to your account</Text>
            <Space h="ls" />
            <TextInput onChange={e => setMail(e.target.value)} icon={<EmailIcon style={{color:'#3d3d3d'}}/>} size="lg" placeholder="email" radius="xs" error="" style={{width:'70%'}} required/>
            <Space h="ls" />
            <PasswordInput onChange={e => setPass(e.target.value)} icon={<Lock style={{color:'#3d3d3d'}}/>} size="lg" placeholder="password" radius="xs" error="" style={{width:'70%'}} required/>
            <Space h="ls" />
            <Button onClick={loginFunction} color="dark" radius="xs" size="lg">Sign in</Button>
           
            </Group>
            </Center>
        </MediaQuery>
        </div>
     );
}

export default Login;