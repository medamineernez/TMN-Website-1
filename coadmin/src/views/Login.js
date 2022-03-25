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

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="log">
      <img src="../images/TMN_cropped.jpg"/>
    <ListGroup flush>
    <ListGroupItem className="p-3">
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Row form>
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
            
            <Button size="sm" theme="dark" className="mb-2 mr-1" >
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