import React, {useEffect, useState} from "react";
import { Container, Row, Col, Breadcrumb, BreadcrumbItem, CardBody, Card, CardFooter, } from "shards-react";
import { Link, useParams } from "react-router-dom";
import PageTitle from "../components/common/PageTitle";

const BlogDetails = () => {

  let {id}=useParams()
  
  const [data, setData] = useState()
    const fetchData = () => {
      fetch(`http://localhost:3000/api/blogs/detail/${id}`)
        .then(response => {
          return response.json()
        })
        .then(data => {
          setData(data)
        })
    }
  
    useEffect(() => {
      fetchData()  
    }, [])


  return(
  
  <Container fluid className="main-content-container px-4">

    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Blog details" subtitle="Blogs Management" className="text-sm-left" />
    </Row>
    
    {/* Components Navigation */}
    <Breadcrumb>
      <BreadcrumbItem>
        <Link to="/">Dashboard</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link to="/Blogs-management">Blogs management</Link>
    </BreadcrumbItem>
    <BreadcrumbItem active></BreadcrumbItem>
    </Breadcrumb>

    {/* Default Dark Table */}
    <Row>
      <Col>
      <Row>
          { data &&(
            <Col lg="12" md="6" sm="12" className="mb-4">
              <Card small className="card-post h-100">
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url('${data.image}')`, height: 300 }}
                />
                {data.image}
                <CardBody>
                  <h5 className="card-title">
                    <p className="text-fiord-blue">
                      {data.title}
                    </p>
                  </h5>
                  <p className="card-text">{data.content}</p>
                </CardBody>
                <CardFooter className="text-muted border-top py-3">
                  <span className="d-inline-block">
                    By
                    <p className="text-fiord-blue">
                      {data.author}
                    </p>
                  </span>
                </CardFooter>
              </Card>
            </Col>
          )}
        </Row>
      </Col>
    </Row>
  </Container>
  )
          
}

export default BlogDetails;