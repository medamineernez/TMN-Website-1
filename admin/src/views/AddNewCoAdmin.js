import React from "react";
import PageTitle from "../components/common/PageTitle";
import {
    ListGroup,
    ListGroupItem,
    Row,
    Col,
    Form,
    FormInput,
    Button,
    Container,
    Breadcrumb, 
    BreadcrumbItem,
  } from "shards-react";
import { Link } from "react-router-dom";


const AddNewCoAdmin = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Add New Co-Addmin" subtitle="Co-admin" className="text-sm-left" />
    </Row>
    
    <Breadcrumb>
      <BreadcrumbItem>
        <Link to="/">Dashboard</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link to="/co-admin">Co-Admins</Link>
      </BreadcrumbItem>
      <BreadcrumbItem active>New Co-Admin</BreadcrumbItem>
    </Breadcrumb>

    <ListGroup flush>
    <ListGroupItem className="p-3">
      <Row>
        <Col>
          <Form>
            <Row form>
            <Col md="6" className="form-group">
                <label htmlFor="feFirstName">First Name</label>
                <FormInput
                  id="feFirstName"
                  type="text"
                  placeholder="First name"
                  required={true}
                />
              </Col>
              <Col md="6">
                <label htmlFor="feLastName">Last Name</label>
                <FormInput
                  id="feLastName"
                  type="text"
                  placeholder="Last name"
                  required={true}
                />
              </Col>
              <Col md="6" className="form-group">
                <label htmlFor="feEmailAddress">Email</label>
                <FormInput
                  id="feEmailAddress"
                  type="email"
                  placeholder="Email"
                  required={true}
                />
              </Col>
              <Col md="6">
                <label htmlFor="fePassword">Password</label>
                <FormInput
                  id="fePassword"
                  type="password"
                  placeholder="Password"
                  required={true}
                />
              </Col>
            </Row>

            <Row form>
              <Col md="6" className="form-group">
                <label htmlFor="feInputCity">City</label>
                <FormInput id="feInputCity" />
              </Col>
            </Row>
            <Button type="submit">Create</Button>
          </Form>
        </Col>
      </Row>
    </ListGroupItem>
  </ListGroup>
  </Container>
);

export default AddNewCoAdmin;
