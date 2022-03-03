import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from "shards-react";

import PageTitle from "../components/common/PageTitle";

const Category = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Categories Titles" subtitle="Categories management" className="text-sm-left" />
    </Row>

    {/* Default Light Table */}
    <Row className="page-header px-5">
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Categories list</h6>
            <Button size="sm" theme="success" className="mb-2 mr-1" id="pos">Create</Button>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                  <code>&nbsp;</code>Title
                  </th>
                  <th scope="col" className="border-0">
                    References Tool
                  </th>
                  <th scope="col" className="border-0">
                  
                  </th>
                  <th scope="col" className="border-0">
                    
                  </th>
                  <th scope="col" className="border-0">
                           

                  </th>
                  <th scope="col" className="border-0">
                    <code>&nbsp;</code>Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>&nbsp;</code>Telecom</td>
                  <td><code>&nbsp;</code>Wael</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <Button outline size="sm" theme="success" className="mb-2 mr-1">
                      Show
                    </Button>
                    <Button outline size="sm" theme="warning" className="mb-2 mr-1">
                      Modify
                    </Button>
                    <Button outline size="sm" theme="danger" className="mb-2 mr-1">
                      Delete
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

export default Category;
