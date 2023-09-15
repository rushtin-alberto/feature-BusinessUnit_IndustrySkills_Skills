import React, { useState, useEffect } from "react";
import { Form, Container, Row, Col, Button, Table } from "react-bootstrap";
import Swal from "sweetalert2";

function BusinessUnit() {
  const [businessUnitName, setBusinessUnitName] = useState("");
  const [positionName, setPositionName] = useState("");
  const [businessUnitAssignments, setBusinessUnitAssignments] = useState([]);
  const [positionAssignments, setPositionAssignments] = useState([]);
  const [isActiveBusinessUnit, setIsActiveBusinessUnit] = useState("");
  const [isActivePosition, setIsActivePosition] = useState("");

  useEffect(() => {
    businessUnitName !== ""
      ? setIsActiveBusinessUnit(true)
      : setIsActiveBusinessUnit(false);
  }, [businessUnitName]);

  useEffect(() => {
    positionName !== ""
      ? setIsActivePosition(true)
      : setIsActivePosition(false);
  }, [positionName]);

  const handleAssignBusinessUnit = () => {
    if (businessUnitName.trim() !== "") {
      const newAssignment = {
        businessUnit: businessUnitName,
      };
      Swal.fire({
        title: "Business Unit added to the project!",
        icon: "success",
      });
      setBusinessUnitAssignments([...businessUnitAssignments, newAssignment]);
      setBusinessUnitName("");
    }
  };

  const handleAssignPosition = () => {
    if (positionName.trim() !== "") {
      const newAssignment = {
        position: positionName,
      };
      Swal.fire({
        title: "Position added to the project!",
        icon: "success",
      });
      setPositionAssignments([...positionAssignments, newAssignment]);
      setPositionName("");
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <Container>
            <Form>
              <Row>
                <Col md={12}>
                  <Form.Group className="d-flex justify-content-between">
                    <div>
                      <Form.Label>Business Unit Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter business unit's name"
                        value={businessUnitName}
                        onChange={(e) => setBusinessUnitName(e.target.value)}
                      />
                      <Button
                        variant="primary"
                        className="button1 mt-3"
                        onClick={handleAssignBusinessUnit}
                        disabled={!isActiveBusinessUnit}
                      >
                        Assign Business Unit
                      </Button>
                    </div>
                    <div></div>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
            <Table className="mt-4" striped bordered>
              <thead>
                <tr>
                  <th>Business Unit Name</th>
                </tr>
              </thead>
              <tbody>
                {businessUnitAssignments.map((assignment, index) => (
                  <tr key={index}>
                    <td>{assignment.businessUnit}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
        </Col>
        <Col md={6}>
          <Container>
            <Form>
              <Row>
                <Col md={12}>
                  <Form.Group className="d-flex justify-content-between">
                    <div>
                      <Form.Label>Position Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter position's name"
                        value={positionName}
                        onChange={(e) => setPositionName(e.target.value)}
                      />
                      <Button
                        variant="primary"
                        className="button2 mt-3"
                        onClick={handleAssignPosition}
                        disabled={!isActivePosition}
                      >
                        Assign Position
                      </Button>
                    </div>
                    <div></div>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
            <Table className="mt-4" striped bordered>
              <thead>
                <tr>
                  <th>Position Name</th>
                </tr>
              </thead>
              <tbody>
                {positionAssignments.map((assignment, index) => (
                  <tr key={index}>
                    <td>{assignment.position}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default BusinessUnit;
