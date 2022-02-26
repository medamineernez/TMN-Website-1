import React from "react";
import {Link} from "react-router-dom";
import { Container, Row, Col, Card, CardHeader, CardBody, Button, Breadcrumb, BreadcrumbItem, } from "shards-react";

import PageTitle from "../components/common/PageTitle";

const Tables = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Categories" subtitle="Categories Management" className="text-sm-left" />
    </Row>

    <Breadcrumb>
      <BreadcrumbItem>
        <Link to="/">Dashboard</Link>
      </BreadcrumbItem>
      <BreadcrumbItem active>Categories</BreadcrumbItem>
    </Breadcrumb>

    {/* Default Dark Table */}
    <Row>
      <Col>
        <Card small className="mb-4 overflow-hidden">
          <CardHeader className="bg-dark">
            <h6 className="m-0 text-white">Categories list</h6>
            <Link to="/new-Subcategory">
              <Button outline theme="primary" className="mb-2 mr-1" style={{float: "right"}}>
                Add Sub-Category
              </Button>
            </Link>
          </CardHeader>
          <CardBody className="bg-dark p-0 pb-3">
            <table className="table table-dark mb-0">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    Categories
                  </th>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    Sub-Categories
                  </th>
                  <th scope="col" className="border-0">
                    
                  </th>
                  <th scope="col" className="border-0">
                    
                  </th>
                  <th scope="col" className="border-0">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Podcast</td>
                  <td>1</td>
                  <td>Buisness</td>
                  <td></td>
                  <td></td>
                  <td>
                    <Button outline size="sm" theme="danger" className="mb-2 mr-1">
                      Delete Sub-Category
                    </Button>
                  </td>
                </tr>               
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Tables;
