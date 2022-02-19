import React from "react";
import PageTitle from "../components/common/PageTitle";
import Editor from "../components/add-new-post/Editor";
import {  Container,
          Button,
          Row, 
          Col,
          InputGroup,
          InputGroupAddon,
          InputGroupText,
          FormSelect } from "shards-react";


const AddNewPost = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Add New Post" subtitle="Blog Posts" className="text-sm-left" />
    </Row>
    
    <Row>
      {/* Editor */}

      <Col lg="12" md="12">
        <Editor />
      </Col>

      <Col lg="12" md="12">
        <InputGroup className="mb-3">
          <InputGroupAddon type="prepend">
            <InputGroupText>Category</InputGroupText>
          </InputGroupAddon>
        <FormSelect>
          <option>Choose</option>
          <option>Sports</option>
          <option>Adventures</option>
          <option>EDS EDS</option>
        </FormSelect>
        </InputGroup>
        <div className="custom-file mb-3">
          <input type="file" className="custom-file-input" id="customFile2" />
          <label className="custom-file-label" htmlFor="customFile2">
            Choose first image
          </label>
        </div>
        <div className="custom-file mb-3">
          <input type="file" className="custom-file-input" id="customFile2" />
          <label className="custom-file-label" htmlFor="customFile2">
            Choose second image
          </label>
        </div>
        <Button theme="accent" size="sm" className="ml-auto">
            <i className="material-icons">file_copy</i> Publish
          </Button>
      </Col>


      {/* Sidebar Widgets */}
      
    </Row>
  </Container>
);

export default AddNewPost;
