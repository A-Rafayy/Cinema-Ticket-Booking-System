import { Col, Row } from "antd";
import React from "react";
import "./MovieCard.css";

const MovieCard = (props) => {
  const movieInfo = props.movieInfo;
  return (
    <div className="MovieCard-Div1">
      <Row className="MovieCard-Div1-R1">
        <Col md={10} className="MovieCard-Div1-R1-C1">
          <img className="MovieCard-image" src={movieInfo.source} alt="movie" />
        </Col>
        <Col className="MovieCard-Div1-R1-C2">
          <div className="MovieCard-Div1-R1-C2-div1">
            <h1 className="MovieCard-Div1-R1-C2-div1-h1">{movieInfo.name}</h1>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MovieCard;
