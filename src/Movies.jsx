import React, { Component } from "react";
import { Row, Card, Col } from "react-bootstrap";
import axios from "axios";
const BASE_URL = "https://api-teams.onrender.com";

export default class Product extends Component {
  state = {
    movies: [],
  };
  getData = async () => {
    try {
      await axios
        .get(`${BASE_URL}/movies`, {
          headers: { "Access-Control-Allow-Origin": "*" },
        })
        .then((response) => {
          console.log(response);
          let res = response.data;

          if (res === undefined) {
            this.setState({
              movies: [],
            });
          }
          this.setState({
            movies: res,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        <div>
          <h2>รายชื่อภาพยนตร์</h2>
        </div>

        <Row>
          {this.state.movies.map((rs, index) => (
            <Col xl="3" lg="4" md="6" sm="12" key={index}>
              <div style={{ paddingBottom: "25px" }}>
                <Card>
                  <Card.Img variant="top" src={rs.cover} />
                  <Card.Body>
                    <Card.Title>
                      <h3>{rs.name}</h3>
                    </Card.Title>
                    <br />
                    <strong>Directed by : {rs.directed_by} </strong>
                    <strong>Starring :</strong> {rs.starring}
                    <br />
                    <br />
                    <small>Release date : {rs.opening_on}</small>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
