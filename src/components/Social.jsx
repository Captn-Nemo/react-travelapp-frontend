import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./NavStyle.css";
const customFont = {
  fontFamily: "Montserrat",
  fontWeight: "bold",
};
function Social() {
  return (
    <>
      <div style={{ backgroundColor: "#f6f6f6" }} className="p-5">
        <Row>
          <Col>
            <h2>About Travel App</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
          </Col>
          <Col>
            <h2>Social</h2>
            <div className="d-flex flex-column">
              <span>
                <i class="fab fa-facebook"></i>
                <span class="Facebook fontawesomeicon"></span>Facebook
              </span>
            </div>
          </Col>
        </Row>
      </div>
      <div className="px-5 py-4" style={{ backgroundColor: "#383838" }}>
        <h5
          style={{
            ...customFont,
            color: "#9e9e9e",
            fontSize: 16,
            fontWeight: "200",
          }}
          className="text-center"
        >
          Copyright travel APP Inc. Made in India
        </h5>
      </div>
    </>
  );
}

export default Social;
