import React from 'react'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Stack from 'react-bootstrap/Stack'
import Badge from 'react-bootstrap/Badge'
import Pagination from 'react-bootstrap/Pagination'
import EmployeesTableView from '../features/employeesTable/EmployeesTableView'

const CurrentEmployees = () => {
  return (
    <main id="employee-div" className="container">
      <h2 className="mt-5 mb-5">Current Employees</h2>
      <Container fluid>
        <Form className="w-100 mb-4 ">
          <Row className="d-flex justify-content-between">
            <Col className="col-3 d-flex align-items-center">
              Show
              <Form.Select className="ms-3 me-3">
                <option>10</option>
                <option>25</option>
                <option>50</option>
                <option>100</option>
              </Form.Select>
              entries
            </Col>
            <Col className="col-3">
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </Col>
          </Row>
        </Form>
        <EmployeesTableView />
        <Stack direction="horizontal" className="my-3">
          <Badge bg="info">Showing 1 to 1 of 1 entries</Badge>
          <Pagination size="sm" className="ms-auto my-auto">
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </Stack>
      </Container>
    </main>
  )
}

export default CurrentEmployees
