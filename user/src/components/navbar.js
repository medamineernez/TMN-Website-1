import React, { useEffect, useState } from "react";
import {
  MediaQuery,
  Button,
  Grid,
  Col,
  Drawer,
  Menu,
  SimpleGrid,
  Burger,
  TextInput,
  Center,
  ActionIcon
} from "@mantine/core";
import { Link } from "react-router-dom";
import logo from "../media/TMN_inverted.jpg";
import { makeStyles } from "@mui/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import axios from "axios";


const hide = { display: "none" };

let newssub = [];

let blogssub = [];

let podcastssub = [];

let eventssub = [];

//for preventing the subcategory self-cloning bug
let newssubt = [];

let blogssubt = [];

let podcastssubt = [];

let eventssubt = [];
const useStyles = makeStyles({
  button: {
    backgroundColor: "#fff",
    color: "#3d3d3d",
    marginTop: 0,
    height: "52px",
    borderRadius: "0px",
    "&:hover": {
      backgroundColor: "#3d3d3d !important",
      color: "#FFFFFF",
    },
  },

  buttonDrawer: {
    backgroundColor: "#fff",
    color: "#3d3d3d",
    marginTop: 0,
    marginBottom: 50,
    height: "52px",
    width: "100%",
    borderRadius: "0px",
    fontSize: "24px",
    "&:hover": {
      backgroundColor: "#3d3d3d !important",
      color: "#FFFFFF",
    },
  },

  fcb: {
    color: "#3d3d3d",
    "&:hover": {
      color: "#3b5998",
    },
  },

  search: {
    color: "#3d3d3d",
    "&:hover": {
      color: "#000000",
    },
  },

  ytb: {
    color: "#3d3d3d",
    "&:hover": {
      color: "#0077b5",
    },
  },

  ins: {
    color: "#3d3d3d",
    "&:hover": {
      color: "#d6249f",
    },
  },

  usr: {
    color: "#3d3d3d",
    "&:hover": {
      color: "#9f9f9f",
    },
  },
});

