import React, { useState } from "react";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormGroup,
  FormCheckbox,
  FormSelect,
  Button
} from "shards-react";
import "../shards-dashboard/styles/Login.css";
import { useHistory } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name,setName] = useState("");
  const history=useHistory();
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    let data={email,password,name};

  fetch('url',
  {
    method:'POST',
    headers: {"Content-Type":"application/json"},
    body:JSON.stringify(data)
  }
  .then(res => {
    if (!res.ok) { 
      
      history.push("/blog-posts");
    } 
    return res.json();
  })
  )
  }
  return (
    <div className="log">
      <img
                id="main-logo"
                className="d-inline-block align-top mr-1"
                style={{ maxWidth: "250px" }}
                src={require("../images/TMN_inverted.jpg")}
                alt="Shards Dashboard"
              />
    <ListGroup flush>
    <ListGroupItem className="p-3">
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Row form>
            <Col md="6" className="form-group">
                <label htmlFor="feEmailAddress">Name</label>
                <FormInput
                  id="feEmailAddress"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Col>
              <Col md="6" className="form-group">
                <label htmlFor="feEmailAddress">Email</label>
                <FormInput
                  id="feEmailAddress"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Col>
              <Col md="6">
                <label htmlFor="fePassword">Password</label>
                <FormInput
                  id="fePassword"
                  type="password"
                  placeholder="Password"
                  value={password}
            onChange={(e) => setPassword(e.target.value)}
                />
              </Col>
            </Row>
            <br></br>
            
            <Button onClick={handleSubmit} size="sm" theme="dark" className="mb-2 mr-1" >
        Sign In
      </Button>
      
          </Form>
        </Col>
      </Row>
    </ListGroupItem>
  </ListGroup>
  </div>
  );
}