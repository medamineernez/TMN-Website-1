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
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    FormSelect
  } from "shards-react";
import { Link } from "react-router-dom";


const AddNewCoAdmin = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Add New Sub-Category" subtitle="Sub-Categories" className="text-sm-left" />
    </Row>
    
    <Breadcrumb>
      <BreadcrumbItem>
        <Link to="/">Dashboard</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link to="/co-admin">Categories</Link>
      </BreadcrumbItem>
      <BreadcrumbItem active>New Sub-Category</BreadcrumbItem>
    </Breadcrumb>

    <ListGroup flush>
    <ListGroupItem className="p-3">
      <Row>
        <Col>
          <Form>
            <Row form>
            <Col md="6" className="form-group">
                <label htmlFor="feFirstName">Sub-Category Name</label>
                <FormInput
                  id="feCategoryName"
                  type="text"
                  placeholder="Sub-Category name"
                  required={true}
                />
              </Col>
              <Col md="6">
              <label htmlFor="feFirstName">References</label>
              <InputGroup className="mb-3" >
                <InputGroupAddon type="prepend">
                <InputGroupText>Refers to</InputGroupText>
                </InputGroupAddon>
                <FormSelect>
                <option>Choose</option>
                <option>Blog</option>
                <option>Podcast</option>
                <option>News</option>
                </FormSelect>
              </InputGroup>
              </Col>
            </Row>
            <Button type="submit">Add</Button>
          </Form>
        </Col>
      </Row>
    </ListGroupItem>
  </ListGroup>
  </Container>
);

export default AddNewCoAdmin;