function NavBar() {
  const [opened, setOpened] = useState(false);
  const [islogged, setLogged] = useState(false);
  const [rawSub, setrawSub] = useState();
  const [searchopened, setSearchOpened] = useState(false);

  const classes = useStyles();

  const centered = {
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    marginTop: 0,
  };

  function logout() {
    localStorage.clear();
    setLogged(false);
  }

  function showsearch(){
    alert(5);
  }

  const [user, setUser] = useState();

  useEffect(() => {
    //load subcategories from DB
    axios.get("http://localhost:3000/api/admin/allCategorys").then((response) => {
      
      response.data.forEach(sub => {
        if ((sub.refrencesTo==="news")&&(!newssubt.includes(sub.title))){
          newssub.push(<Menu.Item component={Link} to="/">{sub.title}</Menu.Item>)
          newssubt.push(sub.title);
        }
        if (sub.refrencesTo==="blogs"&&(!blogssubt.includes(sub.title))){
          blogssub.push(<Menu.Item component={Link} to="/">{sub.title}</Menu.Item>)
          blogssubt.push(sub.title);
        }
        if (sub.refrencesTo==="podcasts"&&(!podcastssubt.includes(sub.title))){
          podcastssub.push(<Menu.Item component={Link} to="/">{sub.title}</Menu.Item>)
          podcastssubt.push(sub.title);
        }
        if (sub.refrencesTo==="events"&&(!eventssubt.includes(sub.title))){
          eventssub.push(<Menu.Item component={Link} to="/">{sub.title}</Menu.Item>)
          eventssubt.push(sub.title);
        }
        })
        
      });

  
    //make changes to navbar depending on whether there's a user logged in
    //might need further modifications to enhance readability

    const email = localStorage.getItem("email");
    //the finest piece of code written in history
    //this whole component is literally incomprehensible, seek god in case of errors


    if (email!==null){ //render when user in logged
    setLogged(true);
    setUser(<Menu trigger="hover" placement="start" size="sm" zIndex={5} delay={300} gutter={-1} control={
    <Link to="/loginNavigation">
        <AccountCircleIcon className={classes.usr} style={{ fontSize: 35, marginTop: "10px", marginLeft: "30px", }}/>  
    </Link>}>
    <Menu.Item>hi, {email}</Menu.Item>
    <Menu.Item component={Link} to="/" onClick={()=>{logout()}}>logout</Menu.Item>
    </Menu>
    )

    
  }

     else{ //render when no session exist in localStorage
        setLogged(false);
        setUser(
        <Menu trigger="hover" placement="start" size="sm" zIndex={5} delay={300} gutter={-1} control={
        <Link to="/loginNavigation">
            <AccountCircleIcon className={classes.usr} style={{ fontSize: 35, marginTop: "10px", marginLeft: "30px", }}/>  
        </Link>}>
        <Menu.Item component={Link} to="/loginNavigation">login</Menu.Item>
        </Menu>
        )
    }

    

      

  },[classes.usr]);

  return (
    <div>
      <MediaQuery largerThan="xs" styles={hide}>
        <div style={{ marginBottom: 50 }}>
          <Grid
            columns={9}
            style={{
              width: "101%",
              height: "60px",
              backgroundColor: "#FFFFFF",
              position: "fixed",
              top: "0",
              left: "0",
              zIndex: "5",
            }}
          >
            <Col span={2} style={centered}>
              <Link to="/">
                <img alt="" src={logo} style={{ height: 40 }} />
              </Link>
            </Col>

            <Col span={1} style={centered}>
              <Menu
                trigger="hover"
                placement="start"
                size="sm"
                zIndex={5}
                delay={300}
                gutter={-1}
                control={
                  <Button
                    component={Link}
                    to="/news"
                    className={classes.button}
                    style={{ useStyles }}
                  >
                    News
                  </Button>
                }
              >
                {newssub}
              </Menu>
            </Col>

            <Col span={1} style={centered}>
              <Menu
                trigger="hover"
                placement="start"
                size="sm"
                zIndex={5}
                delay={300}
                gutter={-1}
                control={
                  <Button
                    component={Link}
                    to="/blogs"
                    className={classes.button}
                    style={{ useStyles }}
                  >
                    Blogs
                  </Button>
                }
              >
                {blogssub}
              </Menu>
            </Col>

            <Col span={1} style={centered}>
              <Menu
                trigger="hover"
                placement="start"
                size="sm"
                zIndex={5}
                delay={300}
                gutter={-1}
                control={
                  <Button
                    component={Link}
                    to="/events"
                    className={classes.button}
                    style={{ useStyles }}
                  >
                    Events
                  </Button>
                }
              >
                {eventssub}
              </Menu>
            </Col>

            <Col span={1} style={centered}>
              <Menu
                trigger="hover"
                placement="start"
                size="sm"
                zIndex={5}
                delay={300}
                gutter={-1}
                control={
                  <Button
                    component={Link}
                    to="/podcasts"
                    className={classes.button}
                    style={{ useStyles }}
                  >
                    Podcasts
                  </Button>
                }
              >
                {podcastssub}
              </Menu>

            </Col>

            <Col span={1} offset={1} style={centered}>
              <SimpleGrid cols={4}>
              <SearchRoundedIcon className={classes.search} onClick={() => showsearch()}/>

                <a href="https://www.facebook.com/TunisianModernNewspaperOfficiel">
                  <FacebookIcon className={classes.fcb} />
                </a>
                <a href="https://www.instagram.com/tunisian_modern_newspaper/">
                  <InstagramIcon className={classes.ins} />
                </a>
                <a href="https://www.linkedin.com/company/tunisian-modern-newspaper/">
                  <LinkedInIcon className={classes.ytb} />
                </a>
                
              </SimpleGrid>
            </Col>
            <Col span={1} style={centered}>
              {user}
            </Col>
          </Grid>
        </div>
      </MediaQuery>

      <MediaQuery smallerThan="xs" styles={hide}>
        <div style={{ marginBottom: 50 }}>
          <Grid
            columns={9}
            style={{
              width: "101%",
              height: "60px",
              backgroundColor: "#FFFFFF",
              position: "fixed",
              top: "0",
              left: "0",
              zIndex: "5",
            }}
          >
            <Col span={3} style={centered}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                title="drawer"
              />
              <Drawer
                opened={opened}
                onClose={() => setOpened(false)}
                title={<img alt="" src={logo} style={{ height: 40 }} />}
                padding="xl"
                size="xl"
              >
                <Button
                  component={Link}
                  to="/news"
                  className={classes.buttonDrawer}
                  style={{ useStyles }}
                >
                  News
                </Button>
                <Button
                  component={Link}
                  to="/blogs"
                  className={classes.buttonDrawer}
                  style={{ useStyles }}
                >
                  Blogs
                </Button>
                <Button
                  component={Link}
                  to="/events"
                  className={classes.buttonDrawer}
                  style={{ useStyles }}
                >
                  Events
                </Button>
                <Button
                  component={Link}
                  to="/podcasts"
                  className={classes.buttonDrawer}
                  style={{ useStyles }}
                >
                  podcasts
                </Button>
                <SimpleGrid
                  spacing="xl"
                  cols={3}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    alignContent: "center",
                    justifyContent: "center",
                    marginTop: 0,
                  }}
                >
                  <a href="https://www.facebook.com/TunisianModernNewspaperOfficiel">
                    <FacebookIcon
                      style={{ fontSize: "48px" }}
                      className={classes.fcb}
                    />
                  </a>
                  <a href="https://www.instagram.com/tunisian_modern_newspaper/">
                    <InstagramIcon
                      style={{
                        marginLeft: 50,
                        marginRight: 50,
                        fontSize: "48px",
                      }}
                      className={classes.ins}
                    />
                  </a>
                  <a href="https://www.linkedin.com/company/tunisian-modern-newspaper/">
                    <LinkedInIcon
                      style={{ fontSize: "48px" }}
                      className={classes.ytb}
                    />
                  </a>
                </SimpleGrid>
              </Drawer>
            </Col>
            <Col span={3} style={centered}>
              <Link to="/">
                <img alt="" src={logo} style={{ height: 40 }} />
              </Link>
            </Col>
            <Col span={3} style={centered}>
              <Link to="/loginNavigation">
                <AccountCircleIcon
                  className={classes.usr}
                  style={{
                    fontSize: 35,
                    marginTop: "10px",
                    marginLeft: "30px",
                  }}
                />
              </Link>
            </Col>
          </Grid>
        </div>
      </MediaQuery>
      <div style={{backgroundColor:'#ffffff', width:'100%', height:'60px'}}>
        <Center style={{height:'100%'}}>
            <TextInput variant="filled" style={{width:'80%'}} ></TextInput>
            <ActionIcon variant="light" style={{marginLeft:10,width:40, height:40, borderRadius:50}}>
              <SearchRoundedIcon/>
            </ActionIcon>
        </Center>

      </div>
    </div>
  );
}

export default NavBar;
