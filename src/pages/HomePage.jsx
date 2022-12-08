import React from "react";
import { Menu } from "antd";
import { Layout } from "antd";
import {
  UnorderedListOutlined,
  FileImageOutlined,
  UserOutlined,
  EditOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Pages.css";

const { Header, Content } = Layout;

const HomePage = () => {
  const navigate = useNavigate();

  const navigateToPost = () => {
    navigate("/post", { replace: true });
  };

  const navigateToPhoto = () => {
    navigate("/photo", { replace: true });
  };

  const navigateToUser = () => {
    navigate("/user", { replace: true });
  };

  const navigateToTodo = () => {
    navigate("/todo", { replace: true });
  };

  return (
    <>
      <Layout>
        <Header>
          <Menu mode="horizontal" defaultSelectedKeys={["mail"]}>
            <Menu.SubMenu
              key="SubMenu"
              title="Choose Here"
              icon={<MenuOutlined />}
            >
              <Menu.Item
                onClick={navigateToPost}
                key="two"
                icon={<EditOutlined />}
              >
                Post
              </Menu.Item>
              <Menu.Item
                onClick={navigateToUser}
                key="three"
                icon={<UserOutlined />}
              >
                User
              </Menu.Item>
              <Menu.Item
                onClick={navigateToTodo}
                key="four"
                icon={<UnorderedListOutlined />}
              >
                Todo
              </Menu.Item>
              <Menu.Item
                onClick={navigateToPhoto}
                key="five"
                icon={<FileImageOutlined />}
              >
                Photo
              </Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Header>
        <Layout>
          <Content>
            <center>
              <h1>Welcome to Playing with Axios</h1>
            </center>

            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default HomePage;
