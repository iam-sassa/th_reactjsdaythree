import React from "react";
import axios from "axios";

import { useState, useEffect } from "react";
import { Col, Divider, Row } from "antd";
import "./Pages.css";

const style = {
  border: "2px solid lightblue",
  padding: "8px 0",
  margin: "25px",
  textAlign: "center",
  borderRadius: "10px",
};

const TodoPage = () => {
  const [todos, setTodos] = useState(null);

  const getTodos = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );

      if (response.status == 200) {
        setTodos(response.data);
      }
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
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
            {todos?.map((todo) => (
              <div onClick={Console} key={todo.id} style={style}>
                {" "}
                {todo.id}. {todo.title}
              </div>
            ))}
          </Col>
        </Row>
      </div>
    </>
  );
};
export default TodoPage;
