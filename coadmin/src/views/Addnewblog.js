import React,{useState} from "react";
import PageTitle from "../components/common/PageTitle";
import {
    ListGroup,
    ListGroupItem,
    Row,
    Col,
    Card,
    Form,
    FormInput,
    Button,
    CardBody,
    Container,
    CardHeader,
    Breadcrumb, 
    BreadcrumbItem,
  } from "shards-react";
  import ReactQuill from "react-quill";
import { Link } from "react-router-dom";


const Addnewblog = () => {
  
  return(

    <Container fluid className="main-content-container px-4">
       {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Add new Blog" subtitle="Blogs management" className="text-sm-left" />
    </Row>


    <Breadcrumb>
      <BreadcrumbItem>
        <Link to="/">Dashboard</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link to="/Blogmanagement">Blog Management</Link>
      </BreadcrumbItem>
      <BreadcrumbItem active>New Blog</BreadcrumbItem>
    </Breadcrumb>


    <Row>
        <Col>
        <Card small className="mb-3">
    <CardBody>
      <Form className="add-new-post">
      <FormInput size="lg" className="mb-3" placeholder="Your Post Title" required />
      <FormInput size="lg" className="mb-3" placeholder="Your Propriety"  required />
        <FormInput size="lg" className="mb-3" placeholder="Your Post Title" required />
        <ReactQuill className="add-new-post__editor mb-1" />
        <Button type="submit" size="sm" theme="success" className="mb-2 mr-1" id="pos" >Create</Button>
      </Form>
    </CardBody>
  </Card>
        </Col>
      </Row>
      </Container>
);
};
export default Addnewblog;
