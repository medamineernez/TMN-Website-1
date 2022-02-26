import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, Button, Breadcrumb, BreadcrumbItem } from "shards-react";
import { Link } from "react-router-dom";
import PageTitle from "../components/common/PageTitle";

const Tables = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Users" subtitle="Users management" className="text-sm-left" />
    </Row>

    {/* Components Navigation */}
    <Breadcrumb>
      <BreadcrumbItem>
        <Link to="/">Dashboard</Link>
      </BreadcrumbItem>
      <BreadcrumbItem active>Users</BreadcrumbItem>
    </Breadcrumb>
    {/* Default Light Table */}
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Users list</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    ID
                  </th>
                  <th scope="col" className="border-0">
                    First Name
                  </th>
                  <th scope="col" className="border-0">
                    Last Name
                  </th>
                  <th scope="col" className="border-0">
                    E-mail
                  </th>
                  <th scope="col" className="border-0">

                    City
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
                  <td>Wael</td>
                  <td>Morjen</td>
                  <td>waelmorjen@gmail.com</td>
                  <td>Sousse</td>
                  <td></td>
                  <td>
                    <Button outline size="sm" theme="danger" className="mb-2 mr-1">
                      Delete
                    </Button></td>
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
