import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, Button, Modal, ModalBody, ModalHeader, Breadcrumb, BreadcrumbItem, Badge, Alert } from "shards-react";
import { Link } from "react-router-dom";
import PageTitle from "../components/common/PageTitle";

export default class BlogsApproval extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    const { open } = this.state;
    return (
  <Container fluid className="main-content-container px-4">

    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Blogs list" subtitle="Blogs approval" className="text-sm-left" />
    </Row>
    
    {/* Components Navigation */}
    <Breadcrumb>
      <BreadcrumbItem>
        <Link to="/">Dashboard</Link>
      </BreadcrumbItem>
      <BreadcrumbItem active>Blogs Approval</BreadcrumbItem>
    </Breadcrumb>

    {/* Default Dark Table */}
    <Row>
      <Col>
        <Card small className="mb-4 overflow-hidden">
          <CardHeader className="bg-dark">
            <h6 className="m-0 text-white">Requested Blogs</h6>
          </CardHeader>
          <CardBody className="bg-dark p-0 pb-3">
            <table className="table table-dark mb-0">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    Title
                  </th>
                  <th scope="col" className="border-0">
                    Category
                  </th>
                  <th scope="col" className="border-0">
                    Sub-Category
                  </th>
                  <th scope="col" className="border-0">
                    written by
                  </th>
                  <th scope="col" className="border-0">
                    Status
                  </th>
                  <th scope="col" className="border-0">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Week's recap</td>
                  <td>Blog</td>
                  <td>Buisness</td>
                  <td>Malek</td>
                  <td>
                  <Badge theme="success">Approved</Badge>
                  </td>
                  <td>
                    <Button onClick={this.toggle} outline size="sm" theme="success" className="mb-2 mr-1">
                        Approve
                    </Button>
                    <Button outline size="sm" theme="danger" className="mb-2 mr-1">
                        Reject
                    </Button>
                    <Link to="/Blog-details">
                        <Button outline size="sm" theme="info" className="mb-2 mr-1">
                        Info
                        </Button>
                    </Link>
                  </td>
                </tr> 
                <tr>
                  <td>2</td>
                  <td>worldwide</td>
                  <td>Blog</td>
                  <td>Adventure</td>
                  <td>Amine</td>
                  <td>
                  <Badge theme="warning">On hold</Badge>
                  </td>
                  <td>
                    <Button onClick={this.toggle} outline size="sm" theme="success" className="mb-2 mr-1">
                        Approve
                    </Button>
                    <Button outline size="sm" theme="danger" className="mb-2 mr-1">
                        Reject
                    </Button>
                    <Link to="/Blog-details">
                        <Button outline size="sm" theme="info" className="mb-2 mr-1">
                        Info
                        </Button>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>worldwide</td>
                  <td>Blog</td>
                  <td>Adventure</td>
                  <td>Amine</td>
                  <td>
                  <Badge theme="danger">Rejected</Badge>
                  </td>
                  <td>
                    <Button onClick={this.toggle} outline size="sm" theme="success" className="mb-2 mr-1">
                        Approve
                    </Button>
                    <Button outline size="sm" theme="danger" className="mb-2 mr-1">
                        Reject
                    </Button>
                    <Link to="/Blog-details">
                        <Button outline size="sm" theme="info" className="mb-2 mr-1">
                        Info
                        </Button>
                    </Link>
                  </td>
                </tr>                    
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <div>
        <Modal open={open} toggle={this.toggle}>
            <ModalHeader>Approved</ModalHeader>
            <ModalBody>
              <Alert theme="success">
                Blog successfully approved{" "}
              </Alert>
            </ModalBody>
        </Modal>
    </div>
    
  </Container>
    );
  }
}