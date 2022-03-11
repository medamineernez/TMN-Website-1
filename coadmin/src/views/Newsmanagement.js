import React,{ useState }  from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, Button ,FormInput,
  Form} from "shards-react";
  import ReactQuill from "react-quill";

import PageTitle from "../components/common/PageTitle";
import { Link } from "react-router-dom";

const Newsmanagement = () => {
  
  return (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="News" subtitle="News Management" className="text-sm-left" />
    </Row>

    {/* Default Light Table */}
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">News list</h6>
           <Link to="/Addnews">
            <Button
                  size="sm"
                  theme="success"
                  className="mb-2 mr-1"
                  id="pos"
                  
                >
                  Create
                </Button>
                </Link>
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
  };
export default Newsmanagement;
