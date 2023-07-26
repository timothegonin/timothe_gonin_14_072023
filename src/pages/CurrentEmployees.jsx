import React from 'react'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import EmployeesTableView from '../features/employeesTable/EmployeesTableView'

const CurrentEmployees = () => {
  return (
    <main id="employee-div" className="container">
      <h2 className="mt-5 mb-5">Current Employees</h2>
      <Form className="w-100 mb-4 ">
        <Row className="d-flex justify-content-between ms-5 me-5">
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
    </main>
  )
}

export default CurrentEmployees
