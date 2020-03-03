import React from "react";
import PropTypes from "prop-types";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

// import { Card } from "shards-react"
import { Row, Container } from "react-bootstrap"

class User extends React.Component {
  render() {
    const { name, avatar, email, phone, gender, isLoading } = this.props;

    const userDetails = (
      <Container>
        <Row>
      
        <img
          // className="img-thumbnail rounded-circle mx-auto mb-2 shadow-sm"
          src={avatar}
          alt={name}
          style={{ width: "100px", height: "100px" }}
        />
        <h4 className="mb-0">{name}</h4>
        <h3>{gender}</h3>
        <span className="mb-0>">{phone}</span>
        <span className="text-muted">{email}</span>
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
