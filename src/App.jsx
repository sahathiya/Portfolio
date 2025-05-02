import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Main, BlogPage, ProjectPage } from "./pages";
import BackToTop from "./components/BackToTop/BackToTop.jsx";
import ScrollToTop from "./utils/ScrollToTop";
import "./App.css";

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/projects" element={<ProjectPage />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <BackToTop />
    </div>
  );
}

export default App;
