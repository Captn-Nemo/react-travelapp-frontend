import React, { useEffect, useState } from "react";
import CustomNavbar from "../components/Navbar";
import {
  Alert,
  Button,
  Card,
  Carousel,
  Container,
  Spinner,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import Social from "../components/Social";
import { Form } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";


function SignUp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);

  const [userData, setUserData] = useState({
    fname: "",
    lname: "",
    email: "",
    address: "",
    pincode: "",
    state: "",
    city: "",
    gender: "",
  });

  function onStateChange(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  function addUserSignUp() {
    if (
      userData.fname === "" ||
      userData.lname === "" ||
      userData.email === "" ||
      userData.address === "" ||
      userData.gender === "" ||
      userData.state === "" ||
      userData.city === "" ||
      userData.pincode === ""
    ) {
      alert("Please fill all fields");
      return;
    } else {
      setLoading(true);
      setError(false);
      axios
        .post("http://localhost:9000/users/api/signup", userData)
        .then((res) => {
          console.log(res);
          setShow(true);
          setLoading(false);
        })
        .catch((err) => {
          console.log(error);
          setError(true);
          setLoading(false);
        });
    }
    // console.log(userData);
  }

  return (
    <>
      <CustomNavbar />
      <Container className="mt-3 pb-5 pt-4 w-75">
        <Row className="mb-3">
          <h1
            className="text-center"
            style={{
              color: "#676770",
              letterSpacing: 1,
              fontSize: 30,
              fontWeight: "bolder",
            }}
          >
            SIGN UP WITH US
          </h1>

          <h1
            className="text-center"
            style={{
              color: "#676770",
              letterSpacing: 1,

              fontSize: 10,
              fontWeight: "bolder",
            }}
          >
            GET TO KNOW LATEST OFFERS AND ANNOUNCEMENTS
          </h1>
        </Row>
        <Form>
          <Row>
            <Col>
              <ToastContainer position="top-end" className="p-3">
                <Toast
                  onClose={() => setShow(false)}
                  show={show}
                  delay={3000}
                  autohide
                  bg="success"
                >
                  <Toast.Header>
                    <strong className="me-auto">User Added</strong>
                  </Toast.Header>
                  <Toast.Body className="text-white">
                    Registration is Successfull!
                  </Toast.Body>
                </Toast>
                <Toast
                  onClose={() => setError(false)}
                  show={error}
                  delay={3000}
                  autohide
                  bg="danger"
                >
                  <Toast.Header>
                    <strong className="me-auto">Error</strong>
                  </Toast.Header>
                  <Toast.Body className="text-white">
                    Error Occured . Please Try Again
                  </Toast.Body>
                </Toast>
              </ToastContainer>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="firstName">
                <Form.Control
                  name="fname"
                  data-testid="fname"
                  placeholder="enter your first name..."
                  onChange={onStateChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="lastName">
                <Form.Control
                  name="lname"
                  data-testid="lname"
                  placeholder="Enter your last name..."
                  onChange={onStateChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                  name="email"
                  data-testid="email"
                  onChange={onStateChange}
                  placeholder="enter your email id..."
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Control
                as="textarea"
                data-testid="address"
                rows={3}
                name="address"
                onChange={onStateChange}
                placeholder="Enter your address"
              />
            </Form.Group>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <label>Gender</label>
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      data-testid="gender"
                      label="Male"
                      name="gender"
                      value="male"
                      type={type}
                      id={`inline-${type}-1`}
                      onChange={onStateChange}
                    />
                    <Form.Check
                      inline
                      data-testid="gender"
                      label="Female"
                      name="gender"
                      value="female"
                      type={type}
                      id={`inline-${type}-2`}
                      onChange={onStateChange}
                    />
                    <Form.Check
                      inline
                      data-testid="gender"
                      label="Other"
                      name="gender"
                      value="other"
                      type={type}
                      id={`inline-${type}-3`}
                      onChange={onStateChange}
                    />
                  </div>
                ))}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Select
                aria-label="Default select example"
                data-testid="state"
                name="state"
                onChange={onStateChange}
              >
                <option value="">State</option>
                <option value="Kerala">Kerala</option>
                <option value="Tamilnadu">Tamilnadu</option>
                <option value="Karnataka">Karnataka</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Select
                aria-label="Default select example"
                name="city"
                data-testid="city"
                onChange={onStateChange}
              >
                <option>District</option>
                <option value="Thrissur">Thrissur</option>
                <option value="Kannur">Kannur</option>
                <option value="Trivandrum">Trivandrum</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                  name="pincode"
                  data-testid="pincode"
                  onChange={onStateChange}
                  type="pin"
                  placeholder="enter your pin code"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="d-grid gap-2">
                <Button
                  disabled={loading}
                  data-testid="signUp-btn"
                  variant="secondary"
                  size="lg"
                  onClick={addUserSignUp}
                >
                  {loading && (
                    <Spinner animation="border" size="sm" role="status" />
                  )}
                  SIGN UP
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Container>
      <Social />
    </>
  );
}

export default SignUp;
