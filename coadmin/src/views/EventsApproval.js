import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, Button, Modal, ModalBody, ModalHeader, Breadcrumb, BreadcrumbItem, Badge, Alert } from "shards-react";
import { Link } from "react-router-dom";
import PageTitle from "../components/common/PageTitle";

export default class EventsManagement extends React.Component {
  
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
      <PageTitle sm="4" title="Events list" subtitle="Events Management" className="text-sm-left" />
    </Row>
    
    {/* Components Navigation */}
    <Breadcrumb>
      <BreadcrumbItem>
        <Link to="/">Dashboard</Link>
      </BreadcrumbItem>
      <BreadcrumbItem active>Events Management</BreadcrumbItem>
    </Breadcrumb>

    {/* Default Dark Table */}
    <Row>
      <Col>
        <Card small className="mb-4 overflow-hidden">
          <CardHeader className="bg-dark">
            <h6 className="m-0 text-white">Events list</h6>
            <Link to="/new-event">
              <Button outline theme="primary" className="mb-2 mr-1" style={{float: "right"}}>
                Add Event
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
                    Title
                  </th>
                  <th scope="col" className="border-0">
                    Date
                  </th>
                  <th scope="col" className="border-0">
                    Hour
                  </th>
                  <th scope="col" className="border-0">
                    Location
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
                  <td>Ted X</td>
                  <td>28/04/2022</td>
                  <td>10 AM</td>
                  <td>Sousse</td>
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
                <tr>
                  <td>2</td>
                  <td>Ted X</td>
                  <td>28/04/2022</td>
                  <td>10 AM</td>
                  <td>Sousse</td>
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
                  <td>3</td>
                  <td>Ted X</td>
                  <td>28/04/2022</td>
                  <td>10 AM</td>
                  <td>Sousse</td>
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
                Event successfully approved{" "}
              </Alert>
            </ModalBody>
        </Modal>
    </div>
    
  </Container>
    );
  }
}