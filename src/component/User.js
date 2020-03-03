import React from "react";
import PropTypes from "prop-types";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
// import ReactDataGrid from "react-data-grid";

// import { Card } from "shards-react"
import { Row, Container, Col } from "react-bootstrap"



class User extends React.Component {
  render() {
    const { name, avatar, email, phone, gender, isLoading } = this.props;

    const userDetails = (
    
      <Container>
        <Row>
      <Col md={2}>
        <img
          className="img-thumbnail rounded-circle mx-auto mb-1 shadow-sm"
          src={avatar}
          alt={name}
          style={{ width: "50px", height: "50px" }}
        /></Col>
        {/* <div> */}
        <Col md={1}><h4 className="mb-0">{name.first}</h4></Col>

        <Col md={1} style={{ fontFamily: "Times" }}><h4 className="mb-0">{name.last}</h4></Col>
        {/* </div> */}
        <Col md={2} style={{ fontFamily: "Times" }}><h3>{gender}</h3></Col>
        <Col md={2} ><span className="mb-0>">{phone}</span></Col>
        <Col md={1}><span className="mb-500">{email}</span></Col>
        </Row>
        </Container>

    );

    const loadingMessage = <span className="d-flex m-auto">Loading...</span>;

    return (
      <div
        // className="mx-auto mt-4 text-center p-5"
        // style={{ maxWidth: "300px", minHeight: "250px" }}
      >
        {isLoading ? loadingMessage : userDetails}
      </div>
    );
  }
}

User.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  gender: PropTypes.string,
  isLoading: PropTypes.bool
};

export default User;
