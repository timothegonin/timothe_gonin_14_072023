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
        {/* CONTROLS AND TABLE */}
        <Form className="w-100 mb-4 ">
          <Row className="d-flex flex-column-reverse flex-md-row justify-content-between">
            <Col className="col-8 col-md-3 d-flex align-items-center">
              Show
              <Form.Select className="ms-3 me-3">
                <option>10</option>
                <option>25</option>
                <option>50</option>
                <option>100</option>
              </Form.Select>
              entries
            </Col>
            <Col className="col-8 mb-3 mb-md-0 col-md-3">
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </Col>
          </Row>
        </Form>
        <EmployeesTableView />

        {/* INFOS + PAGINATION */}
        <Stack
          direction="horizontal"
          gap={3}
          className="my-3 d-flex flex-column flex-md-row justify-content-md-between"
        >
          <Badge bg="primary">Showing 1 to 1 of 1 entries</Badge>
          <Pagination size="sm" className="md-ms-auto my-auto">
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
