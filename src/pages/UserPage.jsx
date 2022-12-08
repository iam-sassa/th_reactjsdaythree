import React from "react";
import axios from "axios";

import { useState, useEffect } from "react";
import { Col, Divider, Row } from "antd";
import "./Pages.css";

const style = {
  border: "2px solid pink",
  padding: "8px 0",
  margin: "25px",
  textAlign: "center",
  borderRadius: "10px",
};

const UserPage = () => {
  const [users, setUsers] = useState(null);

  const getUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (response.status === 200) {
        setUsers(response.data);
      }
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const Console = () => {
    console.log("sudah dipencet nih");
  };
  return (
    <>
      <Divider orientation="left">Post Page</Divider>

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
            {users?.map((user) => (
              <div onClick={Console} key={user.id} style={style}>
                {" "}
                {user.id}. {user.name}
              </div>
            ))}
          </Col>
        </Row>
      </div>
    </>
  );
};
export default UserPage;
