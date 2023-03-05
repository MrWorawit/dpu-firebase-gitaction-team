import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Common from "./common";
import data from "./member.json";
const BASE_URL = Common.API_URL;
export default class report extends Component {
  state = {
    members: [],
  };
  componentDidMount() {
    this.setState({
      members: data,
    });
  }
  render() {
    const { members } = this.state;
    return (
      <div>
        <Row>
          <Col lg="9">
            <div align="left">
              <h3>รายชื่อสมาชิกภายในทีม</h3>
            </div>
          </Col>
        </Row>

        <div style={{ paddingTop: "15px" }}>
          <Card>
            <Card.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th style={{ textAlign: "center" }}>รหัสนักศึกษา</th>
                    <th style={{ textAlign: "center" }}>ชื่อ</th>
                    <th style={{ textAlign: "center" }}>นามสกุล</th>
                  </tr>
                </thead>
                <tbody>
                  {members?.map((rs, index) => (
                    <tr key={index}>
                      <td align="center">{rs.code}</td>
                      <td>{rs.name}</td>
                      <td>{rs.surname}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}
