import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import TodoPage from "./pages/TodoPage";
import PhotoPage from "./pages/PhotoPage";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import TodoDetail from "./components/TodoDetail";
import UserDetail from "./components/UserDetail";
import PhotoDetail from "./components/PhotoDetail";
import PostDetail from "./components/PostDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/post" element={<PostPage />}>
            <Route path="/postdetail/:id" element={<PostDetail />} />
          </Route>
          <Route path="/todo" element={<TodoPage />}>
            <Route path="/tododetail/:id" element={<TodoDetail />} />
          </Route>
          <Route path="/user" element={<UserPage />}>
            <Route path="/userdetail/:id" element={<UserDetail />} />
          </Route>
          <Route path="/photo" element={<PhotoPage />}>
            <Route path="/photodetail/:id" element={<PhotoDetail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
