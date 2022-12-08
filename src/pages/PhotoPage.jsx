import React from "react";
import axios from "axios";

import { useState, useEffect } from "react";
import { Col, Divider, Row } from "antd";
import "./Pages.css";

const style = {
  border: "2px solid green",
  padding: "8px 0",
  margin: "25px",
  textAlign: "center",
  borderRadius: "10px",
};

const PhotoPage = () => {
  const [photos, setPhotos] = useState(null);

  const getPhotos = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/Photos"
      );

      if (response.status === 200) {
        setPhotos(response.data);
      }
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);

  const Console = () => {
    console.log("sudah dipencet nih");
  };
  return (
    <>
      <Divider orientation="left">Photo Page</Divider>

      <div
        style={{
          width: "800px",
          height: "400px",
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
          <Col className="gutter-row" span={18}>
            {photos?.map((photo) => (
              <div onClick={Console} key={photo.id} style={style}>
                {" "}
                {photo.id}. {photo.title}
              </div>
            ))}
          </Col>
        </Row>
      </div>
    </>
  );
};
export default PhotoPage;
