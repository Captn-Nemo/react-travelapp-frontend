import React, { useEffect, useRef, useState } from "react";
import CustomNavbar from "../components/Navbar";
import {
  Button,
  Card,
  Carousel,
  Container,
  Nav,
  Row,
  Spinner,
  Col,
} from "react-bootstrap";
import Social from "../components/Social";
import { Link } from "react-router-dom";

const customFont = {
  fontFamily: "Montserrat",
  fontWeight: "bold",
};

const HomePage = () => {
  const myRef = useRef();
  const executeScroll = () => myRef.current.scrollIntoView();

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/popular/api/populardestinations")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <>
      <CustomNavbar />
      <Container className="mw-100 p-0">
        <Carousel style={{ overflow: "hidden" }}>
          <Carousel.Item>
            <img
              style={{ height: 500 }}
              className="w-100 h-80"
              src="https://picsum.photos/id/11/1366/768?blur=2"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1
                style={{
                  fontSize: 60,
                  ...customFont,
                }}
              >
                Your Journey . Your Story
              </h1>
              <p
                style={{
                  fontSize: 24,
                  ...customFont,
                }}
              >
                Discover world best tourist places
              </p>
              <Link className="navItem" to="/signup">
                <Button
                  style={{ ...customFont }}
                  className="mx-3"
                  data-testid="signup-btn-home"
                  variant="light"
                >
                  Sign Up
                </Button>
              </Link>

              <Button
                style={{ ...customFont }}
                variant="outline-light"
                data-testid="best-place-btn"
                onClick={executeScroll}
              >
                See Best Places
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: 500 }}
              className="w-100 h-80"
              src="https://picsum.photos/id/19/1366/768?blur=2"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1
                style={{
                  fontSize: 60,
                  ...customFont,
                }}
              >
                Your Journey . Your Story
              </h1>
              <p
                style={{
                  fontSize: 24,
                  ...customFont,
                }}
              >
                Discover world best tourist places
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: 500 }}
              className="w-100 h-80"
              src="https://picsum.photos/id/16/1366/768?blur=2"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1
                style={{
                  fontSize: 60,
                  ...customFont,
                }}
              >
                Your Journey . Your Story
              </h1>
              <p
                style={{
                  fontSize: 24,
                  ...customFont,
                }}
              >
                Discover world best tourist places
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="d-flex flex-column align-items-center justify-content-center my-5">
          <div className="mb-5">
            <h1
              className="text-center"
              style={{
                color: "#676770",
                letterSpacing: 5,
                ...customFont,
                fontSize: 30,
                fontWeight: "bolder",
              }}
            >
              POPULAR DESTINATIONS
            </h1>
            <h4
              style={{
                color: "#8e8e9c",
                letterSpacing: 5,
                ...customFont,
                fontSize: 18,
                fontWeight: "600",
              }}
            >
              SOME MOST AMAZING PLACES YOU CAN SEE
            </h4>
          </div>

          <div className="d-flex flex-row align-items-center justify-content-center">
            {data.length > 0 ? (
              data.map((item) => (
                <Card className="m-4">
                  <Card.Img variant="top" src={item.placeImage[0]} />
                  <Card.Body>
                    <Card.Title className="text-center">
                      <h3>
                        <i className="fas fa-map-marker-alt"></i>
                        <span>
                          <strong>{item.placeName}</strong>
                        </span>
                      </h3>
                    </Card.Title>
                    <Card.Text>{item.placeDesc}</Card.Text>
                  </Card.Body>
                </Card>
              ))
            ) : (
              <Spinner animation="grow" variant="secondary" />
            )}
          </div>
        </div>

        <div
          ref={myRef}
          className=" bg-dark py-5 d-flex flex-column align-items-center justify-content-center mt-5"
        >
          <div className="mb-4">
            <h1
              className="text-center"
              style={{
                color: "#fff",
                letterSpacing: 5,
                ...customFont,
                fontSize: 30,
                fontWeight: "800",
              }}
            >
              MOST RECENT ATTRACTIONS
            </h1>
            <h4
              className="text-center"
              style={{
                color: "#fff",
                letterSpacing: 5,
                ...customFont,
                fontSize: 18,
                fontWeight: "600",
              }}
            >
              Most RECENT attractions to go to
            </h4>
          </div>
          <Row>
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://picsum.photos/id/16/400/300"
                />
                <Card.Body>
                  <Card.Title className="text-center">
                    <h3>
                      <i className="fas fa-map-marker-alt"></i>
                      <span>
                        <strong>Most Recent Attraction 1</strong>
                      </span>
                    </h3>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://picsum.photos/id/17/400/300"
                />
                <Card.Body>
                  <Card.Title className="text-center">
                    <h3>
                      <i className="fas fa-map-marker-alt"></i>
                      <span>
                        <strong>Most Recent Attraction 2</strong>
                      </span>
                    </h3>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div className="d-flex flex-column align-items-center justify-content-center"></div>
        </div>
        <Social />
      </Container>
    </>
  );
};

export default HomePage;
