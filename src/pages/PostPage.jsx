import React from "react";
import axios from "axios";

import { useState, useEffect } from "react";
import { Col, Divider, Row } from "antd";
import "./Pages.css";

import { useNavigate } from "react-router-dom";

const style = {
  border: "2px solid yellow",
  padding: "8px 0",
  margin: "25px",
  textAlign: "center",
  borderRadius: "10px",
};

const PostPage = () => {
  const navigate = useNavigate();

  const navigateToDetail = (post) => {
    navigate(`/postdetail/${post.id}`);
  };

  const [posts, setPosts] = useState(null);

  const getPosts = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/Posts"
      );

      if (response.status == 200) {
        setPosts(response.data);
      }
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
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
            {posts?.map((post) => (
              <div onClick={() => {navigateToDetail(post)}} key={post.id} style={style}>
                {" "}
                {post.id}. {post.title}
              </div>
            ))}
          </Col>
        </Row>
      </div>
    </>
  );
};
export default PostPage;
